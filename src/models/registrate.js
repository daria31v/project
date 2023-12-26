import mongoose, { Schema, models } from 'mongoose';

const registerSchema = new Schema(
  {
    first: { type: String, required: true },
    last: { type: String, required: true},
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { timestamps: true },
)

const User = models.User || mongoose.model('User', registerSchema);
export default User;