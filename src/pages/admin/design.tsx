import AdminAuthLayout from '../../components/admin-sections/layout';
import { DesignForm } from '../../components/forms/design-form';

const AddDesign = () => {
  return (
    <AdminAuthLayout>
      <div className="md:mx-20 mx-8 mt-5">
        <div className="grid md:w-1/4">
          <DesignForm />
        </div>
      </div>
    </AdminAuthLayout>
  );
};
export default AddDesign;
