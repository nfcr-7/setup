const db = require('../config/db');
const { v4: uuidv4 } = require('uuid');

const readProductImage = (callback) => {
  db.query('SELECT * FROM productimage', (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res);
    }
  });
};

const readProductImageById = (id, callback) => {
  db.query('SELECT * FROM productimage WHERE id=?', [id], (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res);
    }
  });
};

const createProductImage = (data, callback) => {
  db.query(
    'INSERT INTO `productimage` (`id`, `url`, `updatedAt`, `productId`) VALUES (?,?,?,?)',
    [uuidv4(), data.url, new Date(), data.productId],
    (err, res) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, res);
      }
    }
  );
};

const updateProductImage = (data, callback) => {
  db.query(
    'UPDATE `productimage` SET `url`=?,`updatedAt`=? WHERE id=?',
    [data.url, new Date(), data.id],
    (err, res) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, res);
      }
    }
  );
};

const removeProductImage = (id, callback) => {
  db.query('DELETE FROM productimage WHERE id = ?', [id], (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res);
    }
  });
};

module.exports = {
  readProductImage,
  readProductImageById,
  createProductImage,
  updateProductImage,
  removeProductImage,
};
