import { Heading3 } from "../../atoms";
import { PriceLink } from "../../atoms";

export const Trial = () => {
  return (
    <div className="mt-10 lg:mt-20">
      <Heading3 type="gray">体験レッスン</Heading3>

      <div className="flex justify-center mx-auto" id="trial">
        <table className="table-fixed text-left  min-w-screen-md divide-y-2">
          <thead>
            <tr>
              <th className="whitespace-nowrap w-1/6">クラス</th>
              <th className="w-4/6  p-2">概要</th>
              <th className="w-1/6" />
            </tr>
          </thead>
          <tbody className="group divide-y-2">
            <tr className="hover:bg-gray-100 sm:whitespace-nowrap p-2">
              <td>来訪体験レッスン</td>
              <td className="p-2">
                １レッスン（30分）
                <br /> <hr />
                １ヶ月体験レッスン（30分×3回）
              </td>
              <td>
                <PriceLink type="charge">2000円</PriceLink>
                <br />
                <PriceLink type="charge">6000円</PriceLink>
              </td>
            </tr>
            <tr className="hover:bg-gray-100 sm:whitespace-nowrap p-2">
              <td>オンライン体験レッスン</td>
              <td className="p-2">
                １レッスン（30分）
                <br /> <hr />
                １ヶ月体験レッスン（30分×3回）
              </td>
              <td>
                <PriceLink type="charge">2000円</PriceLink>
                <br />
                <PriceLink type="charge">6000円</PriceLink>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mt-6">
        ※有料体験を受けられた方には、入会金の割引があります。
      </div>
    </div>
  );
};
