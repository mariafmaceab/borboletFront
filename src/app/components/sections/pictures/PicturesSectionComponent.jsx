import React from 'react'
import style from './PicturesSection.module.css'
import Image from 'next/image';

const PicturesSection = () => {
    return(
        <section className={style.sectionFotografia}>
            <p className={style.tituloFotografia}>La naturaleza inspira, <br />Borbolet lo crea</p>
            <article className={style.fotografias}>
                <div className={style.divFotografia}>
                    <Image src="https://pub-973570666b3f4d6da48e4aafb394e236.r2.dev/fotoModelos1.webp" className={style.fotografia} alt="Imagen aretes puestos" width={472} height={440}/>
                </div>
                <div className={style.divFotografia}>
                    <Image src="https://pub-973570666b3f4d6da48e4aafb394e236.r2.dev/fotoModelos2.webp" className={style.fotografia} alt="Imagen aretes puestos" width={472} height={440}/>
                </div>
            </article>
        </section>
    );
}

export default PicturesSection