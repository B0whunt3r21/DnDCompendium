import SideBar from "../SideBar";
import { Outlet } from "react-router-dom";

function Classes() {
  return (
    <div className="">
      <div className="row align-items-center">
        <div className="col-12 col-md-4 d-flex justify-content-center">
          <SideBar title="Classes" endpoint="/classes" />
        </div>
        <div className="col-12 col-md-8 d-flex justify-content-center">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Classes;
