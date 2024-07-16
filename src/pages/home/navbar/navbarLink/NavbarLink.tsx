import { NavLink } from "react-router-dom";

const NavbarLink = () => {
  const routes: string[] = [
    "/",
    "/products",
    "/about-us",
    "/contact-us",
    "/dashboard",
  ];

  const navbarItem: string[] = [
    "Home",
    "Products",
    "About Us",
    "Contact Us",
    "Dashboard",
  ];
  return (
    <>
      {navbarItem.map((item, index) => (
        <li key={index}>
          <NavLink
            to={routes[index]}
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-base text-white border-b-4 border-[#fa4f09]"
                : "text-base"
            }
          >
            {item}
          </NavLink>
        </li>
      ))}
    </>
  );
};

export default NavbarLink;
