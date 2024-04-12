import { Link } from "react-router-dom";
import { MdOutlineFoodBank } from "react-icons/md";
import siteConfig from "../../config/site-config";

const LogoLink = function () {
  return (
    <Link className="flex items-center justify-center space-x-2" to="/">
      <MdOutlineFoodBank className="text-sky-500 size-6" />
      <h1 className="text-sky-500 font-bold tracking-wider text-lg">
        {siteConfig.name}
      </h1>
    </Link>
  );
};

export default LogoLink;
