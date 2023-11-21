import { useContext } from 'react';
import { AdminPages } from '../../_libs/enums';
import { Link } from 'react-router-dom';
import { ADMIN_HOME } from '../../_libs/site-navigation';
import { AppContext } from '../../context/provider';
import { SET_ACTIVE_NAV } from '../../context/reducer';

export const HomeMenu = () => {
  const { dispatch, state } = useContext(AppContext);

  const handleClick = () => {
    dispatch({ type: SET_ACTIVE_NAV, payload: AdminPages.Home });
  };
  return (
    <div className="flex md:ml-20 ml-8">
      <Link
        to={ADMIN_HOME.href}
        className={`font-bold text-2xl ${
          state.activeNav === AdminPages.Home && 'text-green-400'
        }`}
        onClick={handleClick}
      >
        Christopher
      </Link>
    </div>
  );
};
