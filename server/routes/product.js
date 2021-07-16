import express from 'express'
import { getProduct, displaySingleProduct, addProduct, deleteProduct } from '../controllers/product.js'



const router = express.Router()

router.get('/', getProduct)
router.get('/:id', displaySingleProduct)
router.post('/', addProduct)
router.delete('/:id', deleteProduct)

export default router;