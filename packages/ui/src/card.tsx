import { type ReactNode } from "react";

export function Card({
  title,
  children,
  href,
}: {
  title: string;
  children: ReactNode;
  href: string;
}): JSX.Element {
  return <div className="bg-white shadow-md rounded-lg p-4">testtttt card</div>;
}
