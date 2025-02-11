import PrincipalSectionComponent from "@/app/components/sections/main/principal/PrincipalSectionComponent";
import CollectionSectionComponent from "@/app/components/sections/main/collection/CollectionSectionComponent";
import PicturesSectionComponent from "@/app/components/sections/main/pictures/PicturesSectionComponent";
import SliderSectionComponent from "@/app/components/sections/main/slider/SliderSectionComponent";
import ReviewsSectionComponent from "@/app/components/sections/main/reviews/ReviewsSectionComponent";
import BuySectionComponent from "@/app/components/sections/main/buys/BuySectionComponent";

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
