const products = [
    { id: 1, name: 'iPhone 13', price: 799 },
    { id: 2, name: 'iPhone 14', price: 899 },
];

// Récupérer tous les produits
exports.getAllProducts = (req, res) => {
    res.json(products);
};

// Récupérer un produit par ID
exports.getProductById = (req, res) => {
    const product = products.find(p => p.id === parseInt(req.params.id));
    if (!product) {
        return res.status(404).json({ message: 'Produit non trouvé' });
    }
    res.json(product);
};