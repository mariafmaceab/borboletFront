import React from 'react'
import style from './Header.module.css'
import Link from 'next/link'

const NavBar = () => {
    return (
        <header>
            <nav className={style.desktopNavbar}>
                <ul className={`${style.navBar} ${style.ul}`}>
                    <div className={`${style.coleccionContainer} ${style.div}`}>
                        <div className={`${style.dropdown} ${style.div}`}>
                            <button className={style.btnDropdownToggle} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <Link className={style.text} href="#"> Colección </Link>
                            </button>
                            <ul className={`${style.dropdownMenu} ${style.ul}`} aria-labelledby="dropdownMenu2">
                            <li><img src='/LogoAretes.svg' alt="Logo de unos aretes"/><Link className={`${style.aretes} ${style.text}`} href="/earrings">Aretes</Link></li>
                            <li><img src="/LogoCollar.svg" alt="Logo de un collar"/><Link className={`${style.collares} ${style.text}`} href="/necklaces">Collares</Link></li>
                            </ul>
                        </div>
                        <li className={`${style.contacto} ${style.text}`}> <Link href="/processes">Proceso creativo</Link> </li>
                    </div>

                    <div className={`${style.logo}  ${style.div}`}>
                    <li> <Link href="/"><img src="/Logo.svg" alt="Logo"/></Link></li>
                    </div>

                    <div className={style.div}>
                        <li className={`${style.presentacion} ${style.text}`}> <Link href="/introduction">¿Quiénes somos?</Link> </li>
                        <li className={`${style.contacto} ${style.text}`}> <Link href="/contact">Contáctanos</Link> </li>
                        <li className={style.cesta}> <Link href=""><img src="/Cesta.svg" alt="CarritoDeCompras"/></Link></li>
                    </div>
                </ul>
            </nav>
        </header>
    );
}

export default NavBar