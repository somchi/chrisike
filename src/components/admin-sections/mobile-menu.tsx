'use client';
import { Menu as Hamburger, X } from 'lucide-react';
import { useState } from 'react';
import { AdminMenu } from './menu';

export const MobileMenu = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  return (
    <div className="flex gap-3 md:mr-20 mr-8">
      <div
        className="md:hidden"
        onClick={() => setShowMenu((showMenu) => !showMenu)}
      >
        {showMenu ? <X /> : <Hamburger />}
      </div>

      <div
        className={`absolute mt-10 overflow-hidden right-0 left-0 px-8 z-50 bg-slate-900 
        transition-all ease-in-out duration-300 ${
          showMenu ? 'h-72 py-2' : 'h-0'
        }`}
      >
        <AdminMenu />
      </div>
    </div>
  );
};
