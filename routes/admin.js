const express = require("express");
const { body } = require("express-validator");

const adminController = require("../controllers/admin");
const isAuthMiddleware = require("../middlewares/is-auth");

const router = express.Router();

// /admin/add-product => GET
router.get("/add-product", isAuthMiddleware, adminController.getAddProduct);

// /admin/products => GET
router.get("/products", isAuthMiddleware, adminController.getProducts);

// // /admin/add-product => POST
router.post(
  "/add-product",
  [
    body("title")
      .isString()
      .trim()
      .notEmpty()
      .withMessage("Please enter a title."),
    body("price").isFloat().withMessage("Please enter a price."),
    body("description")
      .isString()
      .trim()
      .isLength({ min: 5, max: 1000 })
      .withMessage("The description should contain from 5 to 500 characters."),
  ],
  isAuthMiddleware,
  adminController.postAddProduct
);

router.get(
  "/edit-product/:productId",
  isAuthMiddleware,
  adminController.getEditProduct
);

router.post(
  "/edit-product",
  [
    body("title")
      .isString()
      .trim()
      .notEmpty()
      .withMessage("Please enter a title."),
    body("price").isFloat().withMessage("Please enter a price."),
    body("description")
      .isString()
      .trim()
      .isLength({ min: 5, max: 1000 })
      .withMessage("The description should contain from 5 to 500 characters."),
  ],
  isAuthMiddleware,
  adminController.postEditProduct
);

router.post(
  "/delete-product",
  isAuthMiddleware,
  adminController.postDeleteProduct
);

module.exports = router;
