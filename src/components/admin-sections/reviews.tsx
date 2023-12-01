import { Pencil } from 'lucide-react';
import { Review } from '../../_libs/types';
import { useContext, useEffect } from 'react';
import { AppContext } from '../../context/provider';
import { deleteReview, getReviews } from '../../_libs/apis/data';
import { SET_REVIEWS } from '../../context/reducer';

const Item = ({ review }: { review: Review }) => {
  const { dispatch } = useContext(AppContext);
  const handleClick = async () => {
    await deleteReview(review);
    const data = await getReviews();
    dispatch({ type: SET_REVIEWS, payload: data });
  };
  return (
    <div className="grid gap-2">
      <div className="flex justify-between">
        <span className="font-medium">{review.name}</span>
        <div className="flex gap-4">
          <div className="cursor-pointer" onClick={handleClick}>
            <Pencil size={15} />
          </div>
        </div>
      </div>
      <img src={review.img} width={250} height={250} alt="" />
    </div>
  );
};

export const Reviews = () => {
  const { state, dispatch } = useContext(AppContext);

  useEffect(() => {
    let mounted = true;
    if (state.videos.length === 0 && mounted) {
      getReviews().then((res) => {
        dispatch({ type: SET_REVIEWS, payload: res });
      });
    }
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div className="shadow-xl rounded p-5">
      <h2 className="font-bold text-xl">Reviews</h2>
      <div className="flex flex-wrap gap-x-3 gap-y-2 mt-4">
        {state.reviews.map((item) => (
          <Item key={item.id} review={item} />
        ))}
      </div>
    </div>
  );
};
