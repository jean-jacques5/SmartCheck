const db = require('../database/dbConfig');

// Exemple de requête pour récupérer tous les produits
exports.getAllProducts = async () => {
    const [rows] = await db.query('SELECT * FROM products');
    return rows;
};

// Exemple de requête pour récupérer un produit par ID
exports.getProductById = async (id) => {
    const [rows] = await db.query('SELECT * FROM products WHERE id = ?', [id]);
    return rows[0];
};