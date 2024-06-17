import React from "react";
import AuthLayout from "../layouts/AuthLayout";
import RegsterForm from "../components/RegisterForm"


export default function RegisterPage(){
    return (
        <AuthLayout title="Register">
            <section className="flex ">
                <section>
                <section class="overlay-left">
                        <h1 class="txt-title">Bienvenido de nuevo</h1>
                        <p class="txt-paragraph">
                            Para mantenerse conectado con nosotros, inicie sesión con su
                            información personal
                        </p>

                        <button id="signIn">Iniciar Sesion</button>
                    </section>
                </section>
                <section>
                    <RegsterForm />
                </section>
            </section>
        </AuthLayout>
    )
}

