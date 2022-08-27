const db = require('../config/db');
const { v4: uuidv4 } = require('uuid');

const readProduct = (callback) => {
  db.query('SELECT * FROM product', (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res);
    }
  });
};

const readProductById = (id, callback) => {
  db.query('SELECT * FROM product WHERE id=?', [id], (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res);
    }
  });
};

const createProduct = (data, callback) => {
  db.query(
    'INSERT INTO `product`(`id`, `name`, `shortDesc`, `longDesc`, `price`, `quantity`, `image`, `createdAt`, `updatedAt`, `productCategoryId`, `discountId`) VALUES (?,?,?,?,?,?,?,?,?,?,?)',
    [
      uuidv4(),
      data.name,
      data.shortDesc,
      data.longDesc,
      data.price,
      data.quantity,
      data.image,
      new Date(),
      data.id,
      data.productCategoryId,
      data.discountId,
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

const updateProduct = (data, callback) => {
  db.query(
    // `UPDATE product SET firstName=?, lastName=?,
    //  hash=?, image=?, updatedAt=? WHERE id=?`,
    'UPDATE `product` SET `name`=?,`shortDesc`=?,`longDesc`=?,`price`=?,`quantity`=?,`image`=?,`updatedAt`=? WHERE id=?',
    [
      data.name,
      data.shortDesc,
      data.longDesc,
      data.price,
      data.quantity,
      data.image,
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

const removeProduct = (id, callback) => {
  db.query('DELETE FROM product WHERE id = ?', [id], (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res);
    }
  });
};

module.exports = {
  readProduct,
  readProductById,
  createProduct,
  updateProduct,
  removeProduct,
};
