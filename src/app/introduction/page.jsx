import React from 'react'
import style from './style.module.css'
import Image from 'next/image'
import Link from 'next/link'

const IntroductionPage = () => {
  return (
    <section className={style.presentacionBorbolet}>
            <Image className={style.frase} src="https://pub-973570666b3f4d6da48e4aafb394e236.r2.dev/eslogan.webp" alt='Eslogan de borbolet' title='Borbolet' width={1280} height={720}/>
            <article className={style.articlePresentacion}>
                <div className={style.divImg}>
                    <Image className={style.imgCreadora} src="https://pub-973570666b3f4d6da48e4aafb394e236.r2.dev/fotoYolima0.webp" alt='Foto de Yolima, creadora de Borbolet' title='Yolima' width={3000} height={2500}/>
                </div>
                <div className={style.divCreadora}>
                    <h1 className={style.txtCreadora}>¿Quienes somos?</h1>
                    <p className={style.txtCreadora}>Soy Yolima, creadora de Borbolet.<br />
                        Hoy, ver mis diseños llegar a tantas mujeres<br />
                        auténticas es un sueño hecho realidad.<br /> Cada accesorio que creo,
                        no solo lleva un toque de<br />mi corazón sino también
                        un homenaje a la cultura</p>
                        <div className={style.flechas}>
                            <Image className={style.imgFlecha} src="/FlechaAbajo.webp" alt='Imagen de flecha apuntando hacia abajo' title='Flecha' width={64} height={64}/>
                        </div>
                </div>
            </article>

            <article className={style.articleHistoria}>
                <div>
                    <h2 className={style.txtCreadora}>Accesorios indigenas</h2>
                    <p className={style.txtCreadora}>Desde niña tuve un encuentro que marcó mi vida:<br />
                        conocí una comunidad indígena y quedé fascinada<br />
                        al ver como elaboraban accesorios con tanta destreza.<br /> Desde ahí, se despertó
                        en mi una admiración<br />por el trabajo artesanal y la riqueza cultural</p>
                        <div className={style.flechas}>
                            <Image className={style.imgFlecha} src="/FlechaAbajo.webp" alt='Imagen de flecha apuntando hacia abajo' title='Flecha' width={64} height={64}/>
                        </div>
                </div>
                <div className={style.divImgIndigenas}>
                    <Image className={style.imgIndigenas} src="https://pub-973570666b3f4d6da48e4aafb394e236.r2.dev/retratoIndigena.webp" alt='Indígena mirando hacia un lado' title='Indigena' width={350} height={500}/>
                </div>
            </article>

            <article className={style.articleResultado}>
                <div className={style.divImg}>
                    <Image className={style.imgModelos} src="https://pub-973570666b3f4d6da48e4aafb394e236.r2.dev/fotoModelos0.webp" alt='Modelos usando aretes Borbolet' title='Modelos' width={350} height={500}/>
                </div>
                <div className={style.divCreadora}>
                    <h2 className={style.txtCreadora}>Aretes para mujeres exclusivas</h2>
                    <p className={style.txtCreadora}>Crear este tipo de accesorios me permite<br />
                        satisfacer la necesidad de muchas mujeres a las<br />
                        que les gusta resaltar, verse elegantes y originales</p>
                </div>
            </article>
            <article className={style.presentacionMensaje}>
                <article className={style.imgpresentacionMensaje}>

                    <div className={style.divPresentacionArete}>
                        <Image className={style.aretePresentacion} src="https://pub-973570666b3f4d6da48e4aafb394e236.r2.dev/earrings%20(1).webp" alt='Dibujo de aretes' title='Aretes' width={350} height={500}/>
                    </div>
                    <div className={style.divPresentacionArete}>
                        <Image className={style.aretePresentacion} src="https://pub-973570666b3f4d6da48e4aafb394e236.r2.dev/necklace.webp" alt='Dibujo de collares' title='Collares' width={350} height={500}/>
                    </div>
                    <div className={style.divPresentacionArete}>
                        <Image className={style.aretePresentacion} src="https://pub-973570666b3f4d6da48e4aafb394e236.r2.dev/gemstone.webp" alt='Dibujo de gema' title='Gema' width={350} height={500}/>
                    </div>

                </article>
                    <p className={style.pMensaje}>Estas piezas ofrecen más que belleza:<br />
                    cuentan historias y transmiten emociones
                    </p>
                    <div className={style.divbtnComprar}>
                        <Link href="/products/earrings" className={style.btnComprar}>¡Quiero las mías!</Link>
                    </div>
            </article>

        </section>
  )
}

export default IntroductionPage