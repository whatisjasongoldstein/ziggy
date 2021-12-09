import Markdown from "../components/markdown";

import Base from "../components/base";
import CTA from "../components/cta";
import Hero from "../components/hero";
import Breaking from "../components/breaking";
import Platform from "../components/platform";
import Photoset from "../components/photoset";
import PhotoModule from "../components/photo-module";

import storyText from "../markdown/story.md";
import precedentText from "../markdown/precedent.md";
import futureText from "../markdown/future.md";


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

      <section className="c-section l-container--full">
        <Markdown>{storyText}</Markdown>
      </section>

      <Photoset
        items={[
          {
            src: "/images/puppy-640.jpg",
            caption: "Being a puppy at his CDR foster home",
            alt: "Young Ziggy chews his bone",
            width: 640,
            height: 480
          },
          {
            src: "/images/guitar-640.jpg",
            caption:
              "Ziggy has picked up guitar in his free time. He likes Bowie, obviously.",
            alt: "Beagle. Guitar. Ears. Couch. Flop flop.",
            width: 640,
            height: 480
          },
          {
            src: "/images/stick-640.jpg",
            caption:
              "Ziggy does not shy away from big challenges. It's the kind of can-chew attitude DC needs.",
            alt:
              "Little dog with a big stick. You might call it a tree branch.",
            width: 640,
            height: 480
          }
        ]}
      ></Photoset>

      <section className="c-section l-container--full u-separator">
        <Markdown>{precedentText}</Markdown>
      </section>

      <PhotoModule
        src="/images/office-hours.jpg"
        caption="Ziggy holds office hours."
        alt="Puppy sitting in a black leather chair, listening with his head tilted."
        quote="”He is excellent at hearing. Listening... depends. Which means he won’t be captive to special interests unless they happen to be golden retrievers.”"
        source="Jason, owner"
      ></PhotoModule>

      <PhotoModule
        src="/images/dacha.jpg"
        caption="Napping in one of DC's finest dog-friendly establishments."
        alt="Puppy sleeps on the pavement between benches."
        quote="”Mr. Ziggy appears confused by complex issues like Initiative 77. He seems less interested in whether restaurant workers will receive tips than whether they will bring him food, which they currently do not.”"
        source="<i>The Washington Post</i>"
        modifier="is-reverse"
      />

      <PhotoModule
        src="/images/rumi.jpg"
        quote="”Woof. Woof, woof. Woof! He'll be an excellent mayor.”"
        alt="Ziggy plays tug-of-war with a golden retriever."
        source="Rumi, Golden Puppy and Ziggy's BFF"
      />

      <PhotoModule
        src="/images/grass-640.jpg"
        quote="”What the hell are you talking about?”"
        alt="Puppy in the grass."
        caption="Ziggy plans to revitalize and expand DC's green spaces so that he can roll around in them."
        source="Muriel Bowser, DC Mayor 2015-2019"
        modifier="is-reverse"
      />

      <section className="c-section l-container--full">
        <Markdown>{futureText}</Markdown>
      </section>

      <Photoset
        items={[
          {
            src: "/images/suitcase.jpg",
            alt: "Ziggy sits on a suitcase, looking prepared!",
            caption: "Floppy as hell and ready to roll!"
          }
        ]}
      />
      <CTA />
    </Base>
  );
};

export default Index;
