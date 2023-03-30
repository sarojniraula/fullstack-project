import express from 'express'

import {
  createBook,
  findById,
  deleteBook,
  findAll,
  updateBook,
} from '../controllers/bookController'

const router = express.Router()

router.get('/', findAll)
router.get('/:bookId', findById)
router.put('/:bookId', updateBook)
router.delete('/:bookId', deleteBook)
router.post('/', createBook)

export default router
