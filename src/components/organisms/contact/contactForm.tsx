/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-comment-textnodes */
import { Heading2, Heading3, HowToContact } from "../../atoms";
import { Form } from "./form";
import { MapComponent } from "./map";

export const ContactForm = () => {
  return (
    <div
      className="pt-20 text-center px-2 sm:px-6 mx-auto sm:text-lg max-w-screen-lg"
      id="contact"
    >
      <Heading2 type="gray">お問い合わせ・アクセス</Heading2>
      <MapComponent />
      <div className="text-left mb-20">
        <div id="contact2" />
        <Heading3 type="gray">お問い合わせ</Heading3>
        <div>
          仕事中は電話に出られないことが多いので、
          <HowToContact />
        </div>
        <div className="flex flex-col py-10">
          <div className="flex max-w-screen-md">
            <div className="w-36">LINE</div>
            <div className="w-2/3">
              <a
                href="https://line.me/ti/p/nnSoct30EZ"
                aria-label="link to LINE"
              >
                <img loading="lazy" src="img/line-address.jpg" alt="" />
              </a>
            </div>
          </div>
          <div className="flex my-6">
            <div className="w-36">携帯電話</div>
            <div className="">090-3903-1452</div>
          </div>
        </div>
        <Form />
      </div>
    </div>
  );
};
