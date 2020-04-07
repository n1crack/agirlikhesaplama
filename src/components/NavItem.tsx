import React, { ReactElement } from "react";

interface Props {
  children: any;
}

export default function NavItem({ children }: Props): ReactElement {
  return (
    <li className="mr-1">
      <a
        className="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold"
        href="#/"
      >
        {children}
      </a>
    </li>
  );
}
