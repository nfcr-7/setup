const { Router } = require('express');
const {
  getAllProductDetail,
  getAllProductDetailById,
  postProductDetail,
  patchProductDetail,
  deleteProductDetail,
} = require('../controller/productdetail');

const router = Router();

router.get('/', getAllProductDetail);
router.get('/:id', getAllProductDetailById);
router.post('/', postProductDetail); //post est utilise pour ajouter les donnees dans la base de donnee
router.patch('/', patchProductDetail); //patch pour modifier la donnee dans la base de donnee
router.delete('/:id', deleteProductDetail);

module.exports = router;
