'use client';

import clsx from 'clsx';
import gsap from 'gsap';
import { useWindowScroll } from 'react-use';
import { useEffect, useRef, useState } from 'react';
import { TiLocationArrow } from 'react-icons/ti';
import { HiMenu, HiX } from 'react-icons/hi'; // Hamburger and close icons
import Link from 'next/link';

import Button from '../Button';

const navItems = ['Homepage', 'About', 'Services', 'Careers', 'Blogs', 'Contact'];

const NavBar = () => {
  const [isIndicatorActive, setIsIndicatorActive] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Refs navigation container
  const navContainerRef = useRef(null);

  const { y: currentScrollY } = useWindowScroll();
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    if (currentScrollY === 0) {
      // Topmost position: show navbar without floating-nav
      setIsNavVisible(true);
      navContainerRef.current.classList.remove('floating-nav');
    } else if (currentScrollY > lastScrollY) {
      // Scrolling down: hide navbar and apply floating-nav
      setIsNavVisible(false);
      navContainerRef.current.classList.add('floating-nav');
    } else if (currentScrollY < lastScrollY) {
      // Scrolling up: show navbar with floating-nav
      setIsNavVisible(true);
      navContainerRef.current.classList.add('floating-nav');
    }

    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
    });
  }, [isNavVisible]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <div
      ref={navContainerRef}
      className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6"
    >
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex size-full items-center justify-between p-4">
          {/* Logo and Product button */}
          <div className="flex items-center gap-7">
            <img src="/images/navbar/logo.png" alt="logo" className="w-10" />

            <Link href="/">
              <Button
                title="HOMEPAGE"
                rightIcon={<TiLocationArrow />}
                containerClass="bg-blue-50 md:flex hidden items-center justify-center gap-1"
              />
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden sm:flex h-full items-center">
            {navItems.map(
              (item, index) =>
                item !== 'Homepage' && ( // Exclude Homepage from desktop links
                  <a
                    key={index}
                    href={`/${item.toLowerCase()}`}
                    className="nav-hover-btn"
                  >
                    {item}
                  </a>
                )
            )}
          </div>

          {/* Mobile Hamburger Icon */}
          <div className="sm:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="focus:outline-none"
              aria-label="Toggle Mobile Menu"
            >
              {isMobileMenuOpen ? (
                <HiX className="text-2xl text-white" />
              ) : (
                <HiMenu className="text-2xl text-white" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-md sm:hidden">
            <ul className="flex flex-col p-4 space-y-2">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={`/${item.toLowerCase() === 'homepage' ? '' : item.toLowerCase()}`}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                    onClick={() => setIsMobileMenuOpen(false)} // Close menu on link click
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>
    </div>
  );
};

export default NavBar;
