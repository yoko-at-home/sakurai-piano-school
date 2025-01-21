import { Heading3 } from "../../atoms";
import { PriceLink } from "../../atoms";

export const Other = () => {
  return (
    <div className="mt-10 lg:mt-20" id="other">
      <Heading3 type="gray">その他</Heading3>

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
              <td> </td>
              <td className="p-2 w-4/6">
                親子レッスン、ご友人同士の連弾レッスン、ソルフェージュコース、音大受験サポートなど、様々なご要望にお応え致します。
              </td>
              <td className="w-1/6">
                <PriceLink type="course">料金</PriceLink>
              </td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td> </td>
              <td className="p-2 w-4/6">
                伴奏については、直接お問い合わせいただくか、
                <a
                  className="text-primary"
                  href="https://www.piano.or.jp/concert/accompaniment/bansousha-list.html"
                  rel="noreferrer"
                  target="_blank"
                >
                  ピティナの伴奏者紹介サイト
                </a>
                をご参照ください。
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
