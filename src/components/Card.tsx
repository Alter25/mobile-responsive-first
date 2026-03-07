
interface Props {
  imageUrl: string;
  name: string;
}

export default function Card({ imageUrl, name }: Props) {
  return <article>
    <img className="w-12 sm:w-24" src={imageUrl} alt={name} />
  </article>
}