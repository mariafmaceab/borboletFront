"use client"
import supabase from "@/app/database/supabase"
import { useParams } from "next/navigation"
import { useState, useEffect } from "react"
import style from './style.module.css'
import Image from "next/image"
import { Heading, Icon, Stack } from "@chakra-ui/react"
import {
    AccordionItem,
    AccordionItemContent,
    AccordionItemTrigger,
    AccordionRoot,
} from "@/components/ui/accordion"
import { LiaTruckMovingSolid, LiaLockSolid } from "react-icons/lia";
import { useCart } from "@/app/context/cartcontext"
import COP from "@/app/utils/utils"

const ProductDetailPage = () => {

    const [product, setProduct] = useState({})
    const urlParams = useParams()
    const productId = urlParams["id"]
    const { cart, addToCart } = useCart();
    const [productCount, setProductCount] = useState(cart.length < 1 ? 1 : cart.length)

    useEffect(() => {
        async function fetchProduct() {
            const { data, error } = await supabase.from('products').select().eq('id', productId).single()
            if (error) {
                console.log(error)
            }
            setProduct(data)
        }
        fetchProduct();
    }, [])

    function handleProductDecrease() {
        setProductCount(prevCount => Math.max(1, prevCount - 1));
    }

    function handleProductIncrease() {
        setProductCount(prevCount => Math.min(5, prevCount + 1));
    }


    function handleInputChange(event) {
        let value = parseInt(event.target.value, 10) || 1;
        value = Math.min(5, Math.max(1, value));
        setProductCount(value);
    }

    return (
        <section className={style.pageProducts}>
            <article className={style.articleImgProduct}>
                <Image className={style.imgProduct} src={product?.image || "../VarianteLogo.svg"} blurDataURL="https://placehold.co/485x528.WebP" alt={product?.name || "Product"} width={485} height={528} style={{ objectFit: "contain" }} priority loading="eager" />
            </article>

            <article className={style.articleDescripcionProducto}>
                <div className={style.titleProduct}>
                    <h1>{product.name}</h1>
                </div>

                <div className={style.precioProducto}>
                    <p className={style.priceProduct}>{COP.format(product?.price || 0)}</p>
                </div>

                <div className={style.bottomsProducto}>
                    <button className={style.btnCantidad} onClick={handleProductDecrease}>-</button>
                    <input className={style.inputCantidad} type="number" value={productCount} min={1} max={5} onChange={handleInputChange} />
                    <button className={style.btnCantidad} onClick={handleProductIncrease}>+</button>
                    <button className={style.btnCarrito} onClick={() => {
                        addToCart(product, productCount)
                    }}>Añadir al carrito</button>
                </div>

                <div className={style.descripcionProducto}>
                    <h2 className={`${style.detalles} ${style.detalles1}`}>Accesorios tejidos artesanales</h2>
                    <p className={`${style.detalles} ${style.detalles2}`}>Detalles del producto:</p>
                        <ul className={style.listaDescripcionProducto}>
                            {
                            product?.description?.map((item, index) => (
                                <h3 key={index}><li className={style.descripcionItem}>{item}</li></h3>
                            ))}
                        </ul>
                </div>

                <Stack width="full" maxW="400px">
                    <AccordionRoot collapsible defaultValue={["info"]}>
                        <AccordionItem key={"envio"} value={"envio"}>
                            <AccordionItemTrigger className={style.accordion}>
                                <Icon fontSize="lg" hjkcolor="fg.subtle">
                                    <LiaTruckMovingSolid />
                                </Icon>
                                <p>Envíos</p>
                            </AccordionItemTrigger>
                            <AccordionItemContent className={style.accordion}>Borbolet realiza despachos a todo el territorio colombiano, a través de transportadoras aliadas,
                                que garantizan la seguridad y la cobertura, para que el producto pueda llegar a manos de nuestros clientes</AccordionItemContent>
                        </AccordionItem>
                        <AccordionItem key={"garantia"} value={"garantia"}>
                            <AccordionItemTrigger className={style.accordion}>
                                <Icon fontSize="lg" color="fg.subtle">
                                    <LiaLockSolid />
                                </Icon>
                                <p>Garantía</p>
                            </AccordionItemTrigger>
                            <AccordionItemContent className={style.accordion}>Borbolet ofrece garantía en el tejido de 60 días contra defectos de fabricación y ofrece un servicio de
                                mantenimiento para asegurar que tus accesorios se mantengan hermosos durante años. La garantía no cubre daños por mal uso</AccordionItemContent>
                        </AccordionItem>
                    </AccordionRoot>
                </Stack>
            </article>
        </section>
    )
}

export default ProductDetailPage