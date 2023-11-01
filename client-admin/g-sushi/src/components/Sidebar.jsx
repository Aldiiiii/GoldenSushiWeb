import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <>        
      <ul
        className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        <Link to={"/"}
          className="sidebar-brand d-flex align-items-center justify-content-center"
          href="index.html"
        >
          <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-laugh-wink"></i>
          </div>
          <div className="sidebar-brand-text mx-3">G-Sushi</div>
        </Link>

        <hr className="sidebar-divider my-0" />

        <li className="nav-item">
          <Link to={"/"} className="nav-link">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard</span>
          </Link>
        </li>

        <li className="nav-item">
          <Link to={"/categories"} className="nav-link">
            <i className="fas fa-fw fa-table"></i>
            <span>Categories</span>
          </Link>
        </li>

        <li className="nav-item">
          <Link to={"/register"} className="nav-link" href="tables.html">
            <i className="fas fa-fw fa-user-plus"></i>
            <span>Register Admin</span>
          </Link>
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
    </>
  );
}
