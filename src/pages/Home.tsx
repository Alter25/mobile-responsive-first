

export default function Home (){
  return (
    <section className="w-full h-screen flex flex-col items-center">
      <div className="flex flex-col items-start md:px-12 md:py-12 lg:px-12 w-full border border-red-400 bg-purple-500">
        <section className="flex flex-col w-40">
          <h1 className="text-2xl m-auto my-12 sm:text-3xl lg:text-5xl font-semibold">Bienvenido a tu tienda de confianza.</h1>
          <h2 className="text-5xl font-semibold text-emerald-300">Emma</h2>
        </section>

        <img src="canasta.png" alt="canasta de abarrotes" />
      </div>
    </section>
  );
};