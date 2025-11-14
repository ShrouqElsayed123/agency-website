'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import Toggle from '../Toggle/Toggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // ← دي بتجيب المسار الحالي

  const links = [
    { name: "Home", href: "/" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Blog", href: "/blog" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Dashboard", href: "/dashboard" },
  ];

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <nav className="flex justify-between items-center p-4 shadow-sm">
      <h1 className="text-2xl tracking-wide font-bold text-gray-700">
        Agency <span className="text-3xl text-mainColor font-bold">.</span>
      </h1>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-8 text-gray-700 font-medium text-lg">
        {links.map((link) => (
          <li key={link.name}>
            <Link
              href={link.href}
              className={`transition-colors duration-200 ${
                pathname === link.href
                  ? 'text-mainColor font-semibold'
                  : 'hover:text-mainColor'
              }`}
            >
              {link.name}
            </Link>
          </li>
        ))}
        {/* <li><Toggle /></li> */}
      </ul>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-gray-700"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X /> : <Menu />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="flex-col flex md:hidden absolute top-16 bg-white w-full text-center gap-10
          text-gray-700 font-medium overflow-y-auto z-50 py-8 shadow-md">
          {links.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className={`block py-2 transition-colors duration-200 ${
                  pathname === link.href
                    ? 'text-mainColor font-semibold'
                    : 'hover:text-mainColor'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li><Toggle /></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
