import Base from "../components/base";
import CTA from "../components/cta";
import Hero from "../components/hero";
import Breaking from "../components/breaking";
import Platform from "../components/platform";

import "../styles/site.scss";

const Index = () => {
  return (
    <Base>
      <Hero />
      <Breaking />
      <Platform
        title="Ziggy's Platform"
        items={[
          "Building more dog parks",
          "Banning discrimination against dogs, requiring all restaurants and public businesses to allow them inside",
          "Criminalizing squirrels",
          "Universal Doggy Daycare",
          "Designating Trump Hotel as an Official Pee Spot"
        ]}
      ></Platform>

      <section class="c-section l-container--full">Hello</section>

      <CTA></CTA>
    </Base>
  );
};

export default Index;
