const {
  readOrderDetail,
  readOrderDetailById,
  createOrderDetail,
  updateOrderDetail,
  removeOrderDetail,
} = require('../models/orderdetail');

const getAllOrderDetail = (req, res) => {
  readOrderDetail((err, result) => {
    if (err) {
      console.log(err);
    }
    res.json({ success: 1, orderdetail: result });
  });
};

const getAllOrderDetailById = (req, res) => {
  const id = req.params.id;
  readOrderDetailById(id, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.json({ success: 1, orderdetail: result });
  });
};

const postOrderDetail = (req, res) => {
  const data = req.body;
  console.log(data);
  createOrderDetail(data, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.json({ success: 1, orderdetail: result });
  });
};

const patchOrderDetail = (req, res) => {
  const data = req.body;
  updateOrderDetail(data, (err, result) => {
    if (err) {
      console.log(err);
    }
    if (result.affectedRows) {
      res.json({ success: 1, message: 'OrderDetail updated !' });
    }
  });
};

const deleteOrderDetail = (req, res) => {
  const id = req.params.id;
  removeOrderDetail(id, (err, result) => {
    if (err) {
      console.log(err);
    }
    if (result.affectedRows) {
      res.json({ success: 1, message: 'OrderDetail deleted!' });
    }
  });
};

module.exports = {
  getAllOrderDetail,
  getAllOrderDetailById,
  postOrderDetail,
  patchOrderDetail,
  deleteOrderDetail,
};
