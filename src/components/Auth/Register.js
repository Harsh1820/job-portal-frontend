import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');

    const handleRegister = async () => {
        try {
            const response = await axios.post('/api/auth/register', { email, password, role });
            console.log(response.data); // Handle success
        } catch (error) {
            console.error(error.response.data); // Handle error
        }
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.heading}>Register</h2>
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
            <select value={role} onChange={e => setRole(e.target.value)} style={styles.select}>
                <option value="student">Student</option>
                <option value="company">Company</option>
            </select>
            <button onClick={handleRegister} style={styles.button}>Register</button>
        </div>
    );
};

export default Register;

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
    select: {
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
