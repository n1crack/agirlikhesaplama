import React from "react";

interface Props {
  children: any;
}

export default function Nav({ children }: Props) {
  return <ul className="flex border-b">{children}</ul>;
}
