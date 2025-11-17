import { useNavigate } from 'react-router-dom';
import { CSSProperties } from "react";

const styles: Record<string, CSSProperties> = {
    container: {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f8f9fa',
        color: '#343a40',
        textAlign: 'center',
        padding: '0 20px',
    },
    title: {
        fontSize: '6rem',
        marginBottom: '0.5rem',
    },
    subtitle: {
        fontSize: '1.5rem',
        marginBottom: '2rem',
    },
    button: {
        padding: '10px 20px',
        fontSize: '1rem',
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    },
};

const NotFoundPage = () => {
    const navigate = useNavigate();

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>404</h1>
            <p style={styles.subtitle}>Oops! The page you're looking for doesn't exist.</p>
            <button style={styles.button} onClick={() => navigate('/')}>
                Go Home
            </button>
        </div>
    );
};

export default NotFoundPage;