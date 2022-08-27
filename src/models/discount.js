const db = require('../config/db');
const { v4: uuidv4 } = require('uuid');

const readDiscount = (callback) => {
  db.query('SELECT * FROM discount', (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res);
    }
  });
};

const readDiscountById = (id, callback) => {
  db.query('SELECT * FROM discount WHERE id=?', [id], (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res);
    }
  });
};

const createDiscount = (data, callback) => {
  db.query(
    //   `INSERT INTO discount (id, name, desc, image, amount, createdAt, updatedAt)
    // VALUES (?,?,?,?,?,?,?)`,
    'INSERT INTO `discount` (`id`, `name`, `desc`, `image`, `amount`, `createdAt`, `updatedAt`) VALUES (?, ?, ?, ?, ?, ?, ?)',

    [
      uuidv4(),
      data.name,
      data.desc,
      data.image,
      data.amount,
      new Date(),
      data.id,
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

const updateDiscount = (data, callback) => {
  db.query(
    'UPDATE `discount` SET `name`=?,`desc`=?,`image`=?,`amount`=?,`updatedAt`=? WHERE id=?',
    [data.name, data.desc, data.image, data.amount, new Date(), data.id],
    (err, res) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, res);
      }
    }
  );
};

const removeDiscount = (id, callback) => {
  db.query('DELETE FROM discount WHERE id = ?', [id], (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res);
    }
  });
};

module.exports = {
  readDiscount,
  readDiscountById,
  createDiscount,
  updateDiscount,
  removeDiscount,
};
