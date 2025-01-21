import type { NextPage } from "next";
import { NavButton } from "../atoms";

export const HeaderBlock: NextPage = () => {
  return (
    <div
      className="h-screen relative w-full py-[8rem] bg-center bg-cover flex justify-around"
      style={{
        backgroundImage: "url('/img/bg-meguro1.webp')",
      }}
      id="page-top"
    >
      <div className="absolute h-screen w-screen bg-black/20 top-0 px-10 py-20 sm:p-20">
        <span className="text-xl md:text-2xl text-white font-mono  p-1 rounded-r text-right">
          ピアノ科が教える ピアノ教室
        </span>
        <div className="mt-5 flex flex-col justify-around text-left h-3/4">
          <h1 className="text-5xl md:text-7xl text-white font-black shadow-sm sm:bg-none whitespace-nowrap">
            音の世界へ
          </h1>
          <h3 className="text-xl md:text-2xl text-white font-bold">
            あなたの音楽旅行は 櫻井ピアノスクール とともにここから始まります。
            <br />
            貴方の目的地はどこですか？
          </h3>
          <div className="text-center mt-16">
            <NavButton href="intro">楽しさと、美しさを分かち合う</NavButton>
          </div>
        </div>
      </div>
    </div>
  );
};
