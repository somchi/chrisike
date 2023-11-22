import React, { useContext, useEffect, useState } from 'react';
import { getDesigns, getVideos } from '../_libs/apis/data';
import { AppContext } from '../context/provider';
import { SET_DESIGNS, SET_VIDEOS } from '../context/reducer';

export const Tabs = () => {
  const [activeTab, setActiveTab] = useState<string>('design');
  const { state, dispatch } = useContext(AppContext);
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>, tab: string) => {
    e.preventDefault();
    setActiveTab(tab);
  };

  useEffect(() => {
    let mounted = true;
    getWorks(mounted);
    return () => {
      mounted = false;
    };
  }, []);

  const getWorks = async (mounted: boolean) => {
    const designs = getDesigns();
    const videos = getVideos();

    const [designData, videoData] = await Promise.all([designs, videos]);
    if (mounted && designData) {
      dispatch({ type: SET_DESIGNS, payload: designData });
    }
    if (mounted && videoData) {
      dispatch({ type: SET_VIDEOS, payload: videoData });
    }
  };
  const renderDesigns = () => {
    return state.designs.map((item) => (
      <div
        key={item.id}
        className="cursor-pointer relative h-[250px] rounded bg-gray-700/50 flex-auto"
      >
        <img
          className="w-full h-full align-middle rounded object-contain xs:object-cover"
          src={item.img}
          key={item.id}
          alt={item.name}
        />
      </div>
    ));
  };
  const renderVideos = () => {
    return state.videos.map((item) => (
      <div
        key={item.id}
        className="cursor-pointer  relative h-[250px] rounded bg-gray-700/50 flex-auto"
      >
        <video
          className="w-full h-full align-middle rounded object-contain xs:object-cover"
          controls
        >
          <source type="video/mp4" src={item.video} />
        </video>
      </div>
    ));
  };
  return (
    <div className="grid">
      <div className="flex justify-center mb-5 gap-8 text-lg font-medium relative">
        <button
          className={`${
            activeTab === 'design' ? 'text-green-400' : 'text-gray-300'
          }`}
          onClick={(e) => handleClick(e, 'design')}
        >
          Designs
        </button>
        <button
          className={`${
            activeTab === 'video' ? 'text-green-400' : 'text-gray-300'
          }`}
          onClick={(e) => handleClick(e, 'video')}
        >
          Videos
        </button>
      </div>
      <div className="flex flex-wrap justify-center gap-3 after:content-[''] xs:after:grow-[999]">
        {activeTab === 'design' ? renderDesigns() : renderVideos()}
      </div>
    </div>
  );
};
