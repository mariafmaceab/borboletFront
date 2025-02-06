import React from "react"
import style from "./Footer.module.css"
import Link from 'next/link'

const FooterComponent = () => {
  return (
        <footer>
        <section className={style.sectionFooter}>
            <article className={style.articleFooter}>     
                <article className={style.contactoFooter}>
                    <div className={style.divcontactoFooter}>
                        <img className={style.imgLogoFooter} src="./LogoFooter.svg" alt="Logo footer"/>
                    </div>
                    <div className={style.divcontactoFooter}>
                        <img className={style.imgFooter} src="./WhatsApp.svg" alt="Logo WhatsApp"/><a>(+57) 324 516 7082</a>                      
                    </div>
                    <div className={style.divcontactoFooter}>
                        <img className={style.imgFooter} src="./Correo.svg" alt="Logo Gmail"/><a>Borbolet@gmail.com</a>
                    </div>
                    <div className={style.divcontactoFooter}>
                        <img className={style.imgFooter} src="./Ubicacion.svg" alt="Logo Ubicacion"/><a>Colombia</a>
                    </div>
                </article>

                <article className={style.menuFooter}>
                    <ul className={style.linkList}>
                        <p className={style.subtitulo}>Menú</p>
                        <li className={`${style.list} ${style.inicio}`}><Link className="link" href="#">Inicio</Link></li>
                        <li className={`${style.list} ${style.aretes}`}><Link className="link" href="/earrings">Aretes</Link></li>
                        <li className={`${style.list} ${style.collares}`}><Link className="link" href="/necklaces">Collares</Link></li>
                        <li className={`${style.list} ${style.procesos}`}><Link className="link" href="/processes">Proceso creativo</Link></li>
                        <li className={`${style.list} ${style.presentacion}`}><Link className="link" href="/introduction">¿Quiénes somos?</Link></li>
                        <li className={`${style.list} ${style.contacto}`}><Link className="link" href="/contact">Contáctanos</Link></li>
                    </ul>
                </article>
                <article>
                    <p className={style.subtitulo}>Legal</p>
                    <p>Términos y condiciones</p>
                    <p>Tratamiento de datos</p>
                </article>
                <article>
                    <p className={style.subtitulo}>Siguenos</p>
                    <div className={style.redes}>
                        <img src="./Instagram.svg" alt="Logo de Instagram"/>
                        <img src="./TikTok.svg" alt="Logo Tik tok"/>
                        <img src="./Facebook.svg" alt="Logo Facebook"/>
                    </div>
                </article>
        </article>    
        <article className={style.articleCopy}>
            <img src="./CopyRight.svg" alt="Logo Copyright"/>
            <a> Copyright 2024 Desing by Macea</a>
        </article>
        </section>
    </footer>
  )
}

export default FooterComponent