import { AdminMenu } from './menu';
import { MobileMenu } from './mobile-menu';
import { HomeMenu } from './home-menu';

export const AdminHeader = () => {
  return (
    <nav className="flex items-center bg-slate-700 shadow-lg h-20 justify-between">
      <HomeMenu />
      <div className="md:mr-20 mr-8">
        <div className="hidden md:flex justify-between">
          <AdminMenu />
        </div>
        <MobileMenu />
      </div>
    </nav>
  );
};
