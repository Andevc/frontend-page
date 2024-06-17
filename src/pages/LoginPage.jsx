import React, { useState } from "react";
import LoginForm from "../components/LoginForm";
import { Link } from "react-router-dom";
import "../styles/auth.css";

export default function Authentication() {


    return (
        <section className="flex flex-row-reverse bg-gray-100 min-h-screen">

            <section class="login-text w-1/2 text-white p-20 flex flex-col justify-center items-center">
                    <h1 class="text-5xl font-bold">Bienvenido de nuevo</h1>
                    <p class="txt-paragraph">
                        Para mantenerse conectado con nosotros, inicie sesión con su
                        información personal
                    </p>

                    <Link to="/register" className="mt-8 border border-gray-500 py-5 px-12 text-xl font-bold rounded-full bg-[#00000099] hover:bg-zinc-950">Iniciar Sesion</Link>
             
            </section>
            <section className="w-1/2">
                <LoginForm />
            </section>
        </section>
    );
}
