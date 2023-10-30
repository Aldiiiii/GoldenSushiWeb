import ListItems from "../components/ListItems";
import Categories from "./Categories";
import RegisterAdmin from "./RegisterAdmin";

export default function Dashboard() {
  return (
    <>
      <div>
        <div id="wrapper">
          {/* <!-- Sidebar --> */}
          <ul
            className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
            id="accordionSidebar"
          >
            <a
              className="sidebar-brand d-flex align-items-center justify-content-center"
              href="index.html"
            >
              <div className="sidebar-brand-icon rotate-n-15">
                <i className="fas fa-laugh-wink"></i>
              </div>
              <div className="sidebar-brand-text mx-3">G-Sushi</div>
            </a>

            <hr className="sidebar-divider my-0" />

            <li className="nav-item active">
              <a className="nav-link">
                <i className="fas fa-fw fa-tachometer-alt"></i>
                <span>Dashboard</span>
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link">
                <i className="fas fa-fw fa-table"></i>
                <span>Categories</span>
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="tables.html">
                <i className="fas fa-fw fa-user-plus"></i>
                <span>Register Admin</span>
              </a>
            </li>

            <hr className="sidebar-divider d-none d-md-block" />

            {/* <!-- Sidebar Toggler (Sidebar) -->
            <div className="text-center d-none d-md-inline">
              <button
                className="rounded-circle border-0"
                id="sidebarToggle"
              ></button>
            </div> */}
          </ul>
          {/* <!-- End of Sidebar --> */}

          {/* <!-- Content --> */}
          <div id="content-wrapper" className="d-flex flex-column">
            <div>
              <div id="content">
                {/* <!-- Topbar --> */}
                <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                  <button
                    id="sidebarToggleTop"
                    className="btn btn-link d-md-none rounded-circle mr-3"
                  >
                    <i className="fa fa-bars"></i>
                  </button>

                  <ul className="navbar-nav ml-auto">
                    {/* <!-- Nav Item - Search Dropdown (Visible Only XS) --> */}
                    <li className="nav-item dropdown no-arrow d-sm-none">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        id="searchDropdown"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="fas fa-search fa-fw"></i>
                      </a>
                      {/* <!-- Dropdown - Messages --> */}
                      <div
                        className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                        aria-labelledby="searchDropdown"
                      >
                        <form className="form-inline mr-auto w-100 navbar-search">
                          <div className="input-group">
                            <input
                              type="text"
                              className="form-control bg-light border-0 small"
                              placeholder="Search for..."
                              aria-label="Search"
                              aria-describedby="basic-addon2"
                            />
                            <div className="input-group-append">
                              <button className="btn btn-primary" type="button">
                                <i className="fas fa-search fa-sm"></i>
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </li>

                    {/* <!-- Nav Item - User Information --> */}
                    <li className="nav-item dropdown no-arrow">
                      <span className="mr-2 d-none d-lg-inline text-gray-600 small">
                        <a className="d-none d-sm-inline-block btn btn-sm btn-danger shadow-sm">
                          LOGOUT
                        </a>
                      </span>
                    </li>
                  </ul>
                </nav>

                {/* <!-- Items List --> */}
                <ListItems />

                {/* Categories */}
                <Categories />

                {/* Register Admin */}
                <RegisterAdmin />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
