import React from "react";
import { Heading2, Heading3 } from "../../atoms";

export const ProfileMain = () => {
  return (
    <div
      className="text-center mx-auto w-screen sm:text-lg py-36 bg-gray-700/20"
      id="profile-main"
    >
      <div className="mt-6 mb-8 text-left p-5 sm:p-10 lg:p-20 text-white max-w-4xl shadow-black">
        <Heading2 type="white"> 講師プロフィール</Heading2>
        <Heading3 type="white"> 櫻井桂子（さくらいけいこ）</Heading3>
        国立音楽大学附属音楽高校を経て国立音楽大学器楽学科ピアノ専攻卒業。
        <br />
        佐藤優子、平沢美知、藤澤克江各師に師事。
        <br />
        神奈川新人演奏会、イイノホールジョイントリサイタル、モーツァルトコンチェルトシリーズコンサート、厚木市文化会館ピアノデュオリサイタル、ハーモニーホール座間ジャズフェスティバルほか多数出演。
        <br />
        ⭐️
        <br />
        現在、ピアノ指導のほかに、合唱団・声楽伴奏ピアニスト、作編曲活動（県内数箇所の高齢者体操曲や、絵本朗読コンサート曲等作曲）を行う。
        <br />
        1987ピティナコンペティションにて姉妹デュオにてアンサンブル賞を受ける。
        <br />
        全日本ピアノ指導者協会【正会員】。座間市演奏家連盟会員・ピアノ部会チーフ。ヤマハ認定講師。芸術学士。一般財団法人日本キッズコーチング協会認定キッズコーチングアドバイザー。育脳ピアノレッスンの教科書認定教室。ブルグミュラーレッスン賞受賞。
      </div>
    </div>
  );
};
