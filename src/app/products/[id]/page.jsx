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

let COP = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    maximumSignificantDigits: 1,
  });

const ProductDetailPage = () => {

    const [product, setProduct] = useState({})
    const [productCount, setProductCount] = useState(1)
    const urlParams = useParams()
    const productId = urlParams["id"]

    useEffect(() => {
        async function fetchProduct() {
            const {data, error} = await supabase.from('products').select().eq('id', productId)
            if(error) {
                console.log(error)
            }
            setProduct(data[0])
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
            <Image src={product?.image || "../LogoFooter.svg"} blurDataURL="https://placehold.co/485x528.WebP" alt={product?.name || "Product"} width={485} height={528} style={{ objectFit: "contain" }} priority loading="eager"/>
        </article>

        <article className={style.articleDescripcionProducto}>
            <div className={style.titleProduct}>
                <h3>{product.name}</h3>
            </div>

            <div className={style.precioProducto}>
                <p className={style.priceProduct}>{COP.format(product?.price || 0)}</p>
            </div>

            <div className={style.bottomsProducto}>
                <button className={style.btnCantidad} onClick={handleProductDecrease}>-</button>
                <input className={style.inputCantidad} type="number" value={productCount} min={1} max={5} onChange={handleInputChange}/>
                <button className={style.btnCantidad} onClick={handleProductIncrease}>+</button>
                <button className={style.btnCarrito}>Añadir al carrito</button>
            </div>

            <div className={style.descripcionProducto}>
                <ul className={style.listaDescripcionProducto}>
                {
                    product?.description?.map((item, index) => (
                        <li className={style.descripcionItem} key={index}>{item}</li>
                    ))}
                </ul>
            </div>

            <Stack width="full" maxW="400px">
                <Heading size="md">Términos y condiciones</Heading>
                <AccordionRoot collapsible defaultValue={["info"]}>
                    <AccordionItem key={"envio"} value={"envio"}>
                        <AccordionItemTrigger>
                        <Icon fontSize="lg" color="fg.subtle">
                            <LiaTruckMovingSolid/>
                        </Icon>
                            Envíos
                        </AccordionItemTrigger>
                        <AccordionItemContent>Esta es la info de envios</AccordionItemContent>
                    </AccordionItem>
                    <AccordionItem key={"garantia"} value={"garantia"}>
                        <AccordionItemTrigger>
                        <Icon fontSize="lg" color="fg.subtle">
                            <LiaLockSolid/>
                        </Icon>
                            Garantía
                        </AccordionItemTrigger>
                        <AccordionItemContent>Esta es la info de garantias</AccordionItemContent>
                    </AccordionItem>
                </AccordionRoot>
            </Stack>
        </article>
    </section>
  )
}

export default ProductDetailPage