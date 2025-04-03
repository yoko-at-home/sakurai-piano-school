import type { NextPage } from "next";
import { Head, Html, Main, NextScript } from "next/document";
const MyDocument: NextPage = () => {
  return (
    <Html lang="ja">
      <Head>
        <meta charSet="utf-8" />
        {/* <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        /> */}
        {/* <!-- Primary Meta Tags --> */}
        <meta
          name="title"
          content="音の世界へ - 座間市のピアノ教室 櫻井ピアノスクール"
        />
        <meta
          name="description"
          content="座間市のピアノ教室 櫻井ピアノスクールのご案内。音楽を通してワクワクすること。みんなが楽しくなることをプロデュースすること。音楽への情熱を楽しさにすること。これらを最も大切なことと考え、日々レッスンに当たらさせていただいています。"
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.sakuraipiano.com/" />
        <meta
          property="og:title"
          content="音の世界へ - 座間市のピアノ教室 櫻井ピアノスクール"
        />
        <meta
          property="og:description"
          content="座間市のピアノ教室 櫻井ピアノスクールのご案内。音楽を通してワクワクすること。みんなが楽しくなることをプロデュースすること。音楽への情熱を楽しさにすること。これらを最も大切なことと考え、日々レッスンに当たらさせていただいています。"
        />
        <meta
          property="og:image"
          content="https://www.sakuraipiano.com/img/twitter-ogp.webp"
        />
        <meta
          property="og:image:secure_url"
          content="https://www.sakuraipiano.com/img/twitter-ogp.webp"
        />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="675" />
        <meta property="og:image:alt" content="Sakurai Piano School" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.sakuraipiano.com/" />
        <meta
          property="twitter:title"
          content="音の世界へ - 座間市のピアノ教室 櫻井ピアノスクール"
        />
        <meta
          property="twitter:description"
          content="座間市のピアノ教室 櫻井ピアノスクールのご案内。音楽を通してワクワクすること。みんなが楽しくなることをプロデュースすること。音楽への情熱を楽しさにすること。これらを最も大切なことと考え、日々レッスンに当たらさせていただいています。"
        />
        <meta
          property="twitter:image"
          content="https://www.sakuraipiano.com/img/twitter-ogp.webp"
        />
        <meta name="twitter:image:width" content="1200" />
        <meta name="twitter:image:height" content="630" />
        <meta name="author" content="Yoko Iwasaki" />
        <meta
          name="msapplication-square70x70logo"
          content="/favicon/site-tile-70x70.png"
        />
        <meta
          name="msapplication-square150x150logo"
          content="/favicon/site-tile-150x150.png"
        />
        <meta
          name="msapplication-wide310x150logo"
          content="/favicon/site-tile-310x150.png"
        />
        <meta
          name="msapplication-square310x310logo"
          content="/favicon/site-tile-310x310.png"
        />
        <meta name="msapplication-TileColor" content="#0078d7" />
        <link
          rel="shortcut icon"
          type="image/vnd.microsoft.icon"
          href="/favicon/favicon.ico"
        />
        <link
          rel="icon"
          type="image/vnd.microsoft.icon"
          href="/favicon/favicon.ico"
        />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/favicon/apple-touch-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/favicon/apple-touch-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/favicon/apple-touch-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/favicon/apple-touch-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/favicon/apple-touch-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/favicon/apple-touch-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/favicon/apple-touch-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/favicon/apple-touch-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="36x36"
          href="/favicon/android-chrome-36x36.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="48x48"
          href="/favicon/android-chrome-48x48.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="72x72"
          href="/favicon/android-chrome-72x72.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon/android-chrome-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="128x128"
          href="/favicon/android-chrome-128x128.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="144x144"
          href="/favicon/android-chrome-144x144.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="152x152"
          href="/favicon/android-chrome-152x152.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/favicon/android-chrome-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="256x256"
          href="/favicon/android-chrome-256x256.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="384x384"
          href="/favicon/android-chrome-384x384.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="512x512"
          href="/favicon/android-chrome-512x512.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="36x36"
          href="/favicon/icon-36x36.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="48x48"
          href="/favicon/icon-48x48.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="72x72"
          href="/favicon/icon-72x72.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon/icon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="128x128"
          href="/favicon/icon-128x128.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="144x144"
          href="/favicon/icon-144x144.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="152x152"
          href="/favicon/icon-152x152.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="160x160"
          href="/favicon/icon-160x160.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/favicon/icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="196x196"
          href="/favicon/icon-196x196.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="256x256"
          href="/favicon/icon-256x256.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="384x384"
          href="/favicon/icon-384x384.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="512x512"
          href="/favicon/icon-512x512.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/icon-16x16.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="24x24"
          href="/favicon/icon-24x24.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/icon-32x32.png"
        />
        <link rel="manifest" href="/favicon/manifest.json" />
        <link rel="canonical" href="https://www.sakuraipiano.com/" />
        <meta
          name="google-site-verification"
          content="lOZ0gGomD4MYc0axD9rJa-DOUM4psUWJhNWKn6-zLnk"
        />
      </Head>
      <body className="antialiased text-black bg-white">
        <Main />
        <div id="root" />
        <NextScript />
      </body>
    </Html>
  );
};

export default MyDocument;
