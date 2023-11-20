import AdminAuthLayout from '../../components/admin-sections/layout';
import { ReviewForm } from '../../components/forms/review-form';

const AddReview = () => {
  return (
    <AdminAuthLayout>
      <div className="md:mx-20 mx-8 mt-5">
        <div className="grid md:w-1/4">
          <ReviewForm />
        </div>
      </div>
    </AdminAuthLayout>
  );
};
export default AddReview;
