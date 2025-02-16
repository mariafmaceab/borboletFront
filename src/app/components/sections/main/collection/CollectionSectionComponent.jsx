import React from 'react'
import style from './CollectionSection.module.css'
import ProductCardComponent from '@/app/components/cards/products/ProductCardComponent'
import supabase from '@/app/database/supabase'

const SectionColeccion = async() => {

    const { data, error } = await supabase.from('products').select().order("id")

    const earrings = data.filter(product => product.category === "earrings").slice(0, 3)
    const necklaces = data.filter(product => product.category === "necklace").slice(0, 3)

    return(
        <section className={style.sectionCollection}>
            <p className={style.titleCollection}>Nuestra colección</p>
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
                                                <p className={style.banner}>Las más vendidas</p>
                                            </div>
                                            <ProductCardComponent product={earring} key={earring.id}/>
                                        </div>
                                    )
                                }
                                return <ProductCardComponent product={earring} key={earring.id}/>
                            })
                        }
                    </div>
                </div>
                <div className={style.divButton}>
                    <button className={style.vermas}>Ver más</button>
                </div>
            </article>

            <article className={style.earrings}>
                <div className={style.divEarrings}>
                    <div className={style.divEarringsTxt}>
                        <h2 className={style.category}>Collares</h2>
                    </div>
                    <div className={style.divEarringsCards}>
                        {
                            necklaces.map((necklace, index) => {
                                if(index === 1){
                                    return (
                                        <div key={necklace.id + "div"}>
                                            <div className={style.containBanner}>
                                                <p className={style.banner}>Último lanzamiento</p>
                                            </div>
                                            <ProductCardComponent product={necklace} key={necklace.id}/>
                                        </div>
                                    )
                                }
                                return <ProductCardComponent product={necklace} key={necklace.id}/>
                            })
                        }
                    </div>
                </div>
                <div className={style.divButton}>
                    <button className={style.vermas}>Ver más</button>
                </div>
            </article>

        </section>
    );
}

export default SectionColeccion