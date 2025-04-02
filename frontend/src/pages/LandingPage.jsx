import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // Si l'utilisateur est déjà invité, redirige vers la page principale
        const isGuest = localStorage.getItem('isGuest');
        if (isGuest) {
            navigate('/home');
        }
    }, [navigate]);

    const handleGuestLogin = () => {
        // Marque l'utilisateur comme invité
        localStorage.setItem('isGuest', 'true');
        navigate('/home');
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Bienvenue sur le comparateur iPhone</h1>
            <p>Choisissez une option pour continuer :</p>
            <div style={{ marginTop: '20px' }}>
                <button onClick={() => navigate('/signup')} style={buttonStyle}>
                    S'inscrire
                </button>
                <button onClick={() => navigate('/login')} style={buttonStyle}>
                    Se connecter
                </button>
                <button onClick={handleGuestLogin} style={buttonStyle}>
                    Continuer en tant qu'invité
                </button>
            </div>
        </div>
    );
};

const buttonStyle = {
    margin: '10px',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
};

export default LandingPage;