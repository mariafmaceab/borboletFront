import dynamic from "next/dynamic";
import style from "./page.module.css";
import PrincipalSectionComponent from "@/app/components/sections/principal/PrincipalSectionComponent";

const CollectionSectionComponent = dynamic(() =>
  import("./components/sections/collection/CollectionSectionComponent")
);
const PicturesSectionComponent = dynamic(() =>
  import("./components/sections/pictures/PicturesSectionComponent")
);
const SliderSectionComponent = dynamic(() =>
  import("./components/sections/slider/SliderSectionComponent")
);
const ReviewsSectionComponent = dynamic(() =>
  import("./components/sections/reviews/ReviewsSectionComponent")
);
const BuySectionComponent = dynamic(() =>
  import("./components/sections/buys/BuySectionComponent")
);

export default function Home() {
  return (
    <main>
      <PrincipalSectionComponent/>
      <CollectionSectionComponent/>
      <PicturesSectionComponent/>
      <SliderSectionComponent/>
      <ReviewsSectionComponent/>
      <BuySectionComponent/>
      {/* Botón flotante de WhatsApp */}
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
    </main>
  );
}
