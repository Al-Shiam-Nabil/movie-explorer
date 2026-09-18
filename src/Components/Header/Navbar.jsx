import { Link } from "react-router";
import Container from "../Shared/Container";
import MainButton from "../Shared/MainButton";

export default function Navbar() {
  return (
    <div className=" bg-base-100 shadow-sm ">
      <Container>
        <div className="navbar px-0">
          <div className="navbar-start ">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="  lg:hidden mr-3">
                <svg
                  aria-label="Menu"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex={-1}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <Link to="/">Home</Link>
                </li>

                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Support </a>
                </li>
              </ul>
            </div>
            <Link to="/" className=" text-2xl font-bold">
              Movie Explorer
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <a>Home</a>
              </li>

              <li>
                <a>About Us</a>
              </li>

              <li>
                <a>Support</a>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <Link to="/movies">
              {" "}
              <MainButton>Browse Movie</MainButton>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
