function SideBar({ selectTab, setSelectTab }) {
  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark sidebar-container">
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
      >
        <span className="fs-4">Sidebar</span>
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item" onClick={() => setSelectTab("Home")}>
          <a
            href="#"
            className={`nav-link ${selectTab == "Home" && "active"} text-white`}
            aria-current="page"
          >
            Home
          </a>
        </li>
        <li onClick={() => setSelectTab("Create Post")}>
          <a
            href="#"
            className={`nav-link ${
              selectTab == "Create Post" && "active"
            } text-white`}
          >
            Create Post
          </a>
        </li>
      </ul>
      <hr />
      <div className="dropdown">
        <a
          href="#"
          className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        ></a>
        <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
          <li>
            <a className="dropdown-item" href="#">
              New project...
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Settings
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Profile
            </a>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Sign out
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
