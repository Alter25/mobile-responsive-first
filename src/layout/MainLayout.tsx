import { Outlet } from "react-router";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";


export default function MainLayout() {
  return <div className="flex flex-col min-h-screen bg-hero-bg">
    <Header />
    <main className="grow">
      <Outlet />
    </main>
    <Footer />
  </div>
}