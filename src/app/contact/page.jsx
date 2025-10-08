"use client"
import React from 'react'
import style from './style.module.css'
import { useState } from 'react';

const ContactPage = () => {
    const [formData, setFormData] = useState({ name: "", email: "", comment: ""});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const message = `Hola, vi la web. Este es mi correo electrónico: ${formData.email}. Quisiera recibir más información sobre...`
        const encodedMessage = encodeURIComponent(
            message + formData.comment
        );

        const whatsappUrl = `https://api.whatsapp.com/send/?phone=573245167082&text=${encodedMessage}&type=phone_number&app_absent=0`;

        window.open(whatsappUrl, "_blank");
    };


    return (
        <main>
            <section className={style.sectionContacto}>
                <article className={style.articleContacto}>
                    <p className={style.tituloContacto}>Contáctanos</p>
                    <p className={style.parrafoContacto}>Dejanos tu mensaje y nos comunicaremos lo más pronto</p>
                </article>
                <form className={style.datos} onSubmit={handleSubmit}>
                    <div className={style.primerosDatos}>
                        <input type='text' name='name' id='name' className={`${style.datoContacto} ${style.dato1}`} placeholder='Nombre' required onChange={handleChange} />
                        <input type='email' name='email' id='email' className={`${style.datoContacto} ${style.dato2}`} placeholder='Correo' required onChange={handleChange} />
                    </div>
                    <div className={style.segundosDatos}>
                        <input type='text' name='comment' id='comment' className={`${style.datoContacto} ${style.dato4}`} placeholder='Comentario' required onChange={handleChange} />
                        <button type='submit' className={`${style.datoContacto} ${style.dato5}`}>Enviar</button>
                    </div>
                </form>
            </section>
        </main >
    )
}

export default ContactPage