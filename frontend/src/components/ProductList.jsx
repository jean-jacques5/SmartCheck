import React, { useEffect, useState } from 'react';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/products')
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error('Erreur:', error));
    }, []);

    return (
        <div>
            <h1>Liste des produits</h1>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        {product.name} - {product.price}€
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;