import type { ReactNode } from "react";

interface Props {
  Rss?: ReactNode;
  children: ReactNode;
  ubicacion?: string;
}

export const Footer = ({ Rss, children, ubicacion }: Props) => {
  return (
    <footer className="w-full bg-yellow-400 h-75">
      <section>{Rss}</section>
      <section>{children}</section>
      <section>{ubicacion}</section>
    </footer>
  );
};