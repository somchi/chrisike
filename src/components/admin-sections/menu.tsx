'use client';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AdminPages } from '../../_libs/enums';
import {
  CLEINT_REVIEW,
  DESIGN,
  LOGIN,
  VIDEO,
} from '../../_libs/site-navigation';
import { Separator } from '../separetor';
import { AppContext } from '../../context/provider';
import { SET_ACTIVE_NAV } from '../../context/reducer';
import { logOut } from '../../_libs/apis/auth';

export const AdminMenu = () => {
  const { dispatch, state } = useContext(AppContext);
  const navigate = useNavigate();

  const handleClick = (nav: string) => {
    dispatch({ type: SET_ACTIVE_NAV, payload: nav });
  };

  const handleLogout = () => {
    logOut();
    navigate(LOGIN.href);
  };

  return (
    <div className="grid md:flex items-center md:gap-10 gap-2 font-medium text-lg">
      <Link
        className={`${
          state.activeNav === AdminPages.Design && 'text-green-400'
        }`}
        to={DESIGN.href}
        onClick={() => handleClick(AdminPages.Design)}
      >
        Add Design
      </Link>
      <Separator className="md:hidden !bg-slate-700" />
      <Link
        className={`${
          state.activeNav === AdminPages.Video && 'text-green-400'
        }`}
        to={VIDEO.href}
        onClick={() => handleClick(AdminPages.Video)}
      >
        Add Video
      </Link>
      <Separator className="md:hidden !bg-slate-700" />
      <Link
        to={CLEINT_REVIEW.href}
        onClick={() => handleClick(AdminPages.Review)}
        className={`${
          state.activeNav === AdminPages.Review && 'text-green-400'
        }`}
      >
        Add Review
      </Link>
      <Separator className="md:hidden !bg-slate-700" />
      {/* <Link
        className={`${state.activeNav === AdminPages.User && 'text-green-400'}`}
        to={ADD_USER.href}
        onClick={() => handleClick(AdminPages.User)}
      >
        Add User
      </Link>
      <Separator className="md:hidden !bg-slate-700" /> */}
      <button name="contact" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};
