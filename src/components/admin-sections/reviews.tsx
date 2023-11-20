import { Pencil, Trash2 } from 'lucide-react';
import { Review } from '../../_libs/types';

const Item = ({ review }: { review: Review }) => {
  return (
    <div className="grid gap-2">
      <div className="flex justify-between">
        <span className="font-medium">{review.name}</span>
        <div className="flex gap-4">
          <div className="cursor-pointer">
            <Pencil size={15} />
          </div>
          <div className="cursor-pointer">
            <Trash2 size={15} />
          </div>
        </div>
      </div>
      <img src={'/imgs/intro-bg.jpg'} width={320} height={300} alt="" />
    </div>
  );
};

export const Reviews = () => {
  return (
    <div className="shadow-xl rounded p-5">
      <h2 className="font-bold text-xl">Reviews</h2>
      <div className="flex flex-wrap gap-x-3 gap-y-2 mt-4">
        <Item review={{ name: 'Clement', img: '' }} />
        <Item review={{ name: 'Clement', img: '' }} />
        <Item review={{ name: 'Clement', img: '' }} />
        <Item review={{ name: 'Clement', img: '' }} />
        <Item review={{ name: 'Clement', img: '' }} />
      </div>
    </div>
  );
};
