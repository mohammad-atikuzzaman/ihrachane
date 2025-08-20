import mongoose from 'mongoose';
import { ST } from 'next/dist/shared/lib/utils';

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user',
  },
  verified: {
    type: Boolean,
    default: false
  },
  OTP: String,
  expire: String
});

export default mongoose.models.User || mongoose.model('User', userSchema);