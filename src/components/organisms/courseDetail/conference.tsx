import { Heading3 } from "../../atoms";
import { PriceLink } from "../../atoms";

export const Conference = () => {
  return (
    <div className="mt-10 lg:mt-20 min-w-fit" id="conference">
      <Heading3 type="gray">カンファレンス</Heading3>

      <div className="my-3">ご入会に関するご相談や質問をお受けしたします。</div>
      <div className="flex  justify-center mx-auto">
        <table className="table-fixed text-left  max-w-screen-md divide-y-2">
          <thead>
            <tr>
              <th className="w-1/6">クラス</th>
              <th className="w-4/6  p-2">概要</th>
              <th className="w-1/6" />
            </tr>
          </thead>
          <tbody className="group divide-y-2">
            <tr className="hover:bg-gray-100 sm:whitespace-nowrap">
              <td>来室カンファレンス </td>
              <td className="p-2 w-4/6">
                15分〜30分。
                <br />
                少しピアノに触っていただけます。
              </td>
              <td className="w-1/6">
                <PriceLink type="free">無料</PriceLink>
              </td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td>オンラインカンファレンス </td>
              <td className="p-2 w-4/6">15分〜30分</td>
              <td className="w-1/6">
                <PriceLink type="free">無料</PriceLink>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
