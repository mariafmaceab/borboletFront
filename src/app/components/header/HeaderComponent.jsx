"use client"
import React from 'react'
import style from './Header.module.css'
import Link from 'next/link'
import {
    MenuContent,
    MenuItem,
    MenuRoot,
    MenuTrigger,
} from "@/app/components/ui/menu"
import { Button } from "@chakra-ui/react"
import CartComponent from '../cart/CartComponent'
import Image from 'next/image'

const NavBar = () => {
    return (
        <header>
            <nav className={style.desktopNavbar}>
                <ul className={`${style.navBar} ${style.ul}`}>
                    <div className={`${style.coleccionContainer} ${style.div}`}>
                        <div className={`${style.dropdown} ${style.div}`}>
                            <MenuRoot>
                                <MenuTrigger asChild>
                                    <Button className={style.buttonNav} variant="outline" size="sm">
                                        Colección
                                    </Button>
                                </MenuTrigger>
                                <MenuContent>
                                    <MenuItem className={style.desplegableNav} asChild value="earrings">
                                        <Link className={`${style.aretes} ${style.text}`} href="/products/earrings">
                                            <Image src='/LogoAretes.svg' alt="Logo de unos aretes" width={27} height={27}/>
                                            <p className={style.desplegableText} >Aretes</p>
                                        </Link>
                                    </MenuItem>
                                    <MenuItem className={style.desplegableNav} asChild value="necklaces">
                                        <Link className={`${style.collares} ${style.text}`} href="/products/necklaces">
                                            <Image src="/LogoCollar.svg" alt="Logo de un collar" width={27} height={27}/>
                                            <p className={style.desplegableText}>Collares</p>
                                        </Link>
                                    </MenuItem>
                                </MenuContent>
                            </MenuRoot>
                            <ul className={`${style.dropdownMenu} ${style.ul}`} aria-labelledby="dropdownMenu2">
                            </ul>
                        </div>
                        <li className={`${style.contacto} ${style.text}`}> <Link href="/processes">Proceso creativo</Link> </li>
                    </div>

                    <div className={`${style.logo}  ${style.div}`}>
                    <li> <Link href="/"><Image src="/Logo.svg" alt="Logo" width={179} height={64}/></Link></li>
                    </div>

                    <div className={style.div}>
                        <li className={`${style.presentacion} ${style.text}`}> <Link href="/introduction">¿Quiénes somos?</Link> </li>
                        <li className={`${style.contacto} ${style.text}`}> <Link href="/contact">Contáctanos</Link> </li>
                        <CartComponent id="cart-component"/>
                    </div>
                </ul>
            </nav>
        </header>
    );
}

export default NavBar