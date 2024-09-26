import mongoose from 'mongoose';

const connectDB = async (url) => {
    try {
      mongoose.set('strictQuery', true); // For MongoDB 6.0 and above
      await mongoose.connect(url);  // No need for deprecated options
      console.log('MongoDB connected');
    } catch (err) {
      console.error('Error connecting to MongoDB:', err.message);  // Logs the actual error message
    }
  };

export default connectDB;