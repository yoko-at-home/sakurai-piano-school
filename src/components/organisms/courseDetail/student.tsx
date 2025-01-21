import { Heading3 } from "../../atoms";
import { PriceLink } from "../../atoms";

export const Student = () => {
  return (
    <div className="mt-10 lg:mt-20" id="student">
      <Heading3 type="gray">スチューデント</Heading3>

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
              <td>初・中級 </td>
              <td className="p-2 w-4/6">
                各自にベストな教材選びを行い、効率良く、フォームやタッチを学び、曲の内容を読み解きながら音楽の楽しさをつかみ取っていきます。時にはご要望のあった曲をレベルに合わせて弾きやすく編曲させていただき、喜んでいただいています。
              </td>
              <td className="w-1/6">
                <PriceLink type="course">料金</PriceLink>
              </td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td>上級 </td>
              <td className="p-2 w-4/6">
                音楽の表現や、様々な音色の出し方、和音の様々な響きや動いていく方向性を耳と心で感じ、さらに掘り下げて曲の内容を考え音楽の奥深さ、美しさとより深く向き合います。
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
