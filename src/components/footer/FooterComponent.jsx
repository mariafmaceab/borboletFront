import React from "react"
import style from "./Footer.module.css"

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
                        <li className={`${style.list} ${style.inicio}`}><a className="link" href="#">Inicio</a></li>
                        <li className={`${style.list} ${style.aretes}`}><a className="link" href="./earrings">Aretes</a></li>
                        <li className={`${style.list} ${style.collares}`}><a className="link" href="./necklaces">Collares</a></li>
                        <li className={`${style.list} ${style.procesos}`}><a className="link" href="./processes">Proceso creativo</a></li>
                        <li className={`${style.list} ${style.presentacion}`}><a className="link" href="./introduction">¿Quiénes somos?</a></li>
                        <li className={`${style.list} ${style.contacto}`}><a className="link" href="./contact">Contáctanos</a></li>
                    </ul>
                </article>
                <article>
                    <p className={style.subtitulo}>Legal</p>
                    <p>Términos y condiciones</p>
                    <p>Tratamiento de datos</p>
                </article>
                <article>
                    <p className={style.subtitulo}>Siguenos</p>
                    <img src="./Instagram.svg" alt="Logo de Instagram"/>
                    <img src="./TikTok.svg" alt="Logo Tik tok"/>
                    <img src="./Facebook.svg" alt="Logo Facebook"/>
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