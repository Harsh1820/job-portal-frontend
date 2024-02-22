import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link component
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const response = await axios.post('/api/auth/login', { email, password });
            console.log(response.data); // Handle success
        } catch (error) {
            console.error(error.response.data); // Handle error
        }
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.heading}>Login</h2>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                style={styles.input}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                style={styles.input}
            />
            <button onClick={handleLogin} style={styles.button}>Login</button>
            <Link to="/register" style={styles.link}>Register</Link>

        </div>
    );
};

export default Login;

// Define inline styles
const styles = {
    container: {
        maxWidth: '400px',
        margin: '0 auto',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '5px',
    },
    heading: {
        fontSize: '24px',
        marginBottom: '20px',
    },
    input: {
        display: 'block',
        width: '100%',
        marginBottom: '15px',
        padding: '10px',
        fontSize: '16px',
        border: '1px solid #ccc',
        borderRadius: '5px',
    },
    button: {
        display: 'block',
        width: '100%',
        padding: '10px',
        fontSize: '16px',
        backgroundColor: '#007bff',
        color: '#fff',
        borderRadius: '5px',
        cursor: 'pointer',
    },
};
