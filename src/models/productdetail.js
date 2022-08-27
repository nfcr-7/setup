const db = require('../config/db');
const { v4: uuidv4 } = require('uuid');

const readProductDetail = (callback) => {
  db.query('SELECT * FROM productdetail', (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res);
    }
  });
};

const readProductDetailById = (id, callback) => {
  db.query('SELECT * FROM productdetail WHERE id=?', [id], (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res);
    }
  });
};

const createProductDetail = (data, callback) => {
  db.query(
    'INSERT INTO `productdetail`(`id`, `size`, `age`, `color`, `brand`, `gender`, `productId`) VALUES (?,?,?,?,?,?,?)',
    [
      uuidv4(),
      data.size,
      data.age,
      data.color,
      data.brand,
      data.gender,
      data.id,
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

const updateProductDetail = (data, callback) => {
  db.query(
    'UPDATE `productdetail` SET `size`=?,`age`=?,`color`=?,`brand`=?,`gender`=? WHERE id=?',
    [data.size, data.age, data.color, data.brand, data.gender, data.id],
    (err, res) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, res);
      }
    }
  );
};

const removeProductDetail = (id, callback) => {
  db.query('DELETE FROM productdetail WHERE id = ?', [id], (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res);
    }
  });
};

module.exports = {
  readProductDetail,
  readProductDetailById,
  createProductDetail,
  updateProductDetail,
  removeProductDetail,
};
