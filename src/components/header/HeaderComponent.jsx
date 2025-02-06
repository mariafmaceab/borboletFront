"use client"
import React from 'react'
import style from './Header.module.css'
import Link from 'next/link'
import {
    MenuContent,
    MenuItem,
    MenuRoot,
    MenuTrigger,
} from "@/components/ui/menu"
import { Button, DrawerContext } from "@chakra-ui/react"
import {
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerRoot,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

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
                                        <Link className={`${style.aretes} ${style.text}`} href="/earrings">
                                            <img src='/LogoAretes.svg' alt="Logo de unos aretes"/>
                                            <p className={style.desplegableText} >Aretes</p>
                                        </Link>
                                    </MenuItem>
                                    <MenuItem className={style.desplegableNav} asChild value="necklaces">
                                        <Link className={`${style.collares} ${style.text}`} href="/necklaces">
                                            <img src="/LogoCollar.svg" alt="Logo de un collar"/>
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
                    <li> <Link href="/"><img src="/Logo.svg" alt="Logo"/></Link></li>
                    </div>

                    <div className={style.div}>
                        <li className={`${style.presentacion} ${style.text}`}> <Link href="/introduction">¿Quiénes somos?</Link> </li>
                        <li className={`${style.contacto} ${style.text}`}> <Link href="/contact">Contáctanos</Link> </li>
                        <DrawerRoot size={"md"}>
                            <DrawerBackdrop />
                            <DrawerTrigger asChild>
                                <Button className={style.buttonCar} variant="outline" size="md">
                                    <img src="/Cesta.svg" alt="CarritoDeCompras"/>
                                </Button>
                            </DrawerTrigger>
                            <DrawerContent className={style.drawerCar}>
                                <DrawerHeader>
                                    <DrawerTitle className={style.titleCar}>
                                        Carrito de compras
                                    </DrawerTitle>
                                </DrawerHeader>
                                <DrawerContext>
                                    {(store) => (
                                        <DrawerBody>
                                            <p className={style.textCar}>
                                                Por el momento tu carrito de compras está vacío
                                            </p>
                                            <div className={style.divImg}>
                                                <img src="./carro-vacio.png" alt="Carrito de compras vacío" />
                                            </div>
                                        </DrawerBody>
                                    )}
                                </DrawerContext>
                                <DrawerCloseTrigger />
                            </DrawerContent>
                        </DrawerRoot>
                    </div>
                </ul>
            </nav>
        </header>
    );
}

export default NavBar