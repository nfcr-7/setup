const {
  readProductImage,
  readProductImageById,
  createProductImage,
  updateProductImage,
  removeProductImage,
} = require('../models/productimage');

const getAllProductImage = (req, res) => {
  readProductImage((err, result) => {
    if (err) {
      console.log(err);
    }
    res.json({ success: 1, productimage: result });
  });
};

const getAllProductImageById = (req, res) => {
  const id = req.params.id;
  readProductImageById(id, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.json({ success: 1, productimages: result });
  });
};

const postProductImage = (req, res) => {
  const data = req.body;
  console.log(data);
  createProductImage(data, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.json({ success: 1, productimage: result });
  });
};

const patchProductImage = (req, res) => {
  const data = req.body;
  console.log(data);
  updateProductImage(data, (err, result) => {
    if (err) {
      console.log(err);
    }
    if (result.affectedRows) {
      res.json({ success: 1, message: 'productimage updated !' });
    }
  });
};

const deleteProductImage = (req, res) => {
  const id = req.params.id;
  removeProductImage(id, (err, result) => {
    if (err) {
      console.log(err);
    }
    if (result.affectedRows) {
      res.json({ success: 1, message: 'productimage deleted!' });
    }
  });
};

module.exports = {
  getAllProductImage,
  getAllProductImageById,
  postProductImage,
  patchProductImage,
  deleteProductImage,
};
