import Head from "next/head";
import Image from "next/image";

export default function Index() {
  return (
    <div>
      <Head>
        <title>Mogoj Dholai</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        <meta property="og:title" content="Mogoj Dholai" />
        <meta
          property="og:description"
          content="Mogoj Dholai Organized By MCC"
        />
        <meta property="og:image" content="/event.jpg" />
        <meta property="og:url" content="https://mcc.vercel.app" />

        <meta property="og:site_name" content="Mogoj Dholai" />
        <meta name="twitter:image:alt" content="Mogoj Dholai Event" />
      </Head>
      <div className="h-screen p-6 bg-yellow-100 lg:p-12 lg:grid lg:place-content-center">
        <div className="grid place-content-center">
          <Image src="/event.jpg" width={1200} height={600} />
        </div>
      </div>
    </div>
  );
}
