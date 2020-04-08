import React, { ReactElement } from "react";

interface Props {
  children: any;
  onClick: any;
}

export default function NavItem({ children, onClick }: Props): ReactElement {
  const handleClick = (e: any) => {
    e.preventDefault();
    onClick(e);
  };

  return (
    <li className="mr-1">
      <a
        onClick={(e) => handleClick(e)}
        className="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold"
        href="#/"
      >
        {children}
      </a>
    </li>
  );
}
