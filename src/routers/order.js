const { Router } = require('express');
const {
  getAllOrder,
  getAllOrderById,
  postOrder,
  patchOrder,
  deleteOrder,
} = require('../controller/order');

const router = Router();

router.get('/', getAllOrder);
router.get('/:id', getAllOrderById);
router.post('/', postOrder);
router.patch('/', patchOrder);
router.delete('/:id', deleteOrder);

module.exports = router;
