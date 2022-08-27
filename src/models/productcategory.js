const db = require('../config/db');
const { v4: uuidv4 } = require('uuid');

const readProductCategory = (callback) => {
  db.query('SELECT * FROM productcategory', (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res);
    }
  });
};

const readProductCategoryById = (id, callback) => {
  db.query('SELECT * FROM productcategory WHERE id=?', [id], (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res);
    }
  });
};

const createProductCategory = (data, callback) => {
  db.query(
    //     `INSERT INTO productcategory (id, name, desc,
    //      email, hash, phone, image, status, createdAt, updatedAt)
    //   VALUES (?,?,?,?,?,?,?,?,?,?)`,
    'INSERT INTO `productcategory`(`id`, `name`, `desc`, `image`, `createdAt`, `updatedAt`) VALUES (?,?,?,?,?,?)',
    [uuidv4(), data.name, data.desc, data.image, new Date(), data.id],
    (err, res) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, res);
      }
    }
  );
};

const updateProductCategory = (data, callback) => {
  db.query(
    'UPDATE `productcategory` SET `name`=?,`desc`=?,`image`=?,`updatedAt`=? WHERE id=?',
    [data.name, data.desc, data.image, new Date(), data.id],
    (err, res) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, res);
      }
    }
  );
};

const removeProductCategory = (id, callback) => {
  db.query('DELETE FROM productcategory WHERE id = ?', [id], (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res);
    }
  });
};

module.exports = {
  readProductCategory,
  readProductCategoryById,
  createProductCategory,
  updateProductCategory,
  removeProductCategory,
};
