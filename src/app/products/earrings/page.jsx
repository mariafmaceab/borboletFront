"use client"
import React, { useState, useEffect } from 'react'  
import style from './style.module.css'
import ProductCardComponent from '@/app/components/cards/products/ProductCardComponent'
import supabase from '@/app/database/supabase'

const Earrings = () => {

    const [earrings, setEarrings] = useState([])

    useEffect(() => {
        async function fetchProducts() {
            const {data, error} = await supabase.from('products').select().eq('category', 'earrings').order("id")
            if(error) {
                console.log(error)
            }
            setEarrings(data)
        }
        fetchProducts();
    }, [])

    function handleOrder(event) {
        const action = event.target.value
        if (action === "ltg") {
            const orderByPriceAsc = [...earrings].sort((a, b) => Number(a.price) - Number(b.price))
            setEarrings(orderByPriceAsc)
        }
        else if(action === "gtl"){
            const orderByPriceDesc = [...earrings].sort((a, b) => Number(b.price) - Number(a.price))
            setEarrings(orderByPriceDesc)
        }
        else {
            const orderById = [...earrings].sort((a, b) => a.id - b.id)
            setEarrings(orderById)
        }
    }

      return (
            <section className={style.sectionCollection}>
                <article className={style.titleEarrings}>
                    <h1>Aretes</h1>
                </article>
                <article className={style.filtersSection}>
                    <p>Filtrar:</p>
                    <div className={style.dropdown}>
                        <label htmlFor="precio">Precio: </label>
                        <select className={style.container} name="price" id="price" defaultValue="relevant" onChange={(e) => handleOrder(e)}>
                            <option value="relevant">Más relevantes</option>
                            <option value="ltg">De menor a mayor</option>
                            <option value="gtl">De mayor a menor</option>
                        </select>
                    </div>
                </article>

                <section className={style.productsSection}>
                    <div className={style.products}>
                        {
                            earrings.map(earring => <ProductCardComponent key={earring.id} product={earring}/>)
                        }
                    </div>
                </section>
        </section>
      );
}

export default Earrings