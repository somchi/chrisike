import AdminAuthLayout from '../../components/admin-sections/layout';
import { VideoForm } from '../../components/forms/video-form';

const AddVideo = () => {
  return (
    <AdminAuthLayout>
      <div className="md:mx-20 mx-8 mt-5">
        <div className="grid md:w-1/4">
          <VideoForm />
        </div>
      </div>
    </AdminAuthLayout>
  );
};
export default AddVideo;
