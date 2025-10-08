"use client"
import React, { useState, useEffect, useRef } from 'react'
import style from './style.module.css'
import ProductCardComponent from '@/app/components/cards/products/ProductCardComponent'
import supabase from '@/app/database/supabase'

const Necklaces = () => {

  const [necklaces, setNecklaces] = useState([])
  const [isMuted, setIsMuted] = useState(true)
  const iframeRef = useRef(null)

  const toggleMute = () => {
    const iframe = iframeRef.current
    if (!iframe) return
    iframe.contentWindow.postMessage(
      JSON.stringify({
        event: "command",
        func: isMuted ? "unMute" : "mute",
        args: [],
      }),
      "*"
    )
    setIsMuted(!isMuted)
  }

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
            <div>
              <h1>Collares en mostacilla para mujer</h1>
              <h2 className={style.subtitleNecklace}>Collares artesanales indigenas hechos en Colombia</h2>
            </div>

          <div className={style.videoSection}>
              <iframe 
                  ref={iframeRef}
                  src="https://www.youtube.com/embed/XaxdX8LZ_-g?autoplay=1&mute=1&controls=0&loop=1&playlist=XaxdX8LZ_-g&enablejsapi=1"
                  title="Collar de flores" 
                  loading="lazy" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen>
              </iframe>

              {/* Botón para activar/desactivar sonido */}
                <button onClick={toggleMute} className={style.soundButton}>
                    {isMuted ? "🔇" : "🔊"}
                </button>
          </div>
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
            <a
                href="https://wa.me/573245167082?text=Hola%2C%20vi%20la%20web%20y%20estoy%20interesad%40%20en%20adquirir%20accesorios%20Borbolet"
                className={style.whatsappFloat}
                target="_blank"
                rel="noopener noreferrer"
            >
            <img
                src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
                alt="WhatsApp"
                className={style.whatsappIcon}
            />
            </a>
      </section>
    );
}

export default Necklaces
