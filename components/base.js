import Head from "next/head";

export default function Base(props) {
  return (
    <>
      <Head>
        <title>Ziggy for America: re-elect this dog to mayor of DC!</title>
        <meta charSet="utf-8" />
        <meta name="Description" content="Re-elect Mayor Ziggy, the first puppy mayor of DC!" />
        <meta property="og:title" content="Re-elect Mayor Ziggy" />
        <meta property="og:description" content="Ziggy for America! #VoteZiggy #FloppyEars" />
        <meta property="og:image" content="/images/cover-1920-85.jpg" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        {props.meta}
      </Head>

      {props.children}
    </>
  );
}
