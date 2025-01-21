import type { FC, ReactNode } from "react";
import * as React from "react";

type Props = {
  children: ReactNode;
  href: string;
};

export const ButtonNav: FC<Props> = (props) => {
  return (
    <a
      href={props.href}
      // to={props.href}
      // smooth
      // duration={300}
      className="inline-block bg-primary text-white text=lg px-10 py-6 rounded font-bold hover:pointer-events-auto"
    >
      {props.children}
    </a>
  );
};
