import React from "react"
import style from "./BuySection.module.css"

const BuySection = () => {
    return (
        <section className={style.sectionCompra}>
            <p className={style.tituloCompra}>Tu compra</p>
            <hr className={style.linea}/>
            <article className={style.contenedorCompra}>
                <article className={style.cardCompra}>
                    <div className={`${style.divCompra} ${style.compra1}`}>  
                        <img className={style.imgCompra} src="./BuyLock.svg" alt="Imagen de un candado"/>
                        <p className={style.textoCompra}>De forma segura</p>
                    </div>
                    <div className={`${style.divCompra} ${style.compra2}`}>
                        <img className={style.imgCompra} src="./BuyCheck.svg" alt="Imagen de compra segura"/>
                        <p className={style.textoCompra}>Paga en línea</p>
                    </div>
                    <div className={`${style.divCompra} ${style.compra3}`}>
                        <img className={`${style.imgCompra} ${style.compra1}`} src="./BuyHome.svg" alt="Imagen de una casa"/>
                        <p className={style.textoCompra}>Recibe en casa</p>
                    </div>
                </article>
            </article>
         </section>
    )
}

export default BuySection