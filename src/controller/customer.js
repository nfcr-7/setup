const {
  readCustomer,
  readCustomerById,
  createCustomer,
  updateCustomer,
  removeCustomer,
} = require('../models/customer');

const getAllCustomer = (req, res) => {
  readCustomer((err, result) => {
    if (err) {
      console.log(err);
    }
    res.json({ success: 1, customer: result });
  });
};

const getAllCustomerById = (req, res) => {
  const id = req.params.id;
  readCustomerById(id, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.json({ success: 1, customers: result });
  });
};

const postCustomer = (req, res) => {
  const data = req.body;
  console.log(data);
  createCustomer(data, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.json({ success: 1, customer: result });
  });
};

const patchCustomer = (req, res) => {
  const data = req.body;
  updateCustomer(data, (err, result) => {
    if (err) {
      console.log(err);
    }
    if (result.affectedRows) {
      res.json({ success: 1, message: 'Customer updated !' });
    }
  });
};

const deleteCustomer = (req, res) => {
  const id = req.params.id;
  removeCustomer(id, (err, result) => {
    if (err) {
      console.log(err);
    }
    if (result.affectedRows) {
      res.json({ success: 1, message: 'Customer deleted!' });
    }
  });
};

module.exports = {
  getAllCustomer,
  getAllCustomerById,
  postCustomer,
  patchCustomer,
  deleteCustomer,
};
