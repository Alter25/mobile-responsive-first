
interface Props {
  imageUrl?: string;
  name?: string;
  title?: string;
  text?: string;
}


export const Articulo = ({ imageUrl, name }: Props) => {
  return <article className=" w-20 md:w-24 2xl:w-48 flex justify-center items-center mx-16">
    <img src={imageUrl} alt={name} />
  </article>
}

export const WrapperCard = ({ title, text, name }: Props) => {
  return <article className="max-w-2xs min-w-80 min-h-80 bg-slate-500 flex flex-col justify-center items-center m-4 py-4 border rounded-lg">
    <div className="px-5 py-2 mb-2">
      <h1 className="text-3xl">{title}</h1>
    </div>
    <div className="p-2 m-auto w-[80%]">
      <p className="text-xl">{text}</p>
      <span className="text-lg font-semibold ">{name}</span>
    </div>
  </article>
}


export default function Card({ imageUrl, name }: Props) {
  return <Articulo imageUrl={imageUrl} name={name} />
}