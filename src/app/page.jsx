import PrincipalSectionComponent from "@/app/components/sections/principal/PrincipalSectionComponent";
import CollectionSectionComponent from "@/app/components/sections/collection/CollectionSectionComponent";
import PicturesSectionComponent from "@/app/components/sections/pictures/PicturesSectionComponent";
import SliderSectionComponent from "@/app/components/sections/slider/SliderSectionComponent";
import ReviewsSectionComponent from "@/app/components/sections/reviews/ReviewsSectionComponent";
import BuySectionComponent from "@/app/components/sections/buys/BuySectionComponent";

export default function Home() {
  return (
    <main>
      <PrincipalSectionComponent/>
      <CollectionSectionComponent/>
      <PicturesSectionComponent/>
      <SliderSectionComponent/>
      <ReviewsSectionComponent/>
      <BuySectionComponent/>
    </main>
  );
}
