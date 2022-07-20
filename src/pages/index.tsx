import type { NextPage } from "next";
import Head from "next/head";
import { HeaderBlock } from "../components/header";

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeaderBlock />
    </div>
  );
};

export default Home;
