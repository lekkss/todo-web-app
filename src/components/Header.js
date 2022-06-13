import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

import { useLocation } from "react-router-dom";
import Button from "./Button";
const Header = ({ title, showAdd, showAddText }) => {
  const location = useLocation();
  return (
    <div className="container flex flex-row justify-between mx-auto mb-10">
      <h1 className="text-red-800 text-3xl">{title}</h1>
      {location.pathname === "/dashboard" ? (
        <Button onClick={showAdd} value={showAddText ? "Close" : "Add"} />
      ) : (
        location.pathname === "/about" && (
          <Link to="/dashboard" className="flex justify-center">
            <IoIosArrowBack className="" /> <p className="-mt-1">Go To Task</p>
          </Link>
        )
      )}
    </div>
  );
};
export default Header;
