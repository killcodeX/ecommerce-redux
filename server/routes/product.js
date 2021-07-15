import express from 'express'
import { getProduct, displaySingleProduct, addProduct } from '../controllers/product.js'



const router = express.Router()

router.get('/', getProduct)
router.get('/:id', displaySingleProduct)
router.post('/', addProduct)

export default router;