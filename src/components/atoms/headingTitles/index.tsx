import cc from "classcat";
import type { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
  type: "white" | "gray" | "primary";
};

export const Heading2: FC<Props> = (props) => {
  return (
    <div className="text-3xl lg:text-5xl text-center mb-10 sm:mb-16">
      <h2
        className={cc([
          "font-bold tracking-wide font-sans",
          {
            "text-white": props.type === "white",
            "text-gray-800": props.type === "gray",
            "text-primary": props.type === "primary",
          },
        ])}
      >
        {props.children}
      </h2>
    </div>
  );
};
export const Heading3: FC<Props> = (props) => {
  return (
    <div className="text-2xl lg:text-3xl text-center mb-6 sm:mb-8">
      <h3
        className={cc([
          "font-bold tracking-wide font-sans",
          {
            "text-white": props.type === "white",
            "text-gray-800": props.type === "gray",
            "text-primary": props.type === "primary",
          },
        ])}
      >
        {props.children}
      </h3>
    </div>
  );
};
