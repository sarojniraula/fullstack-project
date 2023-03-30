import mongoose, { Document } from 'mongoose'

export type BookDocument = Document & {
  title: string
  publishedYear: number
  publisher: string
  pages: number
}

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  publishedYear: {
    type: Number,
    required: true,
  },
  publisher: {
    type: String,
    required: true,
  },
  pages: {
    type: Number,
    required: true,
    min: 1,
  },
})

export default mongoose.model<BookDocument>('Book', bookSchema)
