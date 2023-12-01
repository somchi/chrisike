import { Pencil } from 'lucide-react';
import { Video } from '../../_libs/types';
import { useContext, useEffect } from 'react';
import { AppContext } from '../../context/provider';
import { deleteVideo, getVideos } from '../../_libs/apis/data';
import { SET_VIDEOS } from '../../context/reducer';

const Item = ({ video }: { video: Video }) => {
  const { dispatch } = useContext(AppContext);
  const handleClick = async () => {
    await deleteVideo(video);
    const data = await getVideos();
    dispatch({ type: SET_VIDEOS, payload: data });
  };
  return (
    <div className="grid gap-2 ">
      <div className="flex justify-between">
        <div className="flex gap-4">
          <div className="cursor-pointer" onClick={handleClick}>
            <Pencil size={15} />
          </div>
        </div>
      </div>
      <video width="320" height="300" controls>
        <source src={video.video} type="video/mp4" />
        <source src={video.video} type="video/ogg" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export const Videos = () => {
  const { state, dispatch } = useContext(AppContext);

  useEffect(() => {
    let mounted = true;
    if (state.videos.length === 0 && mounted) {
      getVideos().then((res) => {
        dispatch({ type: SET_VIDEOS, payload: res });
      });
    }
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div className="shadow-xl rounded p-5">
      <h2 className="font-bold text-xl">Videos</h2>
      <div className="flex flex-wrap gap-x-3 gap-y-2 mt-4">
        {state.videos.map((item) => (
          <Item key={item.id} video={item} />
        ))}
      </div>
    </div>
  );
};
