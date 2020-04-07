import React, { ReactElement } from "react";

interface Props {
  children: any;
}

export default function Nav({ children }: Props): ReactElement {
  return <ul className="flex border-b">{children}</ul>;
}
