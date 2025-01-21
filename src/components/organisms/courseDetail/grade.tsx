import { Heading3 } from "../../atoms";
import { PriceLink } from "../../atoms";

export const Grade = () => {
  return (
    <div className="mt-10 lg:mt-20" id="grade">
      <Heading3 type="gray">グレード・検定・コンクール受験コース</Heading3>

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
                希望がありました生徒さん用に、通常レッスンの時間枠に加算して受験準備用にさらに細かく、時間をかけてレッスンを行うコースです。
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
