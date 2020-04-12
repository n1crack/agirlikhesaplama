import React, { ReactElement } from 'react';

interface Props {
  children: Array<ReactElement>;
}

export default function Nav({ children }: Props) {
  return <ul className="flex border-b">{children}</ul>;
}
