import { Heading2, Heading3 } from "../../atoms";

export const MapComponent = () => {
  return (
    <div className="pb-24 mx-auto text-lg text-center" id="access">
      <Heading2 type="gray">アクセス</Heading2>
      <span className="text-sm">
        ※正確な住所は
        <a href="#contact2" className="text-primary">
          お問合せ
        </a>
        ください。
      </span>
      <div className="grid grid-cols-1">
        <div className="flex flex-col py-10">
          <Heading3 type="primary">座間教室</Heading3>
          <div className="px-36 py-6 bg-primary mx-auto hidden md:block">
            <iframe
              title="座間教室"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12995.63137890937!2d139.39564073380683!3d35.481823856906175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018ff9e418d6001%3A0xfc114d0cec992102!2z44CSMjUyLTAwMjg!5e0!3m2!1sja!2sjp!4v1588646038546!5m2!1sja!2sjp"
              width="600px"
              height="450px"
              allowFullScreen
              aria-hidden="false"
              // tabIndex={0}
            />
          </div>
          <div className="md:hidden py-6 bg-primary mx-auto">
            <iframe
              title="厚木教室"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12995.63137890937!2d139.39564073380683!3d35.481823856906175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018ff9e418d6001%3A0xfc114d0cec992102!2z44CSMjUyLTAwMjg!5e0!3m2!1sja!2sjp!4v1588646038546!5m2!1sja!2sjp"
              width="370px"
              height="300px"
              frameBorder={0}
              allowFullScreen
              aria-hidden="false"
              // tabIndex={0}
            />
          </div>
          <div className="">
            座間市入谷東
            <br />
            ⭐️
            <br />
            座間駅徒歩5分
          </div>
        </div>
        <div className="flex flex-col py-10">
          <Heading3 type="primary">厚木教室</Heading3>
          <div className="px-36 py-6 bg-primary mx-auto hidden md:block">
            <iframe
              title="厚木教室の地図"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3250.976104420323!2d139.35817600000001!3d35.43062195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6019aab64dee323d%3A0xc5efbe1ba50d5eda!2z44CSMjQzLTAwMTU!5e0!3m2!1sja!2sjp!4v1588652527153!5m2!1sja!2sjp"
              width="600px"
              height="450px"
              allowFullScreen
              aria-hidden="false"
            />
          </div>
          <div className="md:hidden py-6 bg-primary mx-auto">
            <iframe
              title="厚木教室の地図（モバイル）"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3250.976104420323!2d139.35817600000001!3d35.43062195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6019aab64dee323d%3A0xc5efbe1ba50d5eda!2z44CSMjQzLTAwMTU!5e0!3m2!1sja!2sjp!4v1588652527153!5m2!1sja!2sjp"
              width="370px"
              height="300px"
              allowFullScreen
              aria-hidden="false"
            />
          </div>
          <div className="">
            厚木市南町
            <br />
            ⭐️
            <br />
            本厚木駅徒歩15分
          </div>
        </div>
      </div>
    </div>
  );
};
