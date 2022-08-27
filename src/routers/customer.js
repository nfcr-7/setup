const { Router } = require('express');
const {
  getAllCustomer,
  getAllCustomerById,
  postCustomer,
  patchCustomer,
  deleteCustomer,
} = require('../controller/customer');

const router = Router();

router.get('/', getAllCustomer);
router.get('/:id', getAllCustomerById);
router.post('/', postCustomer);
router.patch('/', patchCustomer);
router.delete('/:id', deleteCustomer);

module.exports = router;
