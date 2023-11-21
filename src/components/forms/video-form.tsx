import { useState } from 'react';
import { Video } from '../../_libs/types';
import { DropzoneVideo } from '../admin-sections/dropzone-video';
import { FormControl } from './form-control';
import { Input } from './input';
import { Label } from './label';
import { addVideo } from '../../_libs/apis/data';
import ButtonLoader from '../admin-sections/button-loader';

export const VideoForm = () => {
  const [load, setload] = useState<boolean>(false);
  const [data, setData] = useState<{ video: any; name: string }>({
    video: '',
    name: '',
  });

  const handleFileUpload = (file: any) => {
    setData({ ...data, video: file });
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const field = e.target.name;
    const value = e.target.value;
    setData({ ...data, [field]: value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setload(true);
    const date: any = new Date();
    const payload: Video = {
      ...data,
      dateCreate: date,
    };
    await addVideo(payload);
    setload(false);
  };
  return (
    <form onSubmit={handleSubmit}>
      <FormControl>
        <Label>Name</Label>
        <Input
          placeholder="Enter name"
          className="font-medium"
          name="name"
          onChange={handleChange}
        />
      </FormControl>
      <FormControl>
        <Label>Video</Label>
        <DropzoneVideo setFile={handleFileUpload} />
      </FormControl>
      <FormControl>
        <button
          type="submit"
          className="rounded-full w-80 bg-green-600 text-white py-3 px-1 text-lg font-semibold"
          disabled={load}
        >
          {load && <ButtonLoader />} Submit
        </button>
      </FormControl>
    </form>
  );
};
