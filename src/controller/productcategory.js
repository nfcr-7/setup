const {
  readProductCategory,
  readProductCategoryById,
  createProductCategory,
  updateProductCategory,
  removeProductCategory,
} = require('../models/productcategory');

const getAllProductCategory = (req, res) => {
  readProductCategory((err, result) => {
    if (err) {
      console.log(err);
    }
    res.json({ success: 1, productcategory: result });
  });
};

const getAllProductCategoryById = (req, res) => {
  const id = req.params.id;
  readProductCategoryById(id, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.json({ success: 1, productcategories: result });
  });
};

const postProductCategory = (req, res) => {
  const data = req.body;
  console.log(data);
  createProductCategory(data, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.json({ success: 1, productCategory: result });
  });
};

const patchProductCategory = (req, res) => {
  const data = req.body;
  console.log(data);
  updateProductCategory(data, (err, result) => {
    if (err) {
      console.log(err);
    }
    if (result.affectedRows) {
      res.json({ success: 1, message: 'productcategory updated !' });
    }
  });
};

const deleteProductCategory = (req, res) => {
  const id = req.params.id;
  removeProductCategory(id, (err, result) => {
    if (err) {
      console.log(err);
    }
    if (result.affectedRows) {
      res.json({ success: 1, message: 'productcategory deleted!' });
    }
  });
};

module.exports = {
  getAllProductCategory,
  getAllProductCategoryById,
  postProductCategory,
  patchProductCategory,
  deleteProductCategory,
};
