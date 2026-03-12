import { Outlet } from "react-router-dom";
import WhatsappButton from "../ui/WhatsappButton";
import Footer from "./Footer";
import Navbar from "./Navbar";
import ScrollToTop from "../ScrollToTop";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-neutral-950 text-white">
      <ScrollToTop />
      <Navbar />

      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <WhatsappButton />
    </div>
  );
}
