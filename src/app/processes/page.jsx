import React from 'react'
import style from './style.module.css'
import Link from 'next/link'
import Image from 'next/image'

const ProcessesPage = () => {
  return (
    <main>
      <section className={style.sectionProcesos}>
        <h1 className={style.tituloProcesos}>¿Cómo hacemos nuestros accesorios en mostacilla?</h1>
        <h2 className={style.txtProcesos}>Usamos materiales de excelente calidad: Aros en golfi, topos en
          bronce con baño de oro y mostacilla checa, la protagonista en Borbolet.</h2>
        <hr className={style.linea} />
        <h1 className={style.tituloProcesos}>¿Por qué usar mostacilla checa?</h1>
        <div className={style.divProcesos}>
          <Image className={style.imgMostacilla} width={450} height={300} alt='Imagen de manos haciendo aretes de mostacilla' src="https://img.freepik.com/foto-gratis/surtido-herramientas-elementos-sastreria-alto-angulo_23-2148707965.jpg?t=st=1738790667~exp=1738794267~hmac=8588ebeab0c93beff1901e1b7320a0f1ae461639e3d83de0874771d1df0831bf&w=2000" />
          <h2 className={style.txtProcesos}>~ Las mostacillas checas son conocidas mundialmente por su calidad,
            aseguran una durabilidad superior<br />
            ~ En las mostacillas checas encontramos gran variedad de colores y efectos
            (mate, brillante, tornasolado, etc) Esto permite crear accesorios personalizados y variados<br />
            ~ La mostacilla checa es resistente al desgaste y a la humedad; por eso te garantizamos
            la funcionalidad de los accesorios a lo largo del tiempo
          </h2>
        </div>
        <hr className={style.linea} />
        <p className={`${style.tituloProcesos} ${style.item1}`}>¿Cuánto tiempo invertimos en nuestros accesorios?</p>
        <p className={style.txtProcesos}>Cada pieza lleva un día completo de trabajo, desde seleccionar cuidadosamente
          las mostacillas hasta dar vida al diseño con presición y detalle
        </p>
        <div className={style.videoYoutube}>
          <iframe width="365" 
          height="727" 
          src="https://www.youtube-nocookie.com/embed/Bcxgm_-hkmo"
          title="Mariposa blanco y dorado" loading="lazy" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerPolicy="strict-origin-when-cross-origin" 
          allowFullScreen></iframe>
        </div>
        <p className={`${style.txtProcesos} ${style.txt1}`}>Es un arte que requiere de paciencia, dedicación y especialmente de pasión</p>
        <div className={style.divbtnComprar}>
          <Link href="/products/earrings" className={style.btnComprar}>¡Quiero las mías!</Link>
        </div>
      </section>
    </main>
  )
}

export default ProcessesPage