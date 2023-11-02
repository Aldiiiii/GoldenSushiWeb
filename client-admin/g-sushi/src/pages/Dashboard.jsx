import ListItems from "./ItemList";
import Categories from "./Categories";
import RegisterAdmin from "./RegisterAdmin";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";

export default function Dashboard({page, setPage,}) {
  return (
    <>
      <div>
        <div id="wrapper">
          <Sidebar />

          <div id="content-wrapper" className="d-flex flex-column">
            <div>
              <div id="content">

                <Navbar/>
                <Outlet />                   

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
