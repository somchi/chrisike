import { Pencil, Trash2 } from 'lucide-react';
import { Video } from '../../_libs/types';

const Item = ({ video }: { video: Video }) => {
  return (
    <div className="grid gap-2 ">
      <div className="flex justify-between">
        <div className="flex gap-4">
          <div className="cursor-pointer">
            <Pencil size={15} />
          </div>
          <div className="cursor-pointer">
            <Trash2 size={15} />
          </div>
        </div>
      </div>
      <video width="320" height="300" controls>
        <source src="/video.mp4" type="video/mp4" />
        <source src="/movie.3gp" type="video/ogg" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export const Videos = () => {
  return (
    <div className="shadow-xl rounded p-5">
      <h2 className="font-bold text-xl">Videos</h2>
      <div className="flex flex-wrap gap-x-3 gap-y-2 mt-4">
        <Item video={{ name: 'Clement', video: '' }} />
        <Item video={{ name: 'Clement', video: '' }} />
        <Item video={{ name: 'Clement', video: '' }} />
        <Item video={{ name: 'Clement', video: '' }} />
        <Item video={{ name: 'Clement', video: '' }} />
      </div>
    </div>
  );
};
