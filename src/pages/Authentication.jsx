import React, { useState } from "react";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";
import "../styles/auth.css";

export default function Authentication() {
    const [isRegisterActive, setIsRegisterActive] = useState(false);

    const handleRegisterClick = () => {
        setIsRegisterActive(true);
    };
    
    const handleLoginClick = () => {
        setIsRegisterActive(false);
    };

    return (
        <section className={`auth-container ${isRegisterActive ? 'right-panel-active' : ''}`} id="main">
            <section className="register">
                <RegisterForm />
            </section>
            <section className="login">
                <LoginForm />
            </section>
            <section className="overlay-container">
                <section className="overlay">
                    <section className="overlay-left">
                        <h1 className="txt-title">Bienvenido de nuevo</h1>
                        <p className="txt-paragraph">
                            Para mantenerse conectado con nosotros, inicie sesión con su
                            información personal
                        </p>
                        <button id="login" onClick={handleLoginClick}>Iniciar Sesión</button>
                    </section>
                    <section className="overlay-right">
                        <h1 className="txt-title">Hola!</h1>
                        <p className="txt-paragraph">
                            <i className="fa-solid fa-circle-info"></i>
                            Para ingresar use <strong>alpha21</strong> y <strong>1234</strong>
                        </p>

                        <button id="register" onClick={handleRegisterClick}>Registrarse</button>
                    </section>
                </section>
            </section>
        </section>
    );
}
