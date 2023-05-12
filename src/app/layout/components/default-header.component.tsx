import React, { useEffect, useState } from "react";
import { Transition } from "@headlessui/react";
import { Search } from "@/app/svg/menu/search";
import { Burger } from "@/app/svg/burger";
import { Cross } from "@/app/svg/cross";
import { Chevron } from "@/app/svg/chevron";
import Link from "next/link";
import clsx from "clsx";
import { useRouter } from "next/router";
import { Logo } from "@/app/svg/logo";
import { LogoCollapsed } from "@/app/svg/logo-collapsed";
import { AnimatePresence, motion } from "framer-motion";

export const DefaultHeader: React.FC<{ hasScrolled: boolean }> = ({
  hasScrolled,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { route } = useRouter();

  const variants = {
    open: {
      rotate: 45,
      originX: "50%",
      originY: "50%",
    },
    closed: {
      rotate: 0,
      originX: "50%",
      originY: "50%",
    },
  };

  useEffect(() => {
    setIsMenuOpen(false);
  }, [route]);

  return (
    <header
      className={clsx(
        "fixed z-10 w-full  p-4 transition transition-all",
        hasScrolled && "bg-black text-white shadow-content bg-opacity-70 backdrop-blur-lg"
      )}
    >
      <div
        className={clsx(
          "container mx-auto flex w-full items-center justify-between"
        )}
      >
        <div className="flex items-center space-x-4 font-bold">
          <Link href="/">
            <Logo colored className="hidden h-8 md:block" />
            <LogoCollapsed colored className="h-8 md:hidden" />
          </Link>
          <Link href="/explorer" className="text-l font-bold text-white hover:text-opacity-50 pt-2">
            Colections
          </Link>
          <Link href="/explorer" className="text-l font-bold text-white hover:text-opacity-50 pt-2">
            Explorar
          </Link>
        </div>
        <div className="text-l hidden space-x-6 font-bold md:flex items-center">

          <Link
            href="/about"
            className={clsx(
              "text-l hidden font-bold hover:text-opacity-50 md:flex text-white pt-2",
            )}
          >
            Nosotros
          </Link>
        </div>
        <div
          className={clsx(
            "app-outline-none transition transition-all focus:outline-none md:hidden"
          )}
        >
          <div
            id="burger-menu"
            className="app-outline-none cursor-pointer p-2 md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <motion.svg
              viewBox="0 0 24 24"
              width="30"
              height="30"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <motion.path
                initial="closed"
                animate={isMenuOpen ? "open" : "closed"}
                variants={variants}
                d="M3 6h18"
              />
              <motion.path
                initial="closed"
                animate={isMenuOpen ? "open" : "closed"}
                variants={variants}
                d="M3 12h18"
                style={{
                  translateY: isMenuOpen ? "-3px" : "0px",
                  scaleY: isMenuOpen ? 0 : 1,
                  originX: "50%",
                  originY: "50%",
                }}
              />
              <motion.path
                initial="closed"
                animate={isMenuOpen ? "open" : "closed"}
                variants={variants}
                d="M3 18h18"
                style={{
                  translateY: isMenuOpen ? "-9px" : "0px",
                  rotate: isMenuOpen ? -90 : 0,
                  originX: "50%",
                  originY: "50%",
                }}
              />
            </motion.svg>
          </div>
        </div>
      </div>
      <Transition
        show={isMenuOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <AnimatePresence>
          <motion.nav
            initial={{ y: "100%" }}
            animate={{ y: "0" }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed mt-2 mt-8 w-full rounded-xl bg-white p-4 text-white shadow-content md:hidden"
          >
            <ul className="text-l flex flex-col space-y-4 font-bold">
              <Link href="/about">
                <li>Nosotros</li>
              </Link>
            </ul>
          </motion.nav>
        </AnimatePresence>
      </Transition>
    </header>
  );
};
