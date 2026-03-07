
interface Props {
  imageUrl: string;
  name: string;
}

export default function Card({ imageUrl, name }: Props) {
  return <article className=" w-20 md:w-24 2xl:w-48 flex justify-center items-center mx-16">
    <img src={imageUrl} alt={name} />
  </article>
}