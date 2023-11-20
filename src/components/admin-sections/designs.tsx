import { Pencil, Trash2 } from 'lucide-react';
import { Design } from '../../_libs/types';

const Item = ({ design }: { design: Design }) => {
  return (
    <div className="grid gap-2">
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
      <img src={'/imgs/intro-bg.jpg'} width={320} height={300} alt="" />
    </div>
  );
};

export const Designs = () => {
  return (
    <div className="shadow-xl rounded p-5">
      <h2 className="font-bold text-xl">Desgin</h2>
      <div className="flex flex-wrap gap-x-3 gap-y-2 mt-4">
        <Item design={{ name: 'Clement', img: '' }} />
        <Item design={{ name: 'Clement', img: '' }} />
        <Item design={{ name: 'Clement', img: '' }} />
        <Item design={{ name: 'Clement', img: '' }} />
        <Item design={{ name: 'Clement', img: '' }} />
      </div>
    </div>
  );
};
