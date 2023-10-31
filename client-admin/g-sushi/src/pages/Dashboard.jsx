import ListItems from "../components/ListItems";
import Categories from "./Categories";
import RegisterAdmin from "./RegisterAdmin";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

export default function Dashboard({page, setPage, items}) {
  return (
    <>
      <div>
        <div id="wrapper">
          <Sidebar />

          <div id="content-wrapper" className="d-flex flex-column">
            <div>
              <div id="content">

                <Navbar/>

                {page === 'dashboard' ? <ListItems items={items} /> : page === 'categories' ? <Categories /> : page === 'register' ? <RegisterAdmin /> : ''}
                       

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
