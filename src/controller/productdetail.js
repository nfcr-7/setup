const {
  readProductDetail,
  readProductDetailById,
  createProductDetail,
  updateProductDetail,
  removeProductDetail,
} = require('../models/productdetail');

const getAllProductDetail = (req, res) => {
  readProductDetail((err, result) => {
    if (err) {
      console.log(err);
    }
    res.json({ success: 1, productdetail: result });
  });
};

const getAllProductDetailById = (req, res) => {
  const id = req.params.id;
  readProductDetailById(id, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.json({ success: 1, productdetails: result });
  });
};

const postProductDetail = (req, res) => {
  const data = req.body;
  console.log(data);
  createProductDetail(data, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.json({ success: 1, productdetail: result });
  });
};

const patchProductDetail = (req, res) => {
  const data = req.body;
  console.log(data);
  updateProductDetail(data, (err, result) => {
    if (err) {
      console.log(err);
    }
    if (result.affectedRows) {
      res.json({ success: 1, message: 'productdetail updated !' });
    }
  });
};

const deleteProductDetail = (req, res) => {
  const id = req.params.id;
  removeProductDetail(id, (err, result) => {
    if (err) {
      console.log(err);
    }
    if (result.affectedRows) {
      res.json({ success: 1, message: 'productdetail deleted!' });
    }
  });
};

module.exports = {
  getAllProductDetail,
  getAllProductDetailById,
  postProductDetail,
  patchProductDetail,
  deleteProductDetail,
};
