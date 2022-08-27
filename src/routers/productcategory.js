const { Router } = require('express');
const {
  getAllProductCategory,
  getAllProductCategoryById,
  postProductCategory,
  patchProductCategory,
  deleteProductCategory,
} = require('../controller/productcategory');

const router = Router();

router.get('/', getAllProductCategory);
router.get('/:id', getAllProductCategoryById);
router.post('/', postProductCategory); //post est utilise pour ajouter les donnees dans la base de donnee
router.patch('/', patchProductCategory); //patch pour modifier la donnee dans la base de donnee
router.delete('/:id', deleteProductCategory);

module.exports = router;
