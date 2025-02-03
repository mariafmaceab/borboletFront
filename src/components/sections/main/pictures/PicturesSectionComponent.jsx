import React from 'react'
import style from './PicturesSection.module.css'

const PicturesSection = () => {
    return(
        <section className={style.sectionFotografia}>
            <p className={style.tituloFotografia}>La naturaleza inspira, <br />Borbolet lo crea</p>
            <div className={style.fotografias}>
                <img src="fotoPrincipal.jpg" className={style.fotografia} alt="Imagen aretes puestos"/>
                <img src="fotoPrincipal.jpg" className={style.fotografia} alt="Imagen aretes puestos"/>
            </div>
        </section>
    );
}

export default PicturesSection