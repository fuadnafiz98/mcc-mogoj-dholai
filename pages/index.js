import Head from "next/head";
import Image from "next/image";

export default function Index() {
  return (
    <div className="h-screen p-6 bg-yellow-100 lg:p-12 lg:grid lg:place-content-center">
      <div className="grid place-content-center">
        <Image src="/event.jpg" width={1200} height={600} />
      </div>
    </div>
  );
}
