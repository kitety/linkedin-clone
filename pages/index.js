import Head from "next/head";
import Header from "../components/header";
import React from "react";
import Sidebar from "../components/sidebar";
import Feed from "../components/feed";
import { getSession, useSession } from "next-auth/react";
import { useRouter } from "next/router";

export default function Index() {
  const router = useRouter();
  // client need
  const { status } = useSession({
    required: true,
    onUnauthenticated: () => {
      router.push("/home");
    },
  });

  if (status === "loading") {
    return "Loading or not authenticated...";
  }
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
          <Feed />
        </div>
        {/* widgets */}
      </main>
    </div>
  );
}
// server need
export async function getServerSideProps(context) {
  // check is the user is logged in
  const session = await getSession(context);
  console.log("session: ", session);
  if (!session) {
    return {
      redirect: {
        permanent: false,
        destination: "/home",
      },
    };
  }
  return {
    props: {},
  };
}
