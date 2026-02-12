import React, { useState } from 'react';
import { registerUser } from '../authentication'; 
import { useNavigate } from 'react-router-dom';

const SimpleSignUp: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSignUp = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            //sign up and send to home
            await registerUser(email, password);
            alert("Account created successfully!");
            navigate('/'); //home
        } catch (error: any) {
            alert("Sign Up Error: " + error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ padding: '20px' }}>
            <h2>Create Account</h2>
            <form onSubmit={handleSignUp}>
                <input 
                    type="email" 
                    placeholder="Email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                />
                <br /><br />
                <input 
                    type="password" 
                    placeholder="Password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} 
                    required 
                />
                <br /><br />
                <button type="submit" disabled={loading}>
                    {loading ? 'Creating...' : 'Sign Up'}
                </button>
            </form>
        </div>
    );
};

export default SimpleSignUp;