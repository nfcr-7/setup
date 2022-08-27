const db = require('../config/db');
const { v4: uuidv4 } = require('uuid');

const readOrder = (callback) => {
  db.query('SELECT * FROM `order`', (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res);
    }
  });
};

const readOrderById = (id, callback) => {
  db.query('SELECT * FROM `order` WHERE id=?', [id], (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res);
    }
  });
};

const createOrder = (data, callback) => {
  db.query(
    'INSERT INTO `order`(`id`, `amount`, `address`, `tax`, `email`, `status`, `createdAt`, `updatedAt`, `customerId`) VALUES (?,?,?,?,?,?,?,?,?)',
    [
      uuidv4(),
      data.amount,
      data.address,
      data.tax,
      data.email,
      data.status || 'ACTIVE',
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

const updateOrder = (data, callback) => {
  db.query(
    'UPDATE `order` SET `amount`=?,`address`=?,`tax`=?,`email`=?,`updatedAt`=? WHERE id=?',
    [data.amount, data.address, data.tax, data.email, new Date(), data.id],
    (err, res) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, res);
      }
    }
  );
};

const removeOrder = (id, callback) => {
  db.query('DELETE FROM `order` WHERE id = ?', [id], (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res);
    }
  });
};

module.exports = {
  readOrder,
  readOrderById,
  createOrder,
  updateOrder,
  removeOrder,
};
