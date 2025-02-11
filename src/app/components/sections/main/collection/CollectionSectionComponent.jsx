import React from 'react'
import style from './CollectionSection.module.css'
import ProductCardComponent from '@/app/components/cards/products/ProductCardComponent'
import supabase from '@/app/database/supabase'

const SectionColeccion = async() => {

    const { data, error } = await supabase.from('products').select()

    const earrings = data.filter(product => product.category === "earrings").slice(0, 3)
    const necklaces = data.filter(product => product.category === "necklace").slice(0, 3)

    return(
        <section className={style.sectionCollection}>
            <p className={style.titleCollection}>Nuestra colección</p>
            <article className={style.earrings}>
                <div className={style.divEarrings}>
                    <h2 className={style.category}>Aretes con mostacilla</h2>
                    {
                        earrings.map((earring, index) => {
                            if(index === 1){
                                return (
                                    <div>
                                        <p>Las más vendidas</p>
                                        <ProductCardComponent product={earring}/>
                                    </div>
                                )
                            }
                            return <ProductCardComponent product={earring}/>
                        })
                    }
                </div>
                <div className={style.divButton}>
                    <button className={style.vermas}>Ver más</button>
                </div>
            </article>

            <article className={style.earrings}>
                <div className={style.divEarrings}>
                    <h2 className={style.category}>Collares</h2>
                    {
                        necklaces.map((necklace, index) => {
                            if(index === 1){
                                return (
                                    <div>
                                        <p>Último lanzamiento</p>
                                        <ProductCardComponent product={necklace}/>
                                    </div>
                                )
                            }
                            return <ProductCardComponent product={necklace}/>
                        })
                    }
                </div>
                <div className={style.divButton}>
                    <button className={style.vermas}>Ver más</button>
                </div>
            </article>

        </section>
    );
}

export default SectionColeccion