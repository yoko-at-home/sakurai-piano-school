import cc from "classcat";
import { scroller } from "react-scroll";
import type { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
  type: "free" | "course" | "charge";
};

export const PriceLink: FC<Props> = (props) => {
  const handleClick = () => {
    scroller.scrollTo("fee", {
      duration: 300,
      smooth: true,
    });
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={cc([
        "text-[10px] text-white rounded p-1 whitespace-nowrap",
        {
          "bg-gray-100 text-gray-800": props.type === "free",
          "bg-gray-500 font-semibold": props.type === "course",
          "bg-gray-200 text-gray-800": props.type === "charge",
        },
      ])}
    >
      {props.children}
    </button>
  );
};
