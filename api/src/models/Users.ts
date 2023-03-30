import mongoose, { Document } from 'mongoose'

export type UsersDocument = Document & {
  firstname: string
  lastname: string
  address: string
  email: string
}

const usersSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  address: {
    type: String,
    required: true,
  },
})

export default mongoose.model<UsersDocument>('Users', usersSchema)
