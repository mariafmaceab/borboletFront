"use client"
import supabase from "@/app/database/supabase"
import { useParams } from "next/navigation"
import { useState, useEffect } from "react"

const ProductDetailPage = () => {

    const [product, setProduct] = useState({})
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

  return (
    <div>
        <h1>{JSON.stringify(product)}</h1>
    </div>
  )
}

export default ProductDetailPage