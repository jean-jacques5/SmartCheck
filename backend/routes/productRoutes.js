const express = require('express');
const { getAllProducts, getProductById } = require('../controllers/productController');

const router = express.Router();

// Route pour récupérer tous les produits
router.get('/', getAllProducts);

// Route pour récupérer un produit par son ID
router.get('/:id', getProductById);

module.exports = router;