"use client"
import React, { useState, useEffect } from 'react'
import style from './style.module.css'
import ProductCardComponent from '@/app/components/cards/products/ProductCardComponent'
import supabase from '@/app/database/supabase'

const Necklaces = () => {

  const [necklaces, setNecklaces] = useState([])

  useEffect(() => {
      async function fetchProducts() {
          const {data, error} = await supabase.from('products').select().eq('category', 'necklace').order("id")
          if(error) {
              console.log(error)
          }
          setNecklaces(data)
      }
      fetchProducts();
  }, [])

  function handleOrder(event) {
      const action = event.target.value
      if (action === "ltg") {
          const orderByPriceAsc = [...necklaces].sort((a, b) => Number(a.price) - Number(b.price))
          setNecklaces(orderByPriceAsc)
      }
      else if(action === "gtl"){
          const orderByPriceDesc = [...necklaces].sort((a, b) => Number(b.price) - Number(a.price))
          setNecklaces(orderByPriceDesc)
      }
      else {
          const orderById = [...necklaces].sort((a, b) => a.id - b.id)
          setNecklaces(orderById)
      }
  }

    return (
          <section className={style.sectionCollection}>
              <article className={style.titleNecklace}>
                  <h2>Collares</h2>
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
                          necklaces.map(necklace => <ProductCardComponent key={necklace.id} product={necklace}/>)
                      }
                  </div>
              </section>
      </section>
    );
}

export default Necklaces