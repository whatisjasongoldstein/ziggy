import Head from "next/head";

function GoogleAnalytics() {
  return (
    <div>
      <script
        defer
        src="https://www.googletagmanager.com/gtag/js?id=UA-90008301-5"
      ></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'UA-90008301-5');`
        }}
      ></script>
    </div>
  );
}

export default function Base(props) {
  return (
    <html lang="en">
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
      <body>
        {props.children}

        <GoogleAnalytics />
      </body>
    </html>
  );
}
