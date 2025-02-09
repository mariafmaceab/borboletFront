import React from 'react'
import style from './ReviewsSection.module.css'
import ReviewsComponent from '@/components/cards/ReviewsComponent'

const ReviewsSectionComponent = () => {
    return (
        <section className={style.sectionTestimonios}>
            <p className={style.tituloTestimonios}>¿Qué dicen nuestros clientes?</p>
            <article className={style.cardTestimonios}>
                <ReviewsComponent reviewData={{username:"Carolina Mena", city: "Medellín", imageLink:"https://pub-973570666b3f4d6da48e4aafb394e236.r2.dev/testimonio1.jpeg", text:"Espectacularessss, muchas gracias me encantaron demasiado"}}/>
                <ReviewsComponent reviewData={{username:"Albertana", city: "Bogotá", imageLink:"https://pub-973570666b3f4d6da48e4aafb394e236.r2.dev/testimonio2.jpg", text:"Acabo de probarme el collar y solo puedo decir, 20/10. Fue mejor de lo que me imagine!! Y los colores que yo queria...🤭 muchas gracias!!"}}/>
                <ReviewsComponent reviewData={{username:"Sofia Marín", city: "Medellín", imageLink:"./fotoPrincipal.jpg", text:"Mis aretes han sido lo más admirado de este mundo, gracias por mis Monarcas. No pasa uno desapercibido, eso si es seguro, los amé!!"}}/>
                <ReviewsComponent reviewData={{username:"Sofia Marín", city: "Medellín", imageLink:"./fotoPrincipal.jpg", text:"Mis aretes han sido lo más admirado de este mundo, gracias por mis Monarcas. No pasa uno desapercibido, eso si es seguro, los amé!!"}}/>
            </article>
         </section>
    )
}

export default ReviewsSectionComponent