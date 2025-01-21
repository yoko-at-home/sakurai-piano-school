import { Heading3 } from "../../atoms";
import { PriceLink } from "../../atoms";

export const Kids = () => {
  return (
    <div className="mt-10 lg:mt-20" id="kids">
      <Heading3 type="gray">キッズ入門</Heading3>
      <div className="flex justify-center mx-auto">
        <table className="table-fixed text-left  max-w-screen-md divide-y-2">
          <thead>
            <tr>
              <th className="whitespace-nowrap w-1/6">クラス</th>
              <th className="w-4/6 p-2">概要</th>
              <th className="w-1/6" />
            </tr>
          </thead>
          <tbody className="group divide-y-2">
            <tr className="hover:bg-gray-100">
              <td />
              <td className="p-2 w-4/6">
                小物楽器で音楽に乗って体を動かしたり、絵の多いワークブックを使用し、
                プラス独自のキッズ用スキルも用いて楽しく音符とリズムを学びます。
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
