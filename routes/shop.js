const express = require("express");

const shopCtrl = require("../controllers/shopCtrl");

const router = express.Router();

router.get("/", shopCtrl.getIndex);
router.get("/products", shopCtrl.getProducts);
router.get("/cart", shopCtrl.getCart);
router.get("/checkout", shopCtrl.getCheckout);

module.exports = router;
