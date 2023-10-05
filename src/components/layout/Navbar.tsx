import React, { RefObject, useEffect, useRef, useState } from "react";

// import { throttle } from "../../utils/throttle";

const defaultNavigation = [
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Get in Touch", href: "#contact", isButton: true },
];

interface NavItem {
  name: string;
  href: string;
  isButton?: boolean;
}

const Navbar = ({
  //   navigationItems,
  homeUrl,
}: {
  //   navigationItems?: readonly NavItem[];
  homeUrl: string;
}) => {
  const navigationItems = defaultNavigation;
  const [state, setState] = useState(false);
  const menuBtnEl = useRef(null);
  const header = useRef(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target;
      if (
        !state &&
        header &&
        target &&
        header.current &&
        (header.current as HTMLElement).contains(target as HTMLElement)
      )
        return;
      if (menuBtnEl !== null && menuBtnEl.current) setState(false);
    };
    document.addEventListener("click", handleClick);

    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <header
      // REMOVED STICKY HEADER!
      // className={`fixed w-full top-0 z-20 transition-all ${
      //   scrollPosition > 100 || state ? "shadow bg-gray-900" : ""
      // }`}
      className="absolute top-0 left-0 right-0 z-20"
      ref={header}
    >
      <div className="">
        <div className="custom-screen md:hidden">
          <NavHeader
            // @ts-ignore
            menuBtnEl={menuBtnEl}
            state={state}
            onClick={() => setState(!state)}
            homeUrl={homeUrl}
          />
        </div>
        <nav
          className={`md:text-sm md:static md:block transition-all ${
            state
              ? "absolute z-20 top-0 inset-x-0 rounded-b-2xl shadow-x bg-gray-900"
              : "hidden"
          }`}
        >
          <div className="custom-screen items-center md:flex">
            <NavHeader
              state={state}
              onClick={() => setState(!state)}
              homeUrl={homeUrl}
            />
            <div
              className={`flex-1 justify-end my-8 text-gray-300 md:font-medium md:my-0 md:flex ${
                state ? "block" : "hidden"
              } `}
            >
              <ul className="justify-center items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
                {navigationItems.map((item, idx) => {
                  if (item.isButton)
                    return (
                      <li key={idx} className="text-center">
                        <ButtonLink
                          variant="secondary"
                          href={item.href}
                          className="mx-auto py-2 px-5"
                        >
                          {item.name}
                        </ButtonLink>
                      </li>
                    );

                  return (
                    <li key={idx} className="hover:text-gray-50">
                      <NavLink href={item.href} className="block text-md">
                        {item.name}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </nav>
        {/* <div
          className="w-2/3 bg-gray-500 rounded mx-auto"
          style={{
            height: "2px",
          }}
        ></div> */}
      </div>
    </header>
  );
};

import Logo from "../utils/Logo";
import { ButtonLink } from "../ui/Button";

const NavHeader = ({
  onClick,
  state,
  menuBtnEl,
  homeUrl = "/",
}: {
  onClick: () => void;
  state: boolean;
  menuBtnEl?: RefObject<HTMLButtonElement | null>;
  homeUrl: string;
}) => (
  <div className="flex items-center justify-between md:block">
    {/* @ts-ignore */}
    <NavLink
      href={homeUrl}
      className="text-gray-300 hover:text-gray-50 transition"
      area-label="Link de logo a inicio"
    >
      <Logo h={40} />
    </NavLink>
    <div className="md:hidden flex space-x-4">
      {/* Mobile Menu Button */}
      <button
        role="button"
        aria-label="Open the menu"
        // @ts-ignore
        ref={menuBtnEl}
        className="text-gray-400 hover:text-gray-50"
        onClick={onClick}
      >
        {state ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        )}
      </button>
    </div>
  </div>
);

const NavLink = ({
  children,
  href,
  className,
  areaLabel,
  ...props
}: {
  href: string;
  className?: any;
  [x: string]: string;
}) => (
  <a
    href={href}
    className={`py-2.5 px-4 text-center rounded-full duration-150 text-lg ${
      className || ""
    }`}
    {...props}
  >
    {children}
  </a>
);

export default Navbar;
