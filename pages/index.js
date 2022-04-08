import Head from "next/head";
import Header from "../components/header";
import React from "react";
import Sidebar from "../components/sidebar";
import Feed from "../components/feed";
import { getSession, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Modal from "../components/modal";
import { AnimatePresence } from "framer-motion";
import { modalState, modalTypeState } from "../atoms/modalAtoms";
import { useRecoilState } from "recoil";
import { connectToDatabase } from "../util/mongodb";

export default function Index({ posts }) {
  console.log("posts: ", posts);
  const [modalOpen, setModalOpen] = useRecoilState(modalState);
  const [modalType, setModalType] = useRecoilState(modalTypeState);
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
          <Feed posts={posts} />
        </div>
        {/* widgets */}
        <AnimatePresence>
          {modalOpen && (
            <Modal handleClose={() => setModalOpen(false)} type={modalType} />
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
// server need
export async function getServerSideProps(context) {
  // check is the user is not authenticated
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
  // authenticated
  // get Posts from ssr
  const { db } = await connectToDatabase();
  const posts = await db
    .collection("posts")
    .find()
    .sort({ timestamp: -1 })
    .toArray();

  return {
    props: {
      posts: posts.map((post) => ({
        _id: post._id.toString(),
        input: post.input,
        photoUrl: post.photoUrl,
        username: post.username,
        email: post.email,
        userImg: post.userImg,
        createdAt: post.createdAt,
      })),
    },
  };
}
