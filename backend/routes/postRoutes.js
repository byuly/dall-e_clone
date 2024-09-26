import express from 'express';
import * as dotenv from 'dotenv';
import { v2 as cloudinary } from 'cloudinary'; 
// Utilized Cloudinary for scalability with photos
import Post from '../mongodb/models/post.js';

dotenv.config();

const router = express.Router();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

// GET ALL POSTS
router.route('/').get(async(req, res) => {
    try {
        const posts = await Post.find({});

        res.status(200).json({ success: true, data: posts})
    } catch (error) {
        res.status(500).json({ success: false, message: "get"})
    }
})

// CREATE A POST
router.route('/').post(async(req, res) => {
    try {
        const{name,prompt,photo} = req.body;
        console.log('Received post data:', { name, prompt, photo });
        const photoUrl = await cloudinary.uploader.upload(photo);
        const newPost = await Post.create({
            name,
            prompt,
            photo: photoUrl.url,});
    console.log('Post successfully created:', newPost);  // Log the created post


    res.status(201).json({ success:true, data: newPost});
    } catch (error) {
        console.error('Error creating post:', error.message);
        res.status(500).json({ success: false, message: "post"})
    }
});

export default router;