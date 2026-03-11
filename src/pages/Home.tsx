import Marquee from "@/components/Marquee";
import { Productos } from "@/lib/utils";
import { WrapperCard } from "@/components/Cards";
import { Mensajes } from "@/components/data/carrusel";


export default function Home() {
	return (
		<section className="w-full h-screen">
			<div className="not-sm:flex-col flex justify-start pt-16 pb-4 md:justify-evenly bg-purple-500">
				<section className="ml-1 flex flex-col not-sm:h-60 not-sm:px-6 items-center justify-center md:w-180 lg:w-260 border">
					<h1 className="w-fit text-4xl md:text-5xl lg:text-6xl font-semibold text-white font-serif leading-10 sm:leading-14 lg:leading-16 mb-4 lg:-translate-x-8">Tu tienda de confianza.</h1>
					<div className="flex flex-col justify-start gap-6">
						<h2 className="w-fit text-2xl md:text-3xl lg:text-4xl text-black/60 font-bold leading-8 md:leading-9 lg:leading-12"> Donde obtienes informacion de calidad.</h2>
						<h3 className="text-5xl">😂</h3>
					</div>
				</section>
				<section className="lg:ml-24">
					<img src="canasta.png" alt="canasta de abarrotes" className="m-auto w-80 -translate-x-2 sm:w-100 md:w-100 lg:w-140 xl:w-130" />
				</section>
			</div>
			<div className="w-full">
				<Marquee elementos={Productos} />
			</div>
			<div className="w-full flex flex-col md:flex-row py-8 items-center sm:justify-center flex-wrap">
				{
					Mensajes.map((item, index) => (
						<WrapperCard key={index} title={item.content.header} text={item.content.text} name={item.name} />
					))
				}
			</div>
		</section>
	);
};