const express = require("express");

const adminController = require("../controllers/admin");
const isAuthMiddleware = require("../middlewares/is-auth");

const router = express.Router();

// /admin/add-product => GET
router.get("/add-product", isAuthMiddleware, adminController.getAddProduct);

// /admin/products => GET
router.get("/products", isAuthMiddleware, adminController.getProducts);

// // /admin/add-product => POST
router.post("/add-product", isAuthMiddleware, adminController.postAddProduct);

router.get(
  "/edit-product/:productId",
  isAuthMiddleware,
  adminController.getEditProduct
);

router.post("/edit-product", isAuthMiddleware, adminController.postEditProduct);

router.post(
  "/delete-product",
  isAuthMiddleware,
  adminController.postDeleteProduct
);

module.exports = router;
