'use client';

import { useEffect, useState } from 'react';
import { Menu } from './menu';
import { MobileNav } from './mobile-nav';
import { Link } from 'react-router-dom';

export const Header = () => {
  const [scrollY, setScrollY] = useState<boolean>(false);
  const [activeNav, setActiveNav] = useState('home');

  const scrollAnimation = () => {
    const header = document.getElementById('header');
    if (!header) return;
    if (window.scrollY === 0) {
      setScrollY(false);
    } else {
      setScrollY(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollAnimation);
    return () => {
      window.removeEventListener('scroll', scrollAnimation);
    };
  }, []);

  useEffect(() => {
    if (window) {
      const scrollY = window.scrollY;
      setScrollY(scrollY === 0 ? false : true);
    }
  }, []);

  const observerTabs = (observer: IntersectionObserver) => {
    const home = document.querySelector('#home');
    const about = document.querySelector('#about');
    const services = document.querySelector('#services');
    const portfolio = document.querySelector('#portfolio');
    const client = document.querySelector('#client');
    const contact = document.querySelector('#contact');

    if (home) observer.observe(home);
    if (about) observer.observe(about);
    if (services) observer.observe(services);
    if (portfolio) observer.observe(portfolio);
    if (client) observer.observe(client);
    if (contact) observer.observe(contact);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const visibility = entry.isIntersecting;
        if (visibility) {
          setActiveNav(entry.target.id);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 1.0,
      }
    );
    observerTabs(observer);
    return () => observer.disconnect();
  }, []);

  return (
    <header
      id="header"
      className="fixed top-0 z-20 w-full transition-all ease-in-out duration-500"
      style={{
        backgroundColor: !scrollY ? 'transparent' : '#212529',
      }}
    >
      <nav className="flex relative items-center h-20 justify-between">
        <div className="flex md:ml-20 ml-8">
          <Link to="/" className="font-bold text-2xl">
            Christopher
          </Link>
        </div>
        <div className="hidden md:flex md:mr-20 justify-between">
          <Menu
            activeNav={activeNav}
            setActiveNav={(nav) => setActiveNav(nav)}
          />
        </div>
        <div className="flex gap-3 md:mr-20 mr-8 md:hidden">
          <MobileNav
            activeNav={activeNav}
            setActiveNav={(nav) => setActiveNav(nav)}
          />
          {/* <Linkedin color="white" strokeWidth={2} className="md:mr-20 mr-8" /> */}
        </div>
      </nav>
    </header>
  );
};
