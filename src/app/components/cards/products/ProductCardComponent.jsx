import React from 'react'
import style from './ProductCard.module.css'

const ProductCardComponent = ({product}) => {
  return (
    <article className={style.card}>
        <div className={style.cardImg}>
            <img src={product.image} className={style.imgproducto} alt="imagenArete"/>
        </div>
        <div className={style.cardDescripcion}>
            <p className={style.tituloProducto}>{product.name}</p>
            <button className={style.cestaCard}>
              <a className={style.linkCesta} href=""><img src="CarCollection.svg" className={style.imgcestacard} alt="CarritoDeCompras"/></a>
            </button>
        </div>
        <p className={style.precioProducto}>{product.price}</p>
    </article>
  )
}

export default ProductCardComponent