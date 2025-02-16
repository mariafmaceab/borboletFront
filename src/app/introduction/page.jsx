import React from 'react'
import style from './style.module.css'

const IntroductionPage = () => {
  return (
    <section className={style.presentacionBorbolet}>
            <img className={style.frase} src="https://pub-973570666b3f4d6da48e4aafb394e236.r2.dev/eslogan.png"/>
            <article className={style.articlePresentacion}>
                <div className={style.divImg}>
                    <img className={style.imgCreadora} src="https://pub-973570666b3f4d6da48e4aafb394e236.r2.dev/fotoYolima0.jpg"/>
                </div>
                <div className={style.divCreadora}>
                    <p className={style.txtCreadora}>Soy Yolima, creadora de Borbolet.<br />
                        Hoy, ver mis diseños llegar a tantas mujeres<br />
                        auténticas es un sueño hecho realidad.<br /> Cada accesorio que creo,
                        no solo lleva un toque de<br />mi corazón sino también
                        un homenaje a la cultura</p>
                        <div className={style.flechas}>
                            <img className={style.imgFlecha} src="./FlechaAbajo.webp"/>
                        </div>
                </div>
            </article>

            <article className={style.articleHistoria}>
                <div>
                    <p className={style.txtCreadora}>Desde niña tuve un encuentro que marcó mi vida:<br />
                        conocí una comunidad indígena y quedé fascinada<br />
                        al ver como elaboraban accesorios con tanta destreza.<br /> Desde ahí, se despertó
                        en mi una admiración<br />por el trabajo artesanal y la riqueza cultural</p>
                        <div className={style.flechas}>
                            <img className={style.imgFlecha} src="./FlechaAbajo.webp"/>
                        </div>
                </div>
                <div className={style.divImg}>
                    <img className={style.imgIndigenas} src="https://pub-973570666b3f4d6da48e4aafb394e236.r2.dev/retratoIndigena.png"/>
                </div>
            </article>

            <article className={style.articleResultado}>
                <div className={style.divImg}>
                    <img className={style.imgModelos} src="https://pub-973570666b3f4d6da48e4aafb394e236.r2.dev/fotoModelos0.jpg"/>
                </div>
                <div className={style.divCreadora}>
                    <p className={style.txtCreadora}>Crear este tipo de accesorios me permite<br />
                        satisfacer la necesidad de muchas mujeres a las<br />
                        que les gusta resaltar, verse elegantes y originales</p>
                </div>
            </article>
            <article className={style.presentacionMensaje}>
                <article className={style.imgpresentacionMensaje}>

                    <div className={style.divPresentacionArete}>
                        <img className={style.aretePresentacion} src="https://pub-973570666b3f4d6da48e4aafb394e236.r2.dev/earrings%20(1).png"/>
                    </div>
                    <div className={style.divPresentacionArete}>
                        <img className={style.aretePresentacion} src="https://pub-973570666b3f4d6da48e4aafb394e236.r2.dev/necklace.png"/>
                    </div>
                    <div className={style.divPresentacionArete}>
                        <img className={style.aretePresentacion} src="https://pub-973570666b3f4d6da48e4aafb394e236.r2.dev/gemstone.png"/>
                    </div>

                </article>
                    <p className={style.pMensaje}>Estas piezas ofrecen más que belleza:<br />
                    cuentan historias y transmiten emociones
                    </p>
                    <div className={style.divbtnComprar}>
                        <button className={style.btnComprar}>¡Quiero las mías!</button>
                    </div>
            </article>

        </section>
  )
}

export default IntroductionPage