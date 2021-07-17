import ProductMessage from "../models/productSchema.js";
import mongoose from "mongoose";

export const getProduct = async (req, res) => {
  try {
    const product = await ProductMessage.find();
    //console.log(product);
    res.status(200).json(product);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const displaySingleProduct = async (req, res) => {
  const { id } = req.params;

  console.log('id received in backend', id)
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No Code Snippet with that Id");
  try {
    const singleProduct = await ProductMessage.findById(id);
    console.log(singleProduct);
    res.status(200).json(singleProduct);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const addProduct = async (req, res) => {
  const body = req.body;
  //console.log('data got in backend',body)
  const newProduct = new ProductMessage(body);
  try {
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const updatePost = async (req, res) => {
  const { id: _id } = req.params;
  const post = req.body;
  console.log("data received", post);
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("No Code Snippet with that Id");

  const update = await ProductMessage.findByIdAndUpdate(_id, post, {
    new: true,
  });

  res.json(update);
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  console.log("id received in backend", id);
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No Code Snippet with that Id");

  await ProductMessage.findByIdAndRemove(id);

  res.json({ message: "Post Deleted Successfully" });
};
