import React from 'react'
import style from './ReviewsSection.module.css'

const ReviewsSectionComponent = () => {
    return (
        <section className={style.sectionTestimonios}>
            <p className={style.tituloTestimonios}>¿Qué dicen nuestros clientes?</p>
            <article className={style.cardTestimonios}>
                <div className={style.cardCompleta}>
                    <img className={style.estrellas} src="./stars.svg" alt="estrellas"/>
                    <div className={style.divTestimonios}>
                        <p className={style.textoCardTestimonios}>Mis aretes han sido lo más admirado de este mundo, gracias por mis Monarcas.
                        <br />No pasa uno desapercibido, eso si es seguro, los amé!!</p>
                        <div className={style.piedeTestimonios}>
                            <div className={style.divImg}>
                                <img className={style.fotoCliente} src="./fotoPrincipal.jpg" alt="foto de un cliente"/>
                            </div>
                            <div className={style.piedeTestimonios2}>
                                <p className={style.nombre}>Sofia Marín</p>
                                <p className={style.textoCardTestimonios}>Medellín</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className={`${style.cardCompleta} ${style.antepenultima}`}>
                    <img className={style.estrellas} src="./stars.svg" alt="estrellas"/>
                    <div className={style.divTestimonios}>
                        <p className={style.textoCardTestimonios}>Mis aretes han sido lo más admirado de este mundo, gracias por mis Monarcas.
                        <br />No pasa uno desapercibido, eso si es seguro, los amé!!</p>
                        <div className={style.piedeTestimonios}>
                            <div className={style.divImg}>
                                <img className={style.fotoCliente} src="./fotoPrincipal.jpg" alt="foto de un cliente"/>
                            </div>
                            <div className={style.piedeTestimonios2}>
                                <p className={style.nombre}>Sofia Marín</p>
                                <p className={style.textoCardTestimonios}>Medellín</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${style.cardCompleta} ${style.penultima}`}>
                    <img className={style.estrellas} src="./stars.svg" alt="estrellas"/>
                    <div className={style.divTestimonios}>
                        <p className={style.textoCardTestimonios}>Mis aretes han sido lo más admirado de este mundo, gracias por mis Monarcas.
                        <br />No pasa uno desapercibido, eso si es seguro, los amé!!</p>
                        <div className={style.piedeTestimonios}>
                            <div className={style.divImg}>
                                <img className={style.fotoCliente} src="./fotoPrincipal.jpg" alt="foto de un cliente"/>
                            </div>
                            <div className={style.piedeTestimonios2}>
                                <p className={style.nombre}>Sofia Marín</p>
                                <p className={style.textoCardTestimonios}>Medellín</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${style.cardCompleta} ${style.ultima}`}>
                    <img className={style.estrellas} src="./stars.svg" alt="estrellas"/>
                    <div className={style.divTestimonios}>
                        <p className={style.textoCardTestimonios}>Mis aretes han sido lo más admirado de este mundo, gracias por mis Monarcas.
                        <br />No pasa uno desapercibido, eso si es seguro, los amé!!</p>
                        <div className={style.piedeTestimonios}>
                            <div className={style.divImg}>
                                <img className={style.fotoCliente} src="./fotoPrincipal.jpg" alt="foto de un cliente"/>
                            </div>
                            <p className={style.nombre}>Sofia Marín</p>
                            <p className={style.textoCardTestimonios}>Medellín</p>
                        </div>
                    </div>
                </div>
            </article>
         </section>
    )
}

export default ReviewsSectionComponent