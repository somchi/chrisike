import { Designs } from '../../components/admin-sections/designs';
import AdminAuthLayout from '../../components/admin-sections/layout';
import { Reviews } from '../../components/admin-sections/reviews';
import { Users } from '../../components/admin-sections/users';
import { Videos } from '../../components/admin-sections/video';

const AdminHome = () => {
  return (
    <AdminAuthLayout>
      <main className="grid relative md:px-20 px-8">
        <div className="flex gap-6">
          <div className="grid md:w-1/2 gap-6 h-fit">
            <Users />
            <Videos />
          </div>
          <div className="grid md:w-1/2 gap-6 h-fit">
            <Designs />
            <Reviews />
          </div>
        </div>
      </main>
    </AdminAuthLayout>
  );
};
export default AdminHome;
