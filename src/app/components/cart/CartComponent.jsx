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
import React from 'react'
import style from "./Cart.module.css"
import { useCart } from "@/app/context/cartcontext"
import { RiDeleteBin2Line } from "react-icons/ri";
import { FaMinus, FaPlus } from "react-icons/fa6";
import Image from "next/image"
import COP from "@/app/utils/utils"

const CartComponent = () => {
    const { cart, addToCart, removeFromCart, removeOneFromCart } = useCart();

    const getTotalPrice = () => {
        return cart.reduce((total, item) => {
            const itemTotal = item.price * item.quantity;
            return total + itemTotal;
        }, 0);
    };

    return (
        <DrawerRoot size={"md"}>
            <DrawerBackdrop />
            <DrawerTrigger asChild>
                <Button className={style.buttonCar} variant="outline" size="md">
                    <img src="/Cesta.svg" alt="CarritoDeCompras" />
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
                                <img src="./carro-vacio.png" alt="Carrito de compras vacío" />
                            </div>
                        </VStack>
                    ) : (
                        <VStack spacing={4} align="stretch">
                            {cart.map((item) => (
                                <HStack key={item.id} justify="space-between">
                                    <Image src={item.image} alt={item.name} width={100} height={100} loading="lazy" />
                                    <Text>{item.name} x {item.quantity}</Text>
                                    <VStack>
                                        <IconButton>
                                            <FaPlus onClick={() => addToCart(item, 1)} />
                                        </IconButton>
                                        <IconButton>
                                            <RiDeleteBin2Line onClick={() => removeFromCart(item.id)} />
                                        </IconButton>
                                        <IconButton>
                                            <FaMinus onClick={() => removeOneFromCart(item.id)} />
                                        </IconButton>
                                    </VStack>
                                </HStack>
                            ))}
                        </VStack>
                    )}
                    <h2>Total: {COP.format(getTotalPrice())}</h2>
                </DrawerBody>
                <DrawerCloseTrigger />
            </DrawerContent>
        </DrawerRoot>
    )
}

export default CartComponent