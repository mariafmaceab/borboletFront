import React from "react"
import style from './SliderSection.module.css'

const SliderSection = () => {
    return (
        <section className={style.sectionSlider}>
            <div className={style.slideTrack}>
                <div className={style.slide}>
                    <div className={style.containerSlide}>
                    <img className={style.imgSlide} src="./VarianteLogo.svg" alt="variante de logo"/>
                    <p className={style.textoSlide}>Creados con amor</p>
                    </div>
                    <div className={style.containerSlide}>
                    <img className={style.imgSlide} src="./VarianteLogo.svg" alt="variante de logo"/>
                    <p className={style.textoSlide}>Diseños únicos</p>
                    </div>
                    <div className={style.containerSlide}>
                    <img className={style.imgSlide} src="./VarianteLogo.svg" alt="variante de logo"/>
                    <p className={style.textoSlide}>Materiales de calidad</p>
                    </div>
                    <div className={style.containerSlide}>
                    <img className={style.imgSlide} src="./VarianteLogo.svg" alt="variante de logo"/>
                    <p className={style.textoSlide}>Hecho por artesanas</p>
                    </div>
                </div>
                <div className={style.slide}>
                    <div className={style.containerSlide}>
                    <img className={style.imgSlide} src="./VarianteLogo.svg" alt="variante de logo"/>
                    <p className={style.textoSlide}>Creados con amor</p>
                    </div>
                    <div className={style.containerSlide}>
                    <img className={style.imgSlide} src="./VarianteLogo.svg" alt="variante de logo"/>
                    <p className={style.textoSlide}>Diseños únicos</p>
                    </div>
                    <div className={style.containerSlide}>
                    <img className={style.imgSlide} src="./VarianteLogo.svg" alt="variante de logo"/>
                    <p className={style.textoSlide}>Materiales de calidad</p>
                    </div>
                    <div className={style.containerSlide}>
                    <img className={style.imgSlide} src="./VarianteLogo.svg" alt="variante de logo"/>
                    <p className={style.textoSlide}>Hecho por artesanas</p>
                    </div>
                </div>
            </div>
         </section>
    )
}

export default SliderSection