"use client"
import { IoBagCheckOutline } from "react-icons/io5";
import React, { useEffect } from 'react'
import style from './style.module.css'
import { useState, use } from 'react';
import { Spinner } from "@chakra-ui/react"

const ShipmentPage = (props) => {
    const [formData, setFormData] = useState({ name: "", email: "", address: "", city: "", phone: "", comment: "" });
    const [preferenceId, setPreferenceId] = useState(null)
    const [showShipment, setShowShipment] = useState(false)
    const [loading, setLoading] = useState(true)
    const searchParams = use(props.searchParams)

    useEffect(() => {
        if (searchParams.preference_id) {
            setPreferenceId(searchParams.preference_id)
        }
        setLoading(false)
    }, [searchParams])

    useEffect(() => {
        function searchPreferenceId() {
            fetch(`/api/payment/preference/${preferenceId}?preference_id=${searchParams.preference_id}&status=${searchParams.status}&payment_id=${searchParams.payment_id}`)
                .then(async (response) => {
                    const data = await response.json()
                    if (data) {
                        if (data.ok) {
                            setShowShipment(true)
                            setLoading(false)
                        }
                    }
                })
                .catch((error) => { console.log(error) })
        }
        searchPreferenceId()
    }, [preferenceId])


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const message = `Hola, acabo de realiza una compra. Estos son mis datos para el envío:
        Nombre: ${formData.name}
        Correo: ${formData.email}
        Dirección: ${formData.address}
        Ciudad: ${formData.city},
        Teléfono: ${formData.phone}
        Datos adicionales: ${formData.comment}
        `
        const encodedMessage = encodeURIComponent(
            message
        );

        const whatsappUrl = `https://api.whatsapp.com/send/?phone=573245167082&text=${encodedMessage}&type=phone_number&app_absent=0`;

        window.open(whatsappUrl, "_blank");
    };

    return (
        <main>
            {
                loading ?
                    <div className={style.divspinner}>
                        <Spinner className={style.spinner}/>
                    </div> :
                    showShipment ?
                        <section className={style.sectionContacto}>
                            <article className={style.articleContacto}>
                                <p className={style.tituloContacto}>Compra realizada <IoBagCheckOutline /></p>
                                <p className={style.parrafoContacto}>Déjanos tus datos de envío para hacerte llegar tu producto</p>
                            </article>
                            <form className={style.datos} onSubmit={handleSubmit} autoComplete="off" >
                                <div className={style.primerosDatos}>
                                    <input type='text' name='name' id='name' className={`${style.datoContacto} ${style.dato1}`} placeholder='Nombre' required onChange={handleChange} onBlur={handleChange} />
                                    <input type='email' name='email' id='email' className={`${style.datoContacto} ${style.dato2}`} placeholder='Correo' required onChange={handleChange} onBlur={handleChange} />
                                    <input type='text' name='address' id='address' className={`${style.datoContacto} ${style.dato2}`} placeholder='Dirección' required onChange={handleChange} onBlur={handleChange} />
                                    <input type='text' name='city' id='city' className={`${style.datoContacto} ${style.dato2}`} placeholder='Ciudad' required onChange={handleChange} onBlur={handleChange} />
                                    <input type='text' name='phone' id='phone' className={`${style.datoContacto} ${style.dato2}`} placeholder='Número de contacto' required onChange={handleChange} onBlur={handleChange} />
                                </div>
                                <div className={style.segundosDatos}>
                                    <input type='text' name='comment' id='comment' className={`${style.datoContacto} ${style.dato4}`} placeholder='Información adicional' required onChange={handleChange} onBlur={handleChange} />
                                    <button type='submit' className={`${style.datoContacto} ${style.dato5}`}>Enviar</button>
                                </div>
                            </form>
                        </section> :
                        <p>Checking...</p>
            }
        </main >
    )
}

export default ShipmentPage