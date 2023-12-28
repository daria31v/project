import mongoose from 'mongoose'

const { Schema, models } = mongoose;

const registerSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { timestamps: true },
)

const NewUser = mongoose.models.User || mongoose.model('NewUser', registerSchema)

export default NewUser
