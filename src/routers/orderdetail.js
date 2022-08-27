const { Router } = require('express');
const {
  getAllOrderDetail,
  getAllOrderDetailById,
  postOrderDetail,
  patchOrderDetail,
  deleteOrderDetail,
} = require('../controller/orderdetail');

const router = Router();

router.get('/', getAllOrderDetail);
router.get('/:id', getAllOrderDetailById);
router.post('/', postOrderDetail); //post est utilise pour ajouter les donnees dans la base de donnee
router.patch('/', patchOrderDetail); //patch pour modifier la donnee dans la base de donnee
router.delete('/:id', deleteOrderDetail);

module.exports = router;
