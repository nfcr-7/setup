const {
  readCoupon,
  readCouponById,
  createCoupon,
  updateCoupon,
  removeCoupon,
} = require('../models/coupon');

const getAllCoupon = (req, res) => {
  readCoupon((err, result) => {
    if (err) {
      console.log(err);
    }
    res.json({ success: 1, coupon: result });
  });
};

const getAllCouponById = (req, res) => {
  const id = req.params.id;
  readCouponById(id, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.json({ success: 1, coupons: result });
  });
};

const postCoupon = (req, res) => {
  const data = req.body;
  console.log(data);
  createCoupon(data, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.json({ success: 1, coupon: result });
  });
};

const patchCoupon = (req, res) => {
  const data = req.body;
  updateCoupon(data, (err, result) => {
    if (err) {
      console.log(err);
    }
    if (result.affectedRows) {
      res.json({ success: 1, message: 'Coupon updated !' });
    }
  });
};

const deleteCoupon = (req, res) => {
  const id = req.params.id;
  removeCoupon(id, (err, result) => {
    if (err) {
      console.log(err);
    }
    if (result.affectedRows) {
      res.json({ success: 1, message: 'Coupon deleted!' });
    }
  });
};

module.exports = {
  getAllCoupon,
  getAllCouponById,
  postCoupon,
  patchCoupon,
  deleteCoupon,
};
