

export default function Home (){
  return (
    <section className="w-full h-screen flex flex-col items-center">
      <div className="flex not-sm:flex-col justify-between px-2 md:px-6 md:py-12 lg:px-12 w-full pt-12 bg-purple-500">
        <section className="flex flex-col not-sm:h-70 w-60 lg:w-120">
          <h1 className="text-5xl font-semibold text-white font-serif leading-16">Tu tienda de confianza.</h1>
        </section>
        <section className="">
          <img src="canasta.png" alt="canasta de abarrotes" className="md:w-120 lg:w-160" />
        </section>
      </div>
    </section>
  );
};