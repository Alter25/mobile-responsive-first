import Marquee from "@/components/Marquee";
import { Productos } from "@/components/data/ProductosMarquee";
import { WrapperCard } from "@/components/Cards";
import { Mensajes } from "@/components/data/carrusel";


export default function Home() {
	return (
		<section className="w-full">
			<div className="flex flex-col sm:flex-row justify-start pt-16 pb-4 sm:justify-evenly bg-hero-bg rounded-b-xl">

				<section className="flex flex-col px-6 items-center justify-center sm:items-start sm:w-180 lg:w-260">
					<h1 className="
            w-fit 
            text-4xl sm:text-5xl lg:text-6xl 
            font-semibold font-serif 
            text-brand-primary 
            leading-10 sm:leading-14 lg:leading-16 
            mb-4
          ">
						Tu tienda de confianza.
					</h1>
					<div className="flex flex-col justify-start gap-6">
						<h2 className="
              w-fit 
              text-2xl sm:text-3xl lg:text-4xl 
              text-black/60 font-bold 
              leading-8 sm:leading-9 lg:leading-12
            ">
							Donde obtienes informacion de calidad.
						</h2>
						<h3 className="text-5xl">😂</h3>
					</div>
				</section>

				<section className="flex items-center justify-center lg:ml-24">
					<img
						src="canasta.png"
						alt="canasta de abarrotes"
						className="w-80 sm:w-100 lg:w-140 xl:w-130"
					/>
				</section>

			</div>
			<div className="w-full">
				<Marquee elementos={Productos} />
			</div>
			<div className="w-full flex flex-col md:flex-row py-8 items-center sm:justify-center flex-wrap">
				{Mensajes.map((item, index) => (
					<WrapperCard key={index} title={item.content.header} text={item.content.text} name={item.name} />
				))}
			</div>
		</section>
	);
}