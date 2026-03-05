import { Button } from "./ui/button";

export const Header = () => {
  return (
    <header className="fixed px-2 sm:px-3 flex justify-center w-full">
      <div className="border border-red-400 w-screen">
        <div className="flex justify-between">
          {/* logo */}
          <div className="w-fit px-1 h-10 bg-linear-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">Emma</span>
          </div>
          <nav className="hidden md:flex">
            <ul className="flex min-w-sm justify-between border">
              <li>uno</li>
              <li>dos</li>
              <li>tres</li>
              <li>cuatro</li>
            </ul>
          </nav>
          <Button className="not-sm:hidden">login</Button>
        </div>
      </div>
    </header>
  );
};