const express = require('express');
const app = express();
const db = require('./src/config/db');
const env = require('./src/config/env');
const customerRoutes = require('./src/routers/customer');
const discountRoutes = require('./src/routers/discount');
const productCategoryRoutes = require('./src/routers/productcategory');
const orderRoutes = require('./src/routers/order');
const couponRoutes = require('./src/routers/coupon');
const productRoutes = require('./src/routers/product');
const productDetailRoutes = require('./src/routers/productdetail');
const orderDetailRoutes = require('./src/routers/orderdetail');
const productImageRoutes = require('./src/routers/productimage');
const wishListRoutes = require('./src/routers/wishlist');

db.connect((err) => {
  if (err) {
    console.log('Db connection error' + err);
    return;
  }
  console.log('db connected!');
});
app.use(express.json());

app.use('/api/customer', customerRoutes);
app.use('/api/discount', discountRoutes);
app.use('/api/productcategory', productCategoryRoutes);
app.use('/api/order', orderRoutes);
app.use('/api/coupon', couponRoutes);
app.use('/api/product', productRoutes);
app.use('/api/productdetail', productDetailRoutes);
app.use('/api/orderdetail', orderDetailRoutes);
app.use('/api/productimage', productImageRoutes);
app.use('/api/wishlist', wishListRoutes);

app.listen(env.port, () => {
  console.log(`Server up and running on port ${env.port}`);
});
