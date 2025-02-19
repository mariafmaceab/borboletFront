import React from 'react'
import style from './Reviews.module.css'
import Image from 'next/image'

const ReviewsComponent = ({reviewData}) => {
    return (
        <div className={`${style.cardCompleta} ${style.ultima}`}>
            <Image className={style.estrellas} src="/stars.svg" alt="estrellas" width={152} height={24}/>
            <div className={style.divTestimonios}>
                <p className={style.textoCardTestimonios}>{reviewData.text}</p>
                <div className={style.piedeTestimonios}>
                    <div className={style.divImg}>
                        <Image className={style.fotoCliente} src={reviewData.imageLink} alt="foto de un cliente" width={900} height={450} loading='lazy'/>
                    </div>
                        <p className={style.nombre}>{reviewData.username}</p>
                        <p className={style.textoCardTestimonios}>{reviewData.city}</p>
                </div>
            </div>
        </div>
    )
}

export default ReviewsComponent