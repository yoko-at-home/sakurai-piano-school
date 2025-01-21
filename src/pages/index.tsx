import Head from "next/head";
import { HeaderBlock } from "../components/layout/header";
import type { FC, ReactNode } from "react";
import { Profile } from "../components/organisms/profile";
import { LessonSection } from "../components/organisms/lesson";
import { CourseDetail } from "../components/organisms/courseDetail/course";
import { Voices } from "../components/organisms/voices";
import { NavBarMobile } from "../components/layout/Navigation";
import { FAQ } from "../components/organisms/FAQ";
import { Fee } from "../components/organisms/fee";
import { OtherActivity } from "../components/organisms/other";
import { ContactForm } from "../components/organisms/contact";
import { Layout } from "../components/layout";

type Props = {
  className?: string;
  children: ReactNode;
  inView?: boolean;
};

const Home: FC<Props> = () => {
  return (
    <div className="relative">
      <Layout>
        <Head>
          <title>音の世界へ - 座間市のピアノ教室 櫻井ピアノスクール</title>

          <meta
            name="description"
            content="音の世界へ - 座間市のピアノ教室 櫻井ピアノスクール"
          />
          <link rel="icon" href="favicon/favicon.ico" />
        </Head>
        <NavBarMobile />
        <HeaderBlock />
        <Profile />
        <LessonSection />
        <CourseDetail />
        <Voices />
        <FAQ />
        <Fee />
        <OtherActivity />
        <ContactForm />
      </Layout>
    </div>
  );
};

export default Home;
