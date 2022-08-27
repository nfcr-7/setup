const { Router } = require('express');
const {
  getAllProduct,
  getAllProductById,
  postProduct,
  patchProduct,
  deleteProduct,
} = require('../controller/product');

const router = Router();

router.get('/', getAllProduct);
router.get('/:id', getAllProductById);
router.post('/', postProduct);
router.patch('/', patchProduct);
router.delete('/:id', deleteProduct);

module.exports = router;
