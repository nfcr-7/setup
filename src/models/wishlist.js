const db = require('../config/db');
const { v4: uuidv4 } = require('uuid');

const readWishList = (callback) => {
  db.query('SELECT * FROM `wishlist`', (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res);
    }
  });
};

const readWishListById = (id, callback) => {
  db.query('SELECT * FROM `wishlist` WHERE id=?', [id], (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res);
    }
  });
};

const createWishList = (data, callback) => {
  db.query(
    // 'INSERT INTO `wishlist`(`id`, `amount`, `address`, `tax`, `email`, `status`, `createdAt`, `updatedAt`, `customerId`) VALUES (?,?,?,?,?,?,?,?,?)',
    'INSERT INTO `wishlist`(`id`, `customerId`, `productId`) VALUES (?,?,?)',
    [
      uuidv4(),
      data.customerId,
      data.productId,
    ],
    (err, res) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, res);
      }
    }
  );
};

const updateWishList = (data, callback) => {
  db.query(
    // 'UPDATE `wishlist` SET `amount`=?,`address`=?,`tax`=?,`email`=?,`updatedAt`=? WHERE id=?',
    'UPDATE `wishlist` SET `customerId`=?, `productId`=? WHERE id=?',
    [data.customerId, data.productId, data.id],
    (err, res) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, res);
      }
    }
  );
};

const removeWishList = (id, callback) => {
  db.query('DELETE FROM `WishList` WHERE id = ?', [id], (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res);
    }
  });
};

module.exports = {
  readWishList,
  readWishListById,
  createWishList,
  updateWishList,
  removeWishList,
};
