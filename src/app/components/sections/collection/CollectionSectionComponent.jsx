"use client"
import React, { useEffect, useState, useRef } from 'react'
import style from './CollectionSection.module.css'
import ProductCardComponent from '@/app/components/cards/products/ProductCardComponent'
import supabase from '@/app/database/supabase'
import Link from 'next/link'

const SectionColeccion = () => {

    const [earrings, setEarrings] = useState([])
    const [necklaces, setNecklaces] = useState([])
    const [isMuted, setIsMuted] = useState(true)
    const iframeRef = useRef(null)

    const toggleMute = () => {
        const iframe = iframeRef.current
        if (!iframe) return
        // Enviamos comando a YouTube para activar/desactivar sonido
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
        const fetchData = async() => {
            const { data, error } = await supabase.from('products').select().order("id")
            if(error) console.log(error)
            setEarrings(data.filter(product => product.category === "earrings").slice(0, 3))
            setNecklaces(data.filter(product => product.category === "necklace").slice(0, 3))
        }
        fetchData()
    },[])

    return(
        <section className={style.sectionCollection}>
            <p className={style.titleCollection} id="nuestra-coleccion">Nuestra colección</p>

            <section className={style.sectionVideos}>
                <div className={style.videoYoutube}>
                <iframe 
                    ref={iframeRef}
                    src="https://www.youtube.com/embed/bLyXQ_lgvcg?autoplay=1&mute=1&controls=0&loop=1&playlist=bLyXQ_lgvcg&enablejsapi=1"
                    title="Collar de flores" 
                    loading="lazy" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen>
                </iframe>

                {/* Botón para activar/desactivar sonido */}
                <button
                    onClick={toggleMute}
                    style={{
                        position: "absolute",
                        bottom: "12px",
                        right: "12px",
                        background: "rgba(0,0,0,0.6)",
                        color: "white",
                        border: "none",
                        borderRadius: "50%",
                        width: "40px",
                        height: "40px",
                        cursor: "pointer",
                        fontSize: "18px"
                    }}
                >
                    {isMuted ? "🔇" : "🔊"}
                </button>
            </div>
            <div className={style.videoYoutube}>
                <iframe 
                    src="https://www.youtube.com/embed/tNn1K3nXl50?autoplay=1&mute=1&controls=0&loop=1&playlist=tNn1K3nXl50"
                    title="Collar de flores" 
                    loading="lazy" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen>
                </iframe>
            </div>
            </section>

            <article className={style.earrings}>
                <div className={style.divEarrings}>
                    <div className={style.divEarringsTxt}>
                        <h2 className={style.category}>Aretes con mostacilla</h2>
                    </div>
                    <div className={style.divEarringsCards}>
                        {
                            earrings.map((earring, index) => {
                                if(index === 1){
                                    return (
                                        <div key={earring.id + "div"}>
                                            <div className={style.containBanner}>
                                                <h3 className={style.banner}>Las más vendidas</h3>
                                            </div>
                                            <ProductCardComponent product={earring} key={earring.id}/>
                                        </div>
                                    )
                                }
                                return <ProductCardComponent className={style.cards} product={earring} key={earring.id}/>
                            })
                        }
                    </div>
                </div>
                <div className={style.divButton}>
                    <Link className={style.vermas} href={"/products/earrings"}>Ver más</Link>
                </div>
            </article>

            <article className={style.earrings}>
                <div className={style.divEarrings}>
                    <div className={style.divEarringsTxt}>
                        <h2 className={style.category}>Collares para mujer</h2>
                    </div>
                    <div className={style.divEarringsCards}>
                        {
                            necklaces.map((necklace, index) => {
                                if(index === 1){
                                    return (
                                        <div key={necklace.id + "div"}>
                                            <div className={style.containBanner}>
                                                <h3 className={style.banner}>Último lanzamiento</h3>
                                            </div>
                                            <ProductCardComponent product={necklace} key={necklace.id}/>
                                        </div>
                                    )
                                }
                                return <ProductCardComponent className={style.cards} product={necklace} key={necklace.id}/>
                            })
                        }
                    </div>
                </div>
                <div className={style.divButton}>
                    <Link href={"/products/necklaces"} className={style.vermas}>Ver más</Link>
                </div>
            </article>

        </section>
    );
}

export default SectionColeccion