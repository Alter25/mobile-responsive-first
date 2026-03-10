import Marquee from "@/components/Marquee";
import { Productos } from "@/lib/utils";
import { WrapperCard } from "@/components/Cards";
import { Mensajes } from "@/components/data/carrusel";
import { Footer } from "@/components/Footer";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";



export default function Home() {
	return (
		<section className="w-full h-screen">
			<div className="not-sm:flex-col flex justify-start pt-16 pb-4 md:justify-evenly bg-purple-500">
				<section className="flex flex-col not-sm:h-60 not-sm:px-6 md:px-12 items-center justify-center md:w-80 lg:w-160">
					<h1 className="w-fit text-3xl md:text-4xl lg:text-7xl not-sm:mx-auto font-semibold text-white font-serif leading-8 lg:leading-16 mb-4">Tu tienda de confianza.</h1>
					<h2 className="w-fit text-2xl md:text-3xl lg:text-4xl text-black/60 font-bold leading-8 md:leading-9 lg:leading-12"> Donde obtienes informacion de calidad.</h2>
					<h3 className="text-7xl text-left not-sm:-ml-70 not-sm:mt-4 lg:-ml-118 md:-ml-36 md:mt-4 lg:mt-4 ">😂</h3>
				</section>
				<section className="lg:ml-24">
					<img src="canasta.png" alt="canasta de abarrotes" className="m-auto not-sm:w-80 not-sm:-translate-x-2 md:w-120 lg:w-140" />
				</section>
			</div>
			<div className="w-full">
				<Marquee elementos={Productos} />
			</div>
			<div className="w-full flex flex-col md:flex-row h-fit py-8 items-center justify-center gap-12 overflow-x-scroll">
				{
					Mensajes.map((item, index) => (
						<WrapperCard key={index} title={item.content.header} text={item.content.text} name={item.name} />
					))
				}
				{/* sera que aqui ponga articulos sobre algo? no lo se aun */}
			</div>
			<Footer
				Rss={<div className="flex flex-col justify-evenly h-full">
					<FaWhatsapp size={48} />
					<FaInstagram size={48} />
					<FiPhone size={40} />
				</div>}
				ubicacion={
					<div>
						<h2 className="flex text-2xl">Gomez Palacio, Dgo.<span><IoLocationSharp size={24} /></span></h2>
						<p></p>
					</div>
				}
			>
				<div>
					<p className="text-3xl">Todos los derechos reservados. &copy;</p>
				</div>
			</Footer>
		</section>
	);
};