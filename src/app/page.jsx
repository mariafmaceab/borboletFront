import dynamic from "next/dynamic";

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
    </main>
  );
}
