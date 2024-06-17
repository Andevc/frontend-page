import React, { useState } from "react";
import "../styles/AuthStyle.css";
import { useNavigate } from "react-router-dom";
import { useUser } from "../api/UserContext";
import api from "../api/apiConfig";
export default function LoginPage() {
    const { setUser } = useUser()
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true)
            const response = await api.post( '/auth/login/', {
                username: username,
                password: password
            });

            if (response.status === 200){
                const userId = response.data.user['user_id']

                setUser(userId)
                
                navigate('/')

            }
            console.log("Login SUccesfully")
        }
        catch (error){
            setError(error.response ? error.response.data.message : error.message)
            console.log('Error: ',error)
        }
        finally{
            setLoading(false)
        }
        
    };
    return (
        <section className="h-full w-full auth wrap">
            <h1 className="txt-title">Login</h1>
            <form id="loginForm" onSubmit={handleSubmit}>
                <input placeholder="Username"
                    id="username"
                    name="username"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)} />
                <input placeholder="Password"
                    id="password"
                    name="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />
                <button type="submit" disabled={loading} className="btn">
                    {loading ? "Cargando..." : "Login"}
                </button>
            </form>

            {error && <p>{error}</p>}
        </section>

        
    );
}
