import Head from "next/head";
import Header from "../components/header";

export default function Index() {
  console.log("index");
  return (
    <div className="bg-gray-900">
      <Head>
        <title>LinkedIn</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
    </div>
  );
}
