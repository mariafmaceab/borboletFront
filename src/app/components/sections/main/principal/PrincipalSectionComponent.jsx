import React from 'react'
import style from './PrincipalSection.module.css'

const SectionPrincipal = () => {
    return(
        <section className={style.sectionPrincipal}>
        <h1>Accesorios con mostacilla</h1>
        <p className={style.texto}>Cada pieza es una obra de arte <br />tejida exclusivamente para ti</p>
        <div className={style.buttons}>
            <button className={style.btnPrimary}>Explora nuestra colección</button>
            <button className={style.btnSecondary}>Personalizamos tu pedido</button>
            <button className={style.btnMovilPrimary}>Ver colección</button>
            <button className={style.btnMovilSecondary}>Personalizar</button>
        </div>
     </section>
    );
}

export default SectionPrincipal