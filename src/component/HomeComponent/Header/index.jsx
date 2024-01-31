import React from "react";
import { Button, Img, Text } from "component/HomeComponent";
import { Link, NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <>
       <header className={`bg-white shadow-md sticky top-0 ${props.className}`}>
        <div className="flex md:flex-col flex-row items-center justify-center p-[15px] w-full">
          <div className="header-row my-2">
            <div className="flex flex-row items-center">
              <div className="border-b-2 border-teal-400 pb-2">
                <Img
                  className="h-[50px] w-[90px] cursor-pointer"
                  src="images/default2.png"
                  alt="Group448"
                />
              </div>
              <Text
                className="text-lg font-bold text-teal-400 cursor-pointer ml-1"
                size="txtCinzelDecorativeBold16"
              >
                Eco Resolve
              </Text>
            </div>

            <div className="mobile-menu cursor-pointer">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div className="flex md:flex-1 sm:flex-col flex-row gap-10 sm:hidden items-start justify-center md:ml-[0] ml-[78px] w-[30%] md:w-full">
          <NavLink
              to="/"
              exact
              className="text-base text-gray-900 cursor-pointer transition duration-300 hover:text-teal-400"
              activeClassName="text-teal-400"
            >
              Home
            </NavLink>
            <NavLink
              to="/resources"
              className="text-base text-gray-900 cursor-pointer transition duration-300 hover:text-teal-400"
              activeClassName="text-teal-400"
            >
              Resources Center
            </NavLink>
            <NavLink
              to="/about"
              className="text-base text-gray-900 cursor-pointer transition duration-300 hover:text-teal-400"
              activeClassName="text-teal-400"
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className="text-base text-gray-900 cursor-pointer transition duration-300 hover:text-teal-400"
              activeClassName="text-teal-400"
            >
              Contact
            </NavLink>
          </div>
          <div className="flex md:flex-1 flex-row gap-10 sm:hidden items-center justify-center md:ml-[0] ml-[290px] rounded-md w-[15%] md:w-full">
            <Link to="/signin">
              <Button
                className="cursor-pointer font-bold font-chivo min-w-[122px] text-base text-center transition duration-300 hover:bg-teal-500 hover:text-white"
                shape="round"
                color="teal_400"
                size="xs"
                variant="fill"
              >
                Login
              </Button>
            </Link>
            <Link to="/signup">
              <Button
                className="cursor-pointer font-bold font-chivo min-w-[122px] text-base text-center transition duration-300 hover:bg-teal-500 hover:text-white"
                shape="round"
                color="teal_400"
                size="xs"
                variant="fill"
              >
                Sign Up
              </Button>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;
