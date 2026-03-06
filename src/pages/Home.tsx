

export default function Home() {
	return (
		<section className="w-full h-screen bg-olive-300">
			<div className="not-sm:flex-col flex justify-start py-12 bg-purple-500">
				<section className="flex flex-col not-sm:h-60 not-sm:px-6 md:px-12 items-center justify-center md:w-60 lg:w-120">
					<h1 className="w-fit text-3xl md:text-4xl lg:text-7xl not-sm:mx-auto font-semibold text-white font-serif leading-8 lg:leading-12 mb-4">Tu tienda de confianza.</h1>
					<h2 className="w-fit text-2xl md:text-3xl lg:text-4xl text-black/60 font-bold leading-1 md:leading-8 lg:leading-12"> Donde obtienes informacion de calidad.<span className="text-5xl">   😂</span></h2>
				</section>
				<section className="w-full">
					<img src="canasta.png" alt="canasta de abarrotes" className="m-auto not-sm:w-80 md:w-120 lg:w-140" />
				</section>
			</div>
			<div>
				{/* galeria de productos */}
			</div>
		</section>
	);
};