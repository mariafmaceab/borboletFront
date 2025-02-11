import React from 'react'
import style from './Reviews.module.css'

const ReviewsComponent = ({reviewData}) => {
    return (
        <div className={`${style.cardCompleta} ${style.ultima}`}>
            <img className={style.estrellas} src="./stars.svg" alt="estrellas"/>
            <div className={style.divTestimonios}>
                <p className={style.textoCardTestimonios}>{reviewData.text}</p>
                <div className={style.piedeTestimonios}>
                    <div className={style.divImg}>
                        <img className={style.fotoCliente} src={reviewData.imageLink} alt="foto de un cliente"/>
                    </div>
                        <p className={style.nombre}>{reviewData.username}</p>
                        <p className={style.textoCardTestimonios}>{reviewData.city}</p>
                </div>
            </div>
        </div>
    )
}

export default ReviewsComponent