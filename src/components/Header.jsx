import LogoLink from "./links/LogoLink";
import NavLink from "./links/NavLink";
import AuthLink from "./links/AuthLink";

const Header = function () {
  return (
    <header className="flex items-center justify-center border-b border-gray-400/40 h-14">
      <div className="flex justify-between container mx-auto">
        <div className="flex justify-center items-center space-x-8">
          <LogoLink />
          <NavLink />
        </div>
        <AuthLink />
      </div>
    </header>
  );
};

export default Header;
