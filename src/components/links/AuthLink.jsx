import { Link } from "react-router-dom";

const AuthLink = () => {
  return (
    <div className="flex items-center justify-center">
      <ul className="flex items-center justify-center space-x-4">
        <li>
          <Link
            to="/auth/login"
            className="flex items-center justify-center px-5 py-1 border border-sky-500 rounded-lg text-sky-500 hover:text-sky-600 hover:border-sky-600 transition-all text-sm"
          >
            Login
          </Link>
        </li>

        <li>
          <Link
            to="/auth/signup"
            className="flex items-center justify-center px-5 py-1 border-sky-500 bg-sky-500 text-white tracking-wider font-light text-sm hover:bg-sky-600 rounded-lg"
          >
            Sign Up
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default AuthLink;
