import type { ReactNode } from "react";

interface Props {
  Rss?: ReactNode;
  children: ReactNode;
  ubicacion?: ReactNode;
}

export const Footer = ({ Rss, children, ubicacion }: Props) => {
  return (
    <footer className="w-full absolute -bottom-200 grid grid-cols-5 bg-yellow-400 h-75 pb-8">
      <section className="col-span-2 flex flex-col justify-end p-4">{ubicacion}</section>
      <section className="col-span-2 p-3 flex flex-col justify-end">{children}</section>
      <section className="flex justify-end items-start p-3">{Rss}</section>
    </footer>
  );
};