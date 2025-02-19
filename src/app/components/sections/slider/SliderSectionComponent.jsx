import React from "react"
import style from './SliderSection.module.css'
import Image from "next/image"

const SliderSection = () => {

    const phrases = [
        "Creados con amor",
        "Diseños únicos",
        "Materiales de calidad",
        "Hecho por artesanas"
    ]

    return (
        <section className={style.sectionSlider}>
            <div className={style.slideTrack}>
                {Array.from({ length: 2 }).map((_, index) => (<div className={style.slide} key={index}>
                    {
                        phrases.map((phrase) => {
                            return <div className={style.containerSlide} key={phrase}>
                                <Image className={style.imgSlide} src="/VarianteLogo.svg" alt="variante de logo" width={40} height={65} />
                                <p className={style.textoSlide}>{phrase}</p>
                            </div>
                        })
                    }
                </div>))}
            </div>
        </section>
    )
}

export default SliderSection