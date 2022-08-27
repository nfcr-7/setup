const {
  readWishList,
  readWishListById,
  createWishList,
  updateWishList,
  removeWishList,
} = require('../models/wishlist');

const getAllWishList = (req, res) => {
  readWishList((err, result) => {
    if (err) {
      console.log(err);
    }
    res.json({ success: 1, wishlist: result });
  });
};

const getAllWishListById = (req, res) => {
  const id = req.params.id;
  readWishListById(id, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.json({ success: 1, wishlist: result });
  });
};

const postWishList = (req, res) => {
  const data = req.body;
  console.log(data);
  createWishList(data, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.json({ success: 1, wishlist: result });
  });
};

const patchWishList = (req, res) => {
  const data = req.body;
  updateWishList(data, (err, result) => {
    if (err) {
      console.log(err);
    }
    if (result.affectedRows) {
      res.json({ success: 1, message: 'wishlist updated !' });
    }
  });
};

const deleteWishList = (req, res) => {
  const id = req.params.id;
  removeWishList(id, (err, result) => {
    if (err) {
      console.log(err);
    }
    if (result.affectedRows) {
      res.json({ success: 1, message: 'wishlist deleted!' });
    }
  });
};

module.exports = {
  getAllWishList,
  getAllWishListById,
  postWishList,
  patchWishList,
  deleteWishList,
};
