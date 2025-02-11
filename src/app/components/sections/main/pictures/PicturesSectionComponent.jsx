import React from 'react'
import style from './PicturesSection.module.css'

const PicturesSection = () => {
    return(
        <section className={style.sectionFotografia}>
            <p className={style.tituloFotografia}>La naturaleza inspira, <br />Borbolet lo crea</p>
            <article className={style.fotografias}>
                <div className={style.divFotografia}>
                    <img src="fotoPrincipal.jpg" className={style.fotografia} alt="Imagen aretes puestos"/>
                </div>
                <div className={style.divFotografia}>
                    <img src="fotoPrincipal.jpg" className={style.fotografia} alt="Imagen aretes puestos"/>
                </div>
            </article>
        </section>
    );
}

export default PicturesSection