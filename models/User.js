// User Model
import mongoose from 'mongoose';
//import Store from './Store'

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['user', 'admin', 'seller'],
    default: 'user',
  },
});

export default mongoose.models.User || mongoose.model("User", UserSchema);