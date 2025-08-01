import React from "react"
import style from "./BuySection.module.css"
import Image from "next/image"

const BuySection = () => {
    return (
        <section className={style.sectionCompra}>
            <p className={style.tituloCompra}>Tu compra</p>
            <hr className={style.linea}/>
            <article className={style.contenedorCompra}>
                <article className={style.cardCompra}>
                    <div className={`${style.divCompra} ${style.compra1}`}>  
                        <Image className={style.imgCompra} src="/BuyLock.svg" alt="Imagen de un candado" width={115} height={115}/>
                        <p className={style.textoCompra}>De forma segura</p>
                    </div>
                    <div className={`${style.divCompra} ${style.compra2}`}>
                        <Image className={style.imgCompra} src="/BuyCheck.svg" alt="Imagen de compra segura" width={115} height={115}/>
                        <p className={style.textoCompra}>Paga en línea</p>
                    </div>
                    <div className={`${style.divCompra} ${style.compra3}`}>
                        <Image className={`${style.imgCompra} ${style.compra1}`} src="/BuyHome.svg" alt="Imagen de una casa" width={115} height={115}/>
                        <p className={style.textoCompra}>Recibe en casa</p>
                    </div>
                </article>
            </article>

                <article className={style.articleEnvio}>
                    <div className={style.divEnvio}>
                        <h2>Accesorios para mujer en Colombia</h2>
                        <p> - Envios GRATIS en TODA Colombia:</p>
                    </div>
                    <div className={style.divEnvio2}>
                        <h3 className={`${style.h3envio} ${style.h3envio1}`}><a href={"/products/earrings"}>Aretes en Bogota</a></h3>
                        <p>Envío rápido de aretes con mostacilla a Bogotá. Compra online y recíbelos en tu casa sin costo adicional.</p>

                        <h3 className={`${style.h3envio} ${style.h3envio2}`}><a href={"/products/earrings"}>Aretes en Medellin</a></h3>
                        <p>Somos una tienda de accesorios ubicada en Medellín. Diseños artesanales y modernos, perfectos para ti.</p>

                        <h3 className={`${style.h3envio} ${style.h3envio3}`}><a href={"/products/earrings"}>Aretes en Colombia</a></h3>
                        <p>Enviamos aretes artesanales a todo el país. Compra segura, envío gratis y atención personalizada.</p>
                    </div>                  
                </article>
         </section>
    )
}

export default BuySection