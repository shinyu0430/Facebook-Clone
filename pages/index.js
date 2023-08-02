import Head from "next/head";
import Login from "../components/Login";
import { getSession, useSession } from "next-auth/react";
import Navbar from "../components/Navbar";
import LeftSidebar from "../components/LeftSidebar";
import RightSidebar from "../components/RightSidebar";
import Feed from "../components/Feed";
import { useRouter } from "next/router";
import React, { useRef } from 'react';


export default function Home() {
  const { data: session } = useSession();
  const router = useRouter();
  const inputRef = useRef(null);

  const handlePostClick = () => {

    if (inputRef.current) {
      inputRef.current.focus();
    }

    if (inputRef.current) {
      const inputRect = inputRef.current.getBoundingClientRect();
      window.scrollTo({
        top: inputRect.top-100 + window.scrollY,
        behavior: 'smooth',
      });
    }
  };

  if (!session && !router.query.login) return <Login />;

  return (
    <>
      <Head>
        <title>Facebook</title>
        <meta name="description" content="Clone facebook project" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar />
        <LeftSidebar />
        <RightSidebar handlePostClick={handlePostClick}/>
        <Feed inputRef={inputRef}/>
      </main>
    </>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
}
