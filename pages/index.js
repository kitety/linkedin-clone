import Head from "next/head";
import Header from "../components/header";
import React from "react";
import Sidebar from "../components/sidebar";

export default function Index() {
  console.log("index");
  return (
    <div className="bg-[#f3f2ef] dark:bg-black dark:text-white h-screen overflow-y-scroll md:space-y-6">
      <Head>
        <title>Feed | LinkedIn</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="flex justify-center gap-x-5 px-4 sm:px-12">
        <div className="flex flex-col md:flex-row gap-x-5 gap-5">
          {/* sidebar */}
          <Sidebar />
          {/* feed */}
        </div>
        {/* widgets */}
      </main>
    </div>
  );
}
