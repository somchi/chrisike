import { useState } from 'react';
import { DropZone } from '../admin-sections/drop-zone';
import { FormControl } from './form-control';
import { Input } from './input';
import { Label } from './label';
import { addReviews } from '../../_libs/apis/data';
import { Review } from '../../_libs/types';

export const ReviewForm = () => {
  const [data, setData] = useState<{ img: any; name: string }>({
    img: '',
    name: '',
  });

  const handleFileUpload = (file: any) => {
    setData({ ...data, img: file });
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const field = e.target.name;
    const value = e.target.value;
    setData({ ...data, [field]: value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const date: any = new Date();
    const payload: Review = {
      ...data,
      dateCreate: date,
    };
    await addReviews(payload);
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
        <Label>Image</Label>
        <DropZone setFile={handleFileUpload} />
      </FormControl>
      <FormControl>
        <button className="rounded-full w-80 bg-green-600 text-white py-3 px-1 text-lg font-semibold">
          Submit
        </button>
      </FormControl>
    </form>
  );
};
