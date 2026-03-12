


export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-12 border-b border-slate-800 pb-12">

        <div className="col-span-1 md:col-span-1">
          <h2 className="text-2xl font-bold text-white mb-4">Emma<span className="text-purple-500">.</span></h2>
          <p className="text-sm leading-relaxed">
            Brindando productos de calidad y servicio excepcional a nuestra comunidad desde 2026.
          </p>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Ayuda</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-purple-400 transition-colors">Envíos</a></li>
            <li><a href="#" className="hover:text-purple-400 transition-colors">Devoluciones</a></li>
            <li><a href="#" className="hover:text-purple-400 transition-colors">FAQ</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Boletín</h3>
          <p className="text-sm mb-4">Recibe las mejores ofertas en tu correo.</p>
          <form className="flex gap-2">
            <input type="email" placeholder="Tu email" className="bg-slate-800 border-none rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-purple-500 outline-none w-full" />
            <button className="bg-purple-600 hover:bg-purple-500 text-white px-4 py-2 rounded-md text-sm font-medium transition-all">
              Unirse
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
        <p>© 2026 Emma Store. Todos los derechos reservados.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-blue-400 transition-colors">Facebook</a>
          <a href="#" className="hover:text-pink-400 transition-colors">Instagram</a>
          <a href="#" className="hover:text-emerald-400 transition-colors">WhatsApp</a>
        </div>
      </div>
    </footer>
  );
};