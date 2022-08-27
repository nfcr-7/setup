const { Router } = require('express');
const {
  getAllWishList,
  getAllWishListById,
  postWishList,
  patchWishList,
  deleteWishList,
} = require('../controller/wishlist');

const router = Router();

router.get('/', getAllWishList);
router.get('/:id', getAllWishListById);
router.post('/', postWishList);
router.patch('/', patchWishList);
router.delete('/:id', deleteWishList);

module.exports = router;
