import { Outlet } from "react-router-dom";
import { Navbar, Footer } from "./../../components";

export default function Layouts() {
  return (
    <div className="Layouts">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
