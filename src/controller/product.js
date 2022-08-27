const {
  readProduct,
  readProductById,
  createProduct,
  updateProduct,
  removeProduct,
} = require('../models/product');

const getAllProduct = (req, res) => {
  readProduct((err, result) => {
    if (err) {
      console.log(err);
    }
    res.json({ success: 1, product: result });
  });
};

const getAllProductById = (req, res) => {
  const id = req.params.id;
  readProductById(id, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.json({ success: 1, products: result });
  });
};

const postProduct = (req, res) => {
  const data = req.body;
  console.log(data);
  createProduct(data, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.json({ success: 1, product: result });
  });
};

const patchProduct = (req, res) => {
  const data = req.body;
  updateProduct(data, (err, result) => {
    if (err) {
      console.log(err);
    }
    if (result.affectedRows) {
      res.json({ success: 1, message: 'Product updated !' });
    }
  });
};

const deleteProduct = (req, res) => {
  const id = req.params.id;
  removeProduct(id, (err, result) => {
    if (err) {
      console.log(err);
    }
    if (result.affectedRows) {
      res.json({ success: 1, message: 'Product deleted!' });
    }
  });
};

module.exports = {
  getAllProduct,
  getAllProductById,
  postProduct,
  patchProduct,
  deleteProduct,
};
