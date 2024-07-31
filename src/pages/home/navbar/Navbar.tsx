import { FaShoppingCart } from "react-icons/fa";
import Container from "../../../utils/container/Container";
import NavbarLink from "./navbarLink/NavbarLink";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" bg-black">
      <Container>
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <NavbarLink />
              </ul>
            </div>
            <Link to={"/"} className="btn btn-ghost text-xl text-white">
              daisyUI
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-white">
              <NavbarLink />
            </ul>
          </div>
          <div className="navbar-end">
            <a className="btn">
              <FaShoppingCart className="text-3xl text-[#FA4F09]" />
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
