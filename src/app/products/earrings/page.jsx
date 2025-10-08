"use client"
import React, { useState, useEffect, useRef } from 'react'  
import style from './style.module.css'
import ProductCardComponent from '@/app/components/cards/products/ProductCardComponent'
import supabase from '@/app/database/supabase'

const Earrings = () => {

    const [earrings, setEarrings] = useState([])
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
                <article className={style.articleVideo}>
                  <div>
                    <h1 className={style.titleEarrings}>Aretes en Colombia</h1>
                    <h2 className={style.subtitleEarrings}>Aretes artesanales colombianos</h2>
                    <h3 className={style.subtitleEarrings2}>Aretas de mariposas, aves y flores en mostacilla checa</h3>
                  </div>
                  <div className={style.videoSection}>
                <iframe 
                    ref={iframeRef}
                    src="https://www.youtube.com/embed/tNn1K3nXl50?autoplay=1&mute=1&controls=0&loop=1&playlist=tNn1K3nXl50&enablejsapi=1"
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
                            earrings.map(earring => <ProductCardComponent key={earring.id} product={earring}/>)
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

export default Earrings