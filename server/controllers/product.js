import ProductMessage from "../models/productSchema.js";
import mongoose from "mongoose";

export const getProduct = async (req, res) => {
  try {
    const product = await ProductMessage.find();
    console.log(product);
    res.status(200).json(product);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const displaySingleProduct = async (req, res) =>{

}

export const addProduct = async (req, res) => {
  const body = req.body;
  console.log('data got in backend',body)
  const newProduct = new ProductMessage(body);
  try {
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }

}