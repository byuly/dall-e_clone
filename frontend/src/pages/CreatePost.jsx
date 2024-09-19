import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'

import { preview } from '../assets';
import { getRandomPrompt } from '../utils'
import { FormField, Loader } from '../components';

const handleSubmit = () => {

}

const handleChange = (e) => {

}

const handleSurpriseMe = () => {

}


const CreatePost = () => {
  const navigate = useNavigate();
  const [form, setform] = useState({
    name:'',
    prompt:'',
    photo:'',
  });
  const [generatingImg, setgeneratingImg] = useState(false);
  const [loading, setloading] = useState(false);

  return (
    <section className="max-w-7xl mx-auto">
      <div>
        <h1 className="font-extrabold text-[#222328] text=[32px]">
          Create
        </h1>
        <p className = "mt-2 text-[#666e75] text-[16px] max-2 [500px}">
          Create imaginative and visually stunning images through DALL-E AI
          and share them with the community
        </p>
      </div>

      <form className="mt-16 max-2-3xl" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-5">
          <FormField 
            LabelName="Your name"
            type= "text"
            placeholder="John Doe"
            value={form.name}
            handleChange={handleChange}
          />
           <FormField 
            LabelName="Prompt"
            type= "text"
            placeholder="random prompt statement"
            value={form.prompt}
            handleChange={handleChange}
            isSurpriseMe
            handleSurpriseMe={handleSurpriseMe}
          />
        </div>
      </form>
    </section>
  )
}

export default CreatePost