import type { ProductsType } from "@/types/Types"

interface Props {
  imageUrl?: string;
  name?: string;
  title?: string;
  text?: string;
}
// reach out

export function ProductCard({ item }: { item: ProductsType }) {
  return <article className="max-w-52 min-w-44 p-2 border-3 rounded-3xl m-2 bg-blue-200 border-violet-500 flex flex-col justify-between">
    <div className="w-22 m-auto">
      <img src={item.other?.imgUrl} alt={item.name} />
    </div>
    <div className="w-full bg-indigo-500 rounded-2xl p-2 mt-1">
      <h4>{item.name} <span className="text-green-400">$ <span>{item.precio}</span></span></h4>
      <p>cantidad: <span>{item.cantidad}</span></p>
    </div>
  </article>
}

export const Articulo = ({ imageUrl, name }: Props) => {
  return <article className=" w-20 md:w-24 2xl:w-48 flex justify-center items-center mx-16 drop-shadow-xl">
    <img src={imageUrl} alt={name} />
  </article>
}

export const WrapperCard = ({ title, text, name }: Props) => {
  return <article className="max-w-2xs min-w-80 min-h-80 bg-card-bg flex flex-col justify-center items-center m-4 py-4 border border-slate-200 rounded-lg drop-shadow-xl">
    <div className="px-5 py-2 mb-2">
      <h1 className="text-3xl text-ui-text">{title}</h1>
    </div>
    <div className="p-2 m-auto w-[80%]">
      <p className="text-xl text-ui-text">{text}</p>
      <span className="text-lg font-semibold ">{name}</span>
    </div>
  </article>
}


export default function Card({ imageUrl, name }: Props) {
  return <Articulo imageUrl={imageUrl} name={name} />
}