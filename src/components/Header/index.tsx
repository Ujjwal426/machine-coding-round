import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router";

const linkClass = ({ isActive }: { isActive: boolean }) =>
  `block rounded-md px-3 py-1.5 text-sm whitespace-nowrap transition-colors ${
    isActive
      ? "bg-white text-black font-medium"
      : "text-gray-300 hover:bg-gray-800 hover:text-white"
  }`;

type NavItem = { path: string; label: string };

const CustomHeader = ({ routes }: { routes: NavItem[] }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Close the mobile menu with Escape
  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-black shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
        <Link
          to="/"
          onClick={closeMenu}
          className="shrink-0 text-lg font-semibold text-white"
        >
          Machine Coding
        </Link>

        {/* Desktop: all links, wrapping onto a second row if there are many */}
        <nav className="hidden flex-1 flex-wrap justify-end gap-1 lg:flex">
          {routes.map(({ path, label }) => (
            <NavLink key={path} to={path} className={linkClass}>
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Mobile / tablet: hamburger */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          className="rounded-md p-2 text-gray-300 hover:bg-gray-800 hover:text-white lg:hidden"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            {isOpen ? (
              <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {isOpen && (
        <nav
          id="mobile-menu"
          className="grid max-h-[70vh] grid-cols-1 gap-1 overflow-y-auto border-t border-gray-800 px-4 py-3 sm:grid-cols-2 md:grid-cols-3 lg:hidden"
        >
          {routes.map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              onClick={closeMenu}
              className={linkClass}
            >
              {label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
};

export default CustomHeader;
