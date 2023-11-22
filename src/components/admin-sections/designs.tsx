import { Pencil } from 'lucide-react';
import { Design } from '../../_libs/types';
import { Suspense, useContext, useEffect } from 'react';
import { AppContext } from '../../context/provider';
import { deleteDesign, getDesigns } from '../../_libs/apis/data';
import { SET_DESIGNS } from '../../context/reducer';

const Item = ({ design }: { design: Design }) => {
  const { dispatch } = useContext(AppContext);
  const handleClick = async () => {
    await deleteDesign(design);
    const data = await getDesigns();
    dispatch({ type: SET_DESIGNS, payload: data });
  };
  return (
    <div className="grid gap-2">
      <div className="flex justify-between">
        <div className="flex gap-4">
          <div className="cursor-pointer" onClick={handleClick}>
            <Pencil size={15} />
          </div>
        </div>
      </div>
      <img src={design.img} width={250} height={250} alt="" />
    </div>
  );
};

export const Designs = () => {
  const { state, dispatch } = useContext(AppContext);

  useEffect(() => {
    let mounted = true;
    if (state.videos.length === 0 && mounted) {
      getDesigns().then((res) => {
        dispatch({ type: SET_DESIGNS, payload: res });
      });
    }
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div className="shadow-xl rounded p-5">
      <h2 className="font-bold text-xl">Desgin</h2>
      <div className="flex flex-wrap gap-x-3 gap-y-2 mt-4">
        {state.designs?.map((item) => (
          <Suspense fallback={<p>...loading</p>}>
            <Item key={item.id} design={item} />
          </Suspense>
        ))}
      </div>
    </div>
  );
};
