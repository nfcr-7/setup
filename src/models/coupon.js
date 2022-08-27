const db = require('../config/db');
const { v4: uuidv4 } = require('uuid');

const readCoupon = (callback) => {
  db.query('SELECT * FROM `coupon`', (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res);
    }
  });
};

const readCouponById = (id, callback) => {
  db.query('SELECT * FROM `coupon` WHERE id=?', [id], (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res);
    }
  });
};

const createCoupon = (data, callback) => {
  db.query(
    'INSERT INTO coupon (`id`, `code`, `count`, `amount`, `status`, `expireAt`, `createdAt`, `updatedAt`, `customerId`) VALUES (?,?,?,?,?,?,?,?,?)',
    [
      uuidv4(),
      data.code,
      data.count,
      data.amount,
      data.status || 'ACTIVE',
      new Date(),
      new Date(),
      data.id,
      data.customerId,
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

const updateCoupon = (data, callback) => {
  db.query(
    // 'UPDATE `coupon` SET `code`=?,`count`=?,`amount`=?,`updatedAt`=? WHERE id=?',
    'UPDATE `coupon` SET `code`=?,`count`=?,`amount`=?,`updatedAt`=? WHERE id=?',
    [data.code, data.count, data.amount, new Date(), data.id],
    (err, res) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, res);
      }
    }
  );
};

const removeCoupon = (id, callback) => {
  db.query('DELETE FROM `coupon` WHERE id = ?', [id], (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res);
    }
  });
};

module.exports = {
  readCoupon,
  readCouponById,
  createCoupon,
  updateCoupon,
  removeCoupon,
};
