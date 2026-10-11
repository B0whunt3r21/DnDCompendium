import { Outlet } from "react-router-dom";

import Footer from "./Footer";
import Header from "./Header";

function Skelletton() {
  return (
    <div className="d-flex flex-column vh-100">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Skelletton;
