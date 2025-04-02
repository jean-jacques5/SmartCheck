import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductList from '../components/ProductList';

const HomePage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // Vérifie si l'utilisateur est invité
        const isGuest = localStorage.getItem('isGuest');
        if (!isGuest) {
            // Si l'utilisateur n'est pas invité, redirige vers la page d'accueil
            navigate('/');
        }
    }, [navigate]);

    const handleLogout = () => {
        // Supprime l'état invité et redirige vers la page d'accueil
        localStorage.removeItem('isGuest');
        navigate('/');
    };

    return (
        <div>
            <h1>Bienvenue sur le comparateur iPhone</h1>
            <button onClick={handleLogout} style={buttonStyle}>
                Déconnexion
            </button>
            <ProductList />
        </div>
    );
};

const buttonStyle = {
    margin: '10px',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
};

export default HomePage;