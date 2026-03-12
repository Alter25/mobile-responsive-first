import type { ProductsType } from "@/types/Types";
import Marquee from "react-fast-marquee";
import Articulo from "./Cards";


interface Props {
  elementos: ProductsType[];
}
const MarqueeComponent = (Marquee as any).default || Marquee;

export default function MyMarquee({ elementos }: Props) {
  return <section className="w-screen overflow-hidden bg-indigo-400 py-4">
    <MarqueeComponent
      gradient={false}
      gradientColor="white"
      gradientWidth={40}
      speed={50}
      pauseOnHover={true}
      className="flex justify-between"
    >
      {
        elementos.map((item, index) => {
          return <Articulo key={index} name={item.name} imageUrl={item.other?.imgUrl} />
        })
      }
    </MarqueeComponent>
  </section>
}