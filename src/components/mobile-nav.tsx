'use client';
import { Menu as Hamburger, X } from 'lucide-react';
import { Menu } from './menu';
import { useState } from 'react';

export const MobileNav = ({
  activeNav,
  setActiveNav,
}: {
  activeNav: string;
  setActiveNav: (nav: string) => void;
}) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  return (
    <>
      <div
        className="md:hidden"
        onClick={() => setShowMenu((showMenu) => !showMenu)}
      >
        {showMenu ? <X /> : <Hamburger />}
      </div>
      {/* {showMenu ? ( */}
      <div
        className={`absolute mt-10 overflow-hidden right-0 left-0 px-8  bg-slate-900 
        transition-all ease-in-out duration-300 ${
          showMenu ? 'h-80 py-2' : 'h-0'
        }`}
      >
        <Menu setActiveNav={setActiveNav} activeNav={activeNav} />
      </div>
      {/* ) : null} */}
    </>
  );
};
