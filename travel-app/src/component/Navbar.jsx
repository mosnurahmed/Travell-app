import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const { loginWithRedirect, user, isAuthenticated, isLoading, logout } = useAuth0();
  const [users, setUsers] = useState({});

  useEffect(() => {
    if (!isLoading) {
      console.log("user", user);
      setUsers(user);
    }
  }, [user, isLoading]);

  const logoutHandler = () => {
    logout({ logoutParams: { returnTo: window.location.origin } });
    localStorage.clear();
  };

  return (
    <div className="  flex flex-colum justify-between font-normal flex-wrap my-4">
      <img
        className=" h-12 sm:h-20"
        src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/travel-logo%2Ctravel-agency-logo%2Ctravel-%26-tour-design-template-e1f616013f08427f3fe8139b972ad93d_screen.jpg?ts=1661851613"
        alt="logo"
      />
      <div className=" text-sm sm:text-xl flex flex-colum gap-x-4 text-[#48576E] items-center ">
        <Link to="/">
          <p className=" hover:text-[#44D7B6] ease-in duration-150 cursor-pointer	">Home</p>
        </Link>

        <Link to="/about">
          <p className=" hover:text-[#44D7B6] ease-in duration-150">About Us</p>
        </Link>
      </div>
      {isAuthenticated ? (
        <div className="flex flex-colum gap-x-1 text-[10px] sm:text-xl items-center px-2">
          <img className=" border border-2 border-sky-400 rounded-full h-9 w-9 rounder-full" src={users.picture} />

          <p
            className="border border-2 border-sky-400 rounded p-1 bg-blue-200 text-gray-700"
            onClick={logoutHandler}
          >
            logout
          </p>
        </div>
      ) : (
        <div className="flex flex-colum gap-x-1 text-[10px] sm:text-xl items-center px-2">
          <p
            className=" border border-2 border-sky-400 rounded p-1 bg-blue-200 text-gray-700"
            onClick={() => loginWithRedirect()}
          >
            Login
          </p>
          <p className="border border-2 border-sky-400 rounded p-1 bg-blue-200 text-gray-700">signUp</p>
        </div>
      )}
    </div>
  );
}

export default Navbar;
