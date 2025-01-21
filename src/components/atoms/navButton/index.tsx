import type { FC, ReactNode } from "react";
import * as React from "react";
import { scroller } from "react-scroll";

type Props = {
  children: ReactNode;
  href: string;
};

export const NavButton: FC<Props> = (props: Props) => {
  const handleClick = () => {
    scroller.scrollTo(props.href, {
      duration: 300,
      smooth: true,
    });
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="inline-block bg-primary text-white text=lg px-10 py-6 rounded font-bold hover:pointer-events-auto text-center cursor-pointer"
    >
      {props.children}
    </button>
  );
};
