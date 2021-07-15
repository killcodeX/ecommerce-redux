import React from "react";
import { Form, Button } from "react-bootstrap";
import { useFormik } from "formik";

const SendData = () => {
  const validate = (values) => {
    const errors = {};

    if (!values.title) {
      errors.title = "Required";
    }

    if (!values.price) {
        errors.price = "Required";
      }

    if (!values.description) {
      errors.description = "Required";
    }

    if (!values.category) {
      errors.category = "Required";
    }

    if (!values.image) {
      errors.image = "Required";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      title: "",
      price: "",
      description: "",
      category: "",
      image: "",
    },
    validate: validate,
    onSubmit: (values, { resetForm }) => {
      console.log("values -->", values);
      resetForm({ values: "" });
    },
  });
  return (
    <div className="container">
      <Form onSubmit={formik.handleSubmit}>
        <Form.Group controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter title"
            value={formik.values.title}
            onChange={formik.handleChange}
            isInvalid={formik.errors.title}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.title}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="price">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter price"
            value={formik.values.price}
            onChange={formik.handleChange}
            isInvalid={formik.errors.price}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.price}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="pt-3" controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Enter Code description"
            value={formik.values.description}
            onChange={formik.handleChange}
            isInvalid={formik.errors.description}
          />
        </Form.Group>
        <Form.Control.Feedback type="invalid">
          {formik.errors.description}
        </Form.Control.Feedback>
        <Form.Group className="pt-3" controlId="category">
          <Form.Label>Select Categories</Form.Label>
          <Form.Control
            as="select"
            onChange={formik.handleChange}
            isInvalid={formik.errors.category}
          >
            <option value="" disabled>
              Select Any Categories
            </option>
            <option value="electronics">Electronics</option>
            <option value="jewelery">Jewelery</option>
            <option value="men's clothing">Men's clothing</option>
            <option value="women's clothing">Women's clothing</option>
          </Form.Control>
          <Form.Control.Feedback type="invalid">
            {formik.errors.category}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="pt-3" controlId="image">
          <Form.Label>Image link</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Enter image link"
            value={formik.values.image}
            onChange={formik.handleChange}
            isInvalid={formik.errors.image}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.image}
          </Form.Control.Feedback>
        </Form.Group>
        <Button variant="primary" type="submit">
          Save Snippet
        </Button>
      </Form>
    </div>
  );
};

export default SendData;
