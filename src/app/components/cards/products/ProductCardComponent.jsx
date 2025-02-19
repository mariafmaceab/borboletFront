import React from 'react'
import style from './ProductCard.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { useCart } from '@/app/context/cartcontext';
import COP from '@/app/utils/utils';

const ProductCardComponent = ({className, product}) => {

  const { addToCart } = useCart();
  
  return (
      <article className={`${style.card}  ${className}`}>
        <Link href={`/products/${product.id}`}>
          <div className={style.cardImg}>
              <Image src={product.image} className={style.imgproducto} alt="imagenArete" width={375} height={500} loading='lazy' blurDataURL={product.image} placeholder='blur'/>
          </div>
          <div className={style.cardDescripcion}>
              <p className={style.tituloProducto}>{product.name}</p>
              <button className={style.cestaCard} onClick={() => addToCart(product, 1)}>
                <p className={style.linkCesta}><Image src="/CarCollection.svg" className={style.imgcestacard} alt="CarritoDeCompras" width={20} height={20}/></p>
              </button>
          </div>
          <p className={style.precioProducto}>{COP.format(product.price)}</p>
        </Link>
      </article>
    
  )
}

export default ProductCardComponent