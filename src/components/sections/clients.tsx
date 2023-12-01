import { useContext, useEffect } from 'react';
import { getReviews } from '../../_libs/apis/data';
import { AppContext } from '../../context/provider';
import { SET_REVIEWS } from '../../context/reducer';

export const Clients = () => {
  const { state, dispatch } = useContext(AppContext);

  useEffect(() => {
    let mounted = true;
    reviews(mounted);
    return () => {
      mounted = false;
    };
  }, []);

  const reviews = async (mounted: boolean) => {
    const response = await getReviews();
    if (mounted) {
      dispatch({ type: SET_REVIEWS, payload: response });
    }
  };

  const renderReviews = () => {
    return state.reviews.map((item) => (
      <div className="cursor-pointer relative h-[250px] rounded bg-gray-700/50 flex-auto">
        <img
          className="w-full h-full align-middle rounded"
          src={item.img}
          key={item.id}
          alt={item.name}
        />
      </div>
    ));
  };

  return state.reviews.length === 0 ? null : (
    <section id="client" className="grid md:px-20 px-10 py-20">
      <div className="grid items-center gap-2 justify-center mb-10">
        <h1 className="font-bold text-4xl text-center">My Clients</h1>
        <div className="h-1 w-20 bg-green-400 justify-self-center flex">
          {renderReviews()}
        </div>
      </div>
    </section>
  );
};
