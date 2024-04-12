import { Link, useLocation } from "react-router-dom";

const NavLink = () => {
  const { pathname } = useLocation();

  return (
    <nav>
      <ul className="flex items-center justify-center space-x-4">
        <li>
          <Link
            to="/"
            className={`text-white hover:text-sky-500 transition-all font-light tracking-wider
            ${pathname === "/" && "text-sky-500"}`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/products"
            className={`text-white hover:text-sky-500 transition-all font-light tracking-wider
            ${pathname === "/products" && "text-sky-500"}`}
          >
            Products
          </Link>
        </li>
        <li>
          <Link
            to="/outlets"
            className={`text-white hover:text-sky-500 transition-all font-light tracking-wider
            ${pathname === "/outlets" && "text-sky-500"}`}
          >
            Outlets
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavLink;
