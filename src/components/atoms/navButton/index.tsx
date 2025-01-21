import type { FC, ReactNode } from "react";
import * as React from "react";

type Props = {
  children: ReactNode;
  href: string;
};

export const NavButton: FC<Props> = (props: Props) => {
  return (
    <a
      href={props.href}
      className="inline-block bg-primary text-white text=lg px-10 py-6 rounded font-bold hover:pointer-events-auto text-center"
    >
      {props.children}
    </a>
  );
};
