import React from "react"
import style from "./Footer.module.css"
import Link from 'next/link'
import Image from "next/image"

const FooterComponent = () => {
  return (
        <footer>
        <section className={style.sectionFooter}>
            <article className={style.articleFooter}>     
                <article className={style.contactoFooter}>
                    <div className={style.divcontactoFooter}>
                        <Image className={style.imgLogoFooter} src="/LogoFooter.svg" alt="Logo footer" title='Footer' width={150} height={24}/>
                    </div>
                    <div className={style.divcontactoFooter}>
                        <Link className={style.linkcontactoFooter} target="__blank" href="https://wa.me/573245167082?text=Hola%2C%20vi%20la%20web%20y%20estoy%20interesad%40%20en%20adquirir%20accesorios%20Borbolet"><Image className={style.imgFooter} src="/WhatsApp.svg" alt="Logo WhatsApp" title='WhatsApp' width={39} height={24}/>(+57) 324 516 7082</Link>                      
                    </div>
                    <div className={style.divcontactoFooter}>
                        <Image className={style.imgFooter} src="/Correo.svg" alt="Logo Gmail" title='Gmail' width={39} height={24}/><p>Borbolet79@gmail.com</p>
                    </div>
                    <div className={style.divcontactoFooter}>
                        <Image className={style.imgFooter} src="/Ubicacion.svg" alt="Logo Ubicacion" title='Ubicacion' width={39} height={24}/><p>Colombia</p>
                    </div>
                </article>

                <article className={style.menuFooter}>
                    <ul className={style.linkList}>
                        <li className={style.subtitulo}>Menú</li>
                        <li className={`${style.list} ${style.inicio}`}><Link className="link" href="#">Inicio</Link></li>
                        <li className={`${style.list} ${style.aretes}`}><Link className="link" href="/products/earrings">Aretes</Link></li>
                        <li className={`${style.list} ${style.collares}`}><Link className="link" href="/products/necklaces">Collares</Link></li>
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
                        <Link target="__blank" href="https://www.instagram.com/borbolet_accesorios/?igsh=bHYwOTg3anRlNTE4#"><Image src="/Instagram.svg" alt="Logo de Instagram" title='Instagram' width={24} height={24}/></Link>
                        <Image src="/TikTok.svg" alt="Logo Tik tok" title='TikTok' width={24} height={24}/>
                        <Image src="/Facebook.svg" alt="Logo Facebook" title='Facebook' width={20} height={24}/>
                    </div>
                </article>
            </article>    
        <article className={style.articleCopy}>
            <Image src="/CopyRight.svg" alt="Logo Copyright" title='Copyright' width={24} height={24}/>
            <Link href="https://maceaweb.com/"
                  target="_blank"
                  rel="noopener noreferrer">
                Copyright 2024 Design by MaceaWeb.com
            </Link>
        </article>
        </section>
    </footer>
  )
}

export default FooterComponent