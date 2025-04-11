"use client"
import {
    DrawerBackdrop,
    DrawerBody,
    DrawerCloseTrigger,
    DrawerContent,
    DrawerHeader,
    DrawerRoot,
    DrawerTitle,
    DrawerTrigger,
} from "@/app/components/ui/drawer"
import { Button, HStack, IconButton, Text, VStack } from "@chakra-ui/react"
import React, { useEffect, useState } from 'react'
import style from "./Cart.module.css"
import { useCart } from "@/app/context/cartcontext"
import { RiDeleteBin2Line } from "react-icons/ri";
import { FaMinus, FaPlus } from "react-icons/fa6";
import Image from "next/image"
import COP from "@/app/utils/utils"
import { initMercadoPago, Payment } from "@mercadopago/sdk-react"

const CartComponent = () => {
    initMercadoPago(process.env.NEXT_PUBLIC_MP_KEY)

    const { cart, isCartOpen, setIsCartOpen, addToCart, removeFromCart, removeOneFromCart } = useCart();
    const [totalPrice, setTotalPrice] = useState(0)
    const [preferenceId, setPreferenceId] = useState(null)
    const [initPoint, setInitPoint] = useState("")

    const settings = {
        initialization: {
            amount: totalPrice,
            preferenceId: preferenceId
        },
        customization: {
            visual: {
                style: {
                    theme: "default"
                },
            },
            paymentMethods: {
                bankTransfer: "all",
                maxInstallments: 1
            },
        },
        callbacks: {
            onReady: () => { },
            onSubmit: () => {
                console.log(initPoint)
                window.location.href = initPoint
            },
            onError: (error) => {
                console.log(error)
            }
        },
    }

    const getTotalPrice = () => {
        return cart.reduce((total, item) => {
            const itemTotal = item.price * item.quantity;
            return total + itemTotal;
        }, 0);
    };

    useEffect(() => {
        setTotalPrice(getTotalPrice())
    }, [cart])

    function toggleOpen() {
        setIsCartOpen(prevState => !prevState)
    }

    function handlePurchase() {
        fetch("/api/payment/preference", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(cart)
        }).then((response) => {
            return response.json()
        }).then((data) => {
            setPreferenceId(data.preference_id)
            setInitPoint(data.redirect)
        }).catch((error) => {
            console.log("ERROR WHILE CREATING PAYMENT PREFERENCE: ", error)
        })
    }

    return (
        <DrawerRoot size={"md"} open={isCartOpen} onOpenChange={toggleOpen}>
            <DrawerBackdrop />
            <DrawerTrigger asChild>
                <Button className={style.buttonCar} variant="outline" size="md">
                    <Image className={style.imgCar} src="/Cesta.svg" alt="CarritoDeCompras" title='Cesta' width={27} height={27}/>
                </Button>
            </DrawerTrigger>
            <DrawerContent className={style.drawerCar}>
                <DrawerHeader>
                    <DrawerTitle className={style.titleCar}>
                        Carrito de compras
                    </DrawerTitle>
                </DrawerHeader>
                <DrawerBody>
                    {cart.length === 0 ? (
                        <VStack spacing={4}>
                            <p className={style.textCar}>
                                Por el momento tu carrito de compras está vacío
                            </p>
                            <div className={style.divImg}>
                                <Image src="/carro-vacio.png" alt="Carrito de compras vacío" width={100} height={100}/>
                            </div>
                        </VStack>
                    ) : (
                        <VStack spacing={4} align="stretch">
                            {cart.map((item) => (
                                <HStack className={style.agg} key={item.id} justify="space-between">
                                    <Image src={item.image} alt={item.name} width={100} height={100} loading="lazy" />
                                    <VStack>
                                        <Text>{COP.format(item.price)} unidad</Text>
                                        <Text>{item.name} x {item.quantity}</Text>
                                        <Text>{COP.format(item.price * item.quantity)}</Text>
                                    </VStack>
                                    <VStack>
                                        <IconButton className={style.btn}>
                                            <FaPlus onClick={() => addToCart(item, 1)} />
                                        </IconButton>
                                        <IconButton className={style.btn}>
                                            <RiDeleteBin2Line onClick={() => removeFromCart(item.id)} />
                                        </IconButton>
                                        <IconButton className={style.btn}>
                                            <FaMinus onClick={() => removeOneFromCart(item.id)} />
                                        </IconButton>
                                    </VStack>
                                </HStack>
                            ))}
                            <h2>Total: {COP.format(totalPrice)}</h2>
                            <Button className={style.btnComprar} onClick={handlePurchase}>Comprar</Button>
                        </VStack>
                    )}
                    {
                        preferenceId ?
                            <div id="paymentBrick_container">
                                <Payment locale="es-CO" initialization={settings.initialization} customization={settings.customization} onSubmit={settings.callbacks.onSubmit} onReady={settings.callbacks.onReady} onError={settings.callbacks.onError} />
                            </div>
                            : <></>
                    }
                </DrawerBody>
                <DrawerCloseTrigger />
            </DrawerContent>
        </DrawerRoot>
    )
}

export default CartComponent