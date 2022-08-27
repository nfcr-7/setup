const { Router } = require('express');
const {
  getAllProductImage,
  getAllProductImageById,
  postProductImage,
  patchProductImage,
  deleteProductImage,
} = require('../controller/productimage');

const router = Router();

router.get('/', getAllProductImage);
router.get('/:id', getAllProductImageById);
router.post('/', postProductImage); //post est utilise pour ajouter les donnees dans la base de donnee
router.patch('/', patchProductImage); //patch pour modifier la donnee dans la base de donnee
router.delete('/:id', deleteProductImage);

module.exports = router;
