import React from 'react';

interface Props {
  children: string;
  onClick: (e: React.MouseEvent) => void;
  selected: boolean;
}

export default function NavItem({ children, onClick, selected }: Props) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onClick(e);
  };

  return (
    <li className="mr-1">
      <a
        onClick={(e) => handleClick(e)}
        className={`bg-white inline-block py-2 px-4 hover:text-red-500 font-semibold ${
          selected ? ' text-red-500' : ' text-blue-500'
        }`}
        href="#/"
      >
        {children}
      </a>
    </li>
  );
}
