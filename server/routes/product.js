import express from 'express'
import { getProduct, displaySingleProduct, addProduct, deleteProduct, updatePost } from '../controllers/product.js'



const router = express.Router()

router.get('/', getProduct)
router.get('/:id', displaySingleProduct)
router.post('/', addProduct)
router.patch('/:id', updatePost)
router.delete('/:id', deleteProduct)

export default router;