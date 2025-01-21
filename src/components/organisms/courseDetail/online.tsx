import { Heading3 } from "../../atoms";
import { PriceLink } from "../../atoms";

export const Online = () => {
  return (
    <div className="mt-10 lg:mt-20" id="online">
      <Heading3 type="gray">
        オンラインレッスン、及びオンライン組合せコース
      </Heading3>

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
            <tr className="hover:bg-gray-100 whitespace-normal">
              <td> </td>
              <td className="p-2 w-4/6">
                遠くて通いづらい方、足を運ぶ時間が取りづらい方などの為に新たに開設いたしました。オンラインのみ、または、何回かに一度来室レッスンとの組み合わせもできます。
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
