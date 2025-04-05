import type { NextPage } from "next";
import { Layout } from "../components/layout";
import { YouTubeTile } from "../components/molecules/youtube";
import { Heading2 } from "../components/atoms";
import Head from "next/head";

const YouTubePage: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>桂子の音の世界 - 座間市のピアノ教室 櫻井ピアノスクール</title>
      </Head>
      <div className="mx-auto mt-6">
        <Heading2 type="primary">桂子の音の世界</Heading2>
        <div className="container mt-20">
          <YouTubeTile />
        </div>
      </div>
    </Layout>
  );
};

export default YouTubePage;
