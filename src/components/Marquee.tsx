import type { GroceryItemType } from "@/types/Types";
import Card from "./Card";


interface Props {
  elementos: GroceryItemType[];
}

export default function Marquee({ elementos }: Props) {
  return <article className="w-full overflow-hidden">
    <section className="w-[100vw] flex justify-between">
      {
        elementos.map((item, index) => {
          return <Card key={index} name={item.name} imageUrl={item.imageUrl} />
        })
      }
    </section>

  </article>
}