import Head from "next/head";


export default function Base(props) {
  return (
    <>
      <Head>
        <title>Ziggy for America: Repuplican for DC Mayor</title>
        <meta charSet="utf-8" />
        <meta
          name="Description"
          content="Ziggy, a beagle, is the first puppy to become Mayor of DC."
        />
        <meta property="og:title" content="Ziggy is running for DC mayor!" />
        <meta
          property="og:description"
          content="Ziggy for America! #VoteZiggy #FloppyEars"
        />
        <meta property="og:image" content="/images/cover-1920-85.jpg" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        {props.meta}
      </Head>

      {props.children}
    </>
  );
}
