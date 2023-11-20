import AdminAuthLayout from '../../components/admin-sections/layout';
import { UserForm } from '../../components/forms/user-form';

const AddUser = () => {
  return (
    <AdminAuthLayout>
      <div className="md:mx-20 mx-8 mt-5">
        <div className="grid md:w-1/4">
          <UserForm />
        </div>
      </div>
    </AdminAuthLayout>
  );
};
export default AddUser;
