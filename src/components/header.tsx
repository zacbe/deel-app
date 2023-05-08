import * as React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import DeelLogo from "./deel";

interface Props {
  id?: string;
}

const CONSTANTS = {
  USER_PAGE: "User",
  ADMIN_PAGE: "Admin",
};

const Header: React.FC<Props> = () => {
  return (
    <div className="shadow-md">
      <div className="h-24 flex items-center justify-between bg-white p-6 w-full">
        <div className="w-48 mx-20">
          <Link to="/">
            <DeelLogo />
          </Link>
        </div>
        <div>
          <Link
            to="/admin"
            className="uppercase text-base px-2 py-2 leading-none text-blueDeel hover:text-gray-400 mx-4"
          >
            {CONSTANTS.ADMIN_PAGE}
          </Link>

          <Link
            to="/user"
            className="uppercase text-base px-2 py-2 leading-none text-blueDeel hover:text-gray-400 mx-4"
          >
            {CONSTANTS.USER_PAGE}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
