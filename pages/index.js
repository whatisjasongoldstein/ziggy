import Section from "../components/section";

import Base from "../components/base";
import CTA from "../components/cta";
import Hero from "../components/hero";
import Breaking from "../components/breaking";
import Photoset from "../components/photoset";
import Story from "../components/story";
import Quote from "../components/quote";

import Book from "../components/book";
import Markdown from "../components/markdown";

const Index = () => {
  return (
    <Base>
      <Hero />
      <Breaking />
      <hr />
      <Section head="First term accomplishments">
        <ul>
          <li>Protected green spaces and dog parks</li>
          <li>Cleaned up the streets (especially of pizza)</li>
          <li>
            Built close relationships with local businesses and restaurants to acquire treats and
            keep their concerns top of mind in these challenging times
          </li>
          <li>
            Promoted puppies of the highest integrity, professionalism, and nose-work in the MPD K9
            Unit to sniff out guns and end the scourge of violence*
          </li>
          <li>Replaced old racist statues with dog statues</li>
          <li>
            Peed in the Lincoln Memorial. This isn’t what it sounds like, he was paying respects to
            President Lincoln’s dog, Fido.
          </li>
        </ul>

        <small>* This is actually a real thing.</small>
      </Section>
      <Story />
      <Section shade="RED">
        <Quote attribution="The Economist">
          “We admit we were skeptical that a beagle puppy could run a city of this size and
          complexity, but Mayor Ziggy’s performance over the last few years has exceeded that of
          most public officials.”
        </Quote>
      </Section>
      <Book />
      <hr />
      <Photoset
        items={[
          {
            src: "/images/puppy-640.jpg",
            caption: "Being a puppy at his CDR foster home",
            alt: "Young Ziggy chews his bone",
            width: 640,
            height: 480,
          },
          {
            src: "/images/hard-work.jpg",
            caption: "Being the mayor is hard work.",
            width: 640,
            height: 480,
          },
          {
            src: "/images/big-bone-640.jpg",
            caption:
              "Ziggy does not shy away from America’s challenges, which, like this bone, are enormous.",
            alt: "Beagle gnawing on a bone for a much bigger dog while sitting on a 'good dogs only' pillow.",
            width: 640,
            height: 480,
          },
        ]}
      ></Photoset>

      <Photoset
        items={[
          {
            src: "/images/bbq.jpg",
            caption:
              "Mayor Ziggy took care to check in on locally owned businesses in the pandemic to make sure they were okay and still had plenty of treats.",
            alt: "Ziggy stands outside a closed restaurant",
            width: 640,
            height: 480,
          },
          {
            src: "/images/cat-640.jpg",
            caption:
              "Despite Ziggy’s best efforts to reach across the aisle, cats still want nothing to do with him.",
            width: 640,
            height: 480,
          },
        ]}
      ></Photoset>

      <hr />

      <Section head="Ziggy's Platform">
        <ul>
          <li>
            Reform the health code to allow dogs inside restaurants in order to help them recover
            from the last few years
          </li>
          <li>
            Universal Doggy Daycare for humans and puppies. Ziggy wants an economy that supports all
            families and small businesses, and especially the dogged one.
          </li>
          <li>Clemency for Squirrels</li>
          <li>DC Statehood. For real this time. No taxation without puppy representation.</li>
          <li>Make WMATA dog friendly.</li>
          <li>Convert old office buildings into dog parks to revitalize downtown.</li>
          <li>On the pandemic, follow the science. And if not, at least follow your nose.</li>
        </ul>
      </Section>

      <Section shade="BLUE" withMargin={true}>
        <Quote attribution="Muriel Bowser, DC Mayor 2015-2019">
          “Once again, I have no idea what the hell you’re talking about. Please stop calling me.”
        </Quote>
      </Section>

      <Photoset
        items={[
          {
            src: "/images/rumi.jpg",
            alt: "Ziggy plays tug-of-war with a golden retriever.",
            caption: "”Woof. Woof, woof. Woof! He's been an excellent mayor.” - Rumi, Ziggy's BFF",
            width: 640,
            height: 480,
          },
          {
            src: "/images/office-hours.jpg",
            alt: "Beagle sitting in a black chair tilting his head.",
            caption:
              "Mayor Ziggy holds office hours. He's very good at listening when he wants to be, like if there's a treat or small furry animal involved.",
            width: 640,
            height: 480,
          },
          {
            src: "/images/duck.jpg",
            alt: "Ziggy chews a purple duck.",
            caption:
              "Mayor Ziggy discusses pandemic reopening strategy with his trusted adviser, a purple duck.",
            width: 640,
            height: 480,
          },
        ]}
      />

      <Photoset
        items={[
          {
            src: "/images/suitcase.jpg",
            alt: "Ziggy sits on a suitcase, looking prepared!",
            caption: "He's floppy as hell and ready to roll!",
            width: 1200,
            height: 652,
          },
        ]}
      />

      <CTA />
    </Base>
  );
};

export default Index;
