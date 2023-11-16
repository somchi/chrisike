'use client';

import { Separator } from './separetor';
import { Tabs } from '../_libs/enums';

export const Menu = ({
  activeNav,
  setActiveNav,
}: {
  activeNav: string;
  setActiveNav: (activeNav: string) => void;
}) => {
  const onClick = (e: any) => {
    const section = e.target.name;
    const elem = document.getElementById(section);
    if (!elem) return;
    elem.scrollIntoView({ behavior: 'smooth' });
    setActiveNav(section);
  };
  console.log(activeNav, '==');
  return (
    <div className="grid md:flex items-center md:gap-10 gap-2 font-medium text-lg">
      <button
        name="home"
        className={`${activeNav === 'home' ? 'text-green-400' : 'text-white'}`}
        onClick={onClick}
      >
        Home
      </button>
      <Separator className="md:hidden !bg-slate-700" />
      <button
        name="about"
        className={`${
          activeNav === Tabs.About ? 'text-green-400' : 'text-white'
        }`}
        onClick={onClick}
      >
        About
      </button>
      <Separator className="md:hidden !bg-slate-700" />
      <button
        name="services"
        className={`${
          activeNav === Tabs.Services ? 'text-green-400' : 'text-white'
        }`}
        onClick={onClick}
      >
        Services
      </button>
      <Separator className="md:hidden !bg-slate-700" />
      <button
        name="portfolio"
        className={`${
          activeNav === Tabs.Portfolio ? 'text-green-400' : 'text-white'
        }`}
        onClick={onClick}
      >
        Portfolio
      </button>
      <Separator className="md:hidden !bg-slate-700" />
      <button
        name="client"
        className={`${
          activeNav === Tabs.Client ? 'text-green-400' : 'text-white'
        }`}
        onClick={onClick}
      >
        Clients
      </button>
      <Separator className="md:hidden !bg-slate-700" />
      <button
        name="contact"
        className={`${
          activeNav === Tabs.Contact ? 'text-green-400' : 'text-white'
        }`}
        onClick={onClick}
      >
        Contact
      </button>
    </div>
  );
};
