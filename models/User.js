// User Model
import mongoose from 'mongoose';
//import Store from './Store'
const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, required: true, default: false },
    isSeller: { type: Boolean, required: true, default: false }
  },
  {
    timestamps: true,
  }
);
const User = mongoose.models.User || mongoose.model('User', userSchema);
export default User;