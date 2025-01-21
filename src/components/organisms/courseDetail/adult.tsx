import { Heading3 } from "../../atoms";
import { PriceLink } from "../../atoms";

export const Adult = () => {
  return (
    <div className="mt-10 lg:mt-20" id="adult">
      <Heading3 type="gray">成人</Heading3>

      <div className="flex justify-center mx-auto">
        <table className="table-fixed text-left  max-w-screen-md divide-y-2">
          <thead>
            <tr>
              <th className="whitespace-nowrap w-1/6">クラス</th>
              <th className="w-4/6  p-2">概要</th>
              <th className="w-1/6" />
            </tr>
          </thead>
          <tbody className="group divide-y-2">
            <tr className="hover:bg-gray-100 whitespace-normal">
              <td>ヒーリングクラス（入門〜） </td>
              <td className="p-2 w-4/6">
                成人、熟年になってから初めてピアノに挑戦される方や、昔習っていたけれど、また思い出しながらゆっくり弾きたい、という方に最適です。
              </td>
              <td className="w-1/6">
                <PriceLink type="course">料金</PriceLink>
              </td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td>スキルクラス </td>
              <td className="p-2 w-4/6">
                ピアノをずっと辞めずに続けられてきた成人の方、または中・高校生くらいまで習っていて、ブランクを経てレッスンを再開され、発表会やミニコンサート、時にはコンクールなど、積極的に参加される生徒さんのクラス。大人のピアノ会などに参加、交流を計られる方も多いクラスです。
                今までも、これからも、発表会前の弾きあい会、大人のブルグミュラーの会、大人のインヴェンションとシンフォニアの会、大人の「お菓子の世界」弾きあい会、平均律大会、小犬のワルツ大会、左手の曲大会、ソナチネを全楽章弾く会など、数々の面白い企画を催していきます。
              </td>
              <td className="w-1/6">
                <PriceLink type="course">料金</PriceLink>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
