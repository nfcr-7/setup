const {
  readDiscount,
  readDiscountById,
  createDiscount,
  updateDiscount,
  removeDiscount,
} = require('../models/discount');

const getAllDiscount = (req, res) => {
  readDiscount((err, result) => {
    if (err) {
      console.log(err);
    }
    res.json({ success: 1, discounts: result });
  });
};

const getAllDiscountById = (req, res) => {
  const id = req.params.id;
  readDiscountById(id, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.json({ success: 1, discounts: result });
  });
};

const postDiscount = (req, res) => {
  const data = req.body;
  console.log(data);
  createDiscount(data, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.json({ success: 1, discount: result });
  });
};

const patchDiscount = (req, res) => {
  const data = req.body;
  updateDiscount(data, (err, result) => {
    if (err) {
      console.log(err);
    }
    if (result.affectedRows) {
      res.json({ success: 1, message: 'Discount updated !' });
    }
  });
};

const deleteDiscount = (req, res) => {
  const id = req.params.id;
  removeDiscount(id, (err, result) => {
    if (err) {
      console.log(err);
    }
    if (result.affectedRows) {
      res.json({ success: 1, message: 'Discount deleted!' });
    }
  });
};

module.exports = {
  getAllDiscount,
  getAllDiscountById,
  postDiscount,
  patchDiscount,
  deleteDiscount,
};
