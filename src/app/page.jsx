import PrincipalSectionComponent from "@/components/sections/main/principal/PrincipalSectionComponent";
import CollectionSectionComponent from "@/components/sections/main/collection/CollectionSectionComponent";
import PicturesSectionComponent from "@/components/sections/main/pictures/PicturesSectionComponent";
import SliderSectionComponent from "@/components/sections/main/slider/SliderSectionComponent";
import ReviewsSectionComponent from "@/components/sections/main/reviews/ReviewsSectionComponent";
import BuySectionComponent from "@/components/sections/main/buys/BuySectionComponent";

export default function Home() {
  return (
    <>
    <PrincipalSectionComponent/>
    <CollectionSectionComponent/>
    <PicturesSectionComponent/>
    <SliderSectionComponent/>
    <ReviewsSectionComponent/>
    <BuySectionComponent/>
    </>
  );
}
