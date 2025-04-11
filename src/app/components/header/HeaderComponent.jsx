"use client"
import React, { useEffect } from 'react'
import style from './Header.module.css'
import Link from 'next/link'
import { RxHamburgerMenu } from "react-icons/rx";
import {
    MenuContent,
    MenuItem,
    MenuRoot,
    MenuTrigger,
} from "@/app/components/ui/menu"
import { Button } from "@chakra-ui/react"
import CartComponent from '../cart/CartComponent'
import Image from 'next/image'
import {
    DrawerActionTrigger,
    DrawerBackdrop,
    DrawerBody,
    DrawerCloseTrigger,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerRoot,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { useState } from "react"

const NavBar = () => {
    const [open, setOpen] = useState(false)
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const checkScreenSize = () => setIsMobile(window.innerWidth < 745);
        checkScreenSize();

        window.addEventListener("resize", checkScreenSize);
        return () => window.removeEventListener("resize", checkScreenSize);
    }, []);

    return (
        <header className={style.headerM}>
            {isMobile ? <DrawerRoot open={open} onOpenChange={(e) => setOpen(e.open)} placement={"start"}>
                <DrawerBackdrop />
                <DrawerTrigger asChild>
                    <Button className={style.btnBurguer} variant="outline" size="sm">
                        <RxHamburgerMenu className={style.burguer}/>
                    </Button>
                </DrawerTrigger>
                <DrawerContent placement="left">
                    <DrawerHeader>
                        <DrawerTitle className={style.titleMovil}>Borbolet</DrawerTitle>
                    </DrawerHeader>
                    <DrawerBody>
                        <div className={style.div}>
                            <Link className={`${style.coleccionMovil} ${style.text}`} href="/products/earrings" onClick={() => setOpen(false)}>
                                <Image src='/LogoAretes.svg' alt="Logo de unos aretes" width={27} height={27} />
                                <p className={style.textMovilColeccion} >Aretes</p>
                            </Link>
                            <Link className={`${style.coleccionMovil} ${style.text}`} href="/products/necklaces" onClick={() => setOpen(false)}>
                                <Image src="/LogoCollar.svg" alt="Logo de un collar" width={27} height={27} />
                                <p className={style.textMovilColeccion}>Collares</p>
                            </Link>
                            <p className={`${style.contacto} ${style.textMovil}`}> <Link href="/processes" onClick={() => setOpen(false)}>Proceso creativo</Link> </p>
                            <p className={`${style.presentacion} ${style.textMovil}`}> <Link href="/introduction" onClick={() => setOpen(false)}>¿Quiénes somos?</Link> </p>
                            <p className={`${style.contacto} ${style.textMovil}`}> <Link href="/contact" onClick={() => setOpen(false)}>Contáctanos</Link> </p>
                        </div>
                    </DrawerBody>
                    <DrawerCloseTrigger />
                </DrawerContent>
                    <div className={`${style.logoMovil}  ${style.div}`}>
                        <Link href="/"><Image src="/Logo.svg" alt="Logo" width={179} height={64} /></Link>
                    </div>
                    <div className={style.cartMovil}>
                        <CartComponent id="cart-component"/>
                    </div>
            </DrawerRoot> :
                <nav className={style.desktopNavbar}>
                    <div className={`${style.navBar} ${style.ul}`}>
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
                                                <Image src='/LogoAretes.svg' alt="Logo de unos aretes" width={27} height={27} />
                                                <p className={style.desplegableText} >Aretes</p>
                                            </Link>
                                        </MenuItem>
                                        <MenuItem className={style.desplegableNav} asChild value="necklaces">
                                            <Link className={`${style.collares} ${style.text}`} href="/products/necklaces">
                                                <Image src="/LogoCollar.svg" alt="Logo de un collar" width={27} height={27} />
                                                <p className={style.desplegableText}>Collares</p>
                                            </Link>
                                        </MenuItem>
                                    </MenuContent>
                                </MenuRoot>
                                <p className={`${style.dropdownMenu} ${style.ul}`} aria-labelledby="dropdownMenu2">
                                </p>
                            </div>
                            <p className={`${style.contacto} ${style.text}`}> <Link href="/processes">Proceso creativo</Link> </p>
                        </div>

                        <div className={`${style.logo}  ${style.div}`}>
                            <p> <Link href="/"><Image src="/Logo.svg" alt="Logo" title='Logo principal' width={179} height={64} /></Link></p>
                        </div>

                        <div className={style.div}>
                            <p className={`${style.presentacion} ${style.text}`}> <Link href="/introduction">¿Quiénes somos?</Link> </p>
                            <p className={`${style.contacto} ${style.text}`}> <Link href="/contact">Contáctanos</Link> </p>
                            <CartComponent id="cart-component" />
                        </div>
                    </div>
                </nav>
            }
        </header>
    );
}

export default NavBar