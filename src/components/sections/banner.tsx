import { useContext } from 'react';
import { Overlay } from '../overlay';
import { TypingEffect } from '../typing-effect';
import { AppContext } from '../../context/provider';
import { SET_ACTIVE_NAV } from '../../context/reducer';

export const Banner = () => {
  const { dispatch } = useContext(AppContext);

  const handleClick = () => {
    // contact
    dispatch({ type: SET_ACTIVE_NAV, payload: 'contact' });
  };
  return (
    <section id="home" className="grid relative text-white">
      <div className="relative overflow-hidden">
        <Overlay />
        <div
          className="grid bg-no-repeat 
        bg-cover bg-fixed bg-center h-screen z-0 justify-center"
          style={{ backgroundImage: "url('../imgs/intro-bg.jpg')" }}
        >
          <div className="flex flex-col text-center gap-8 justify-center z-10">
            <h2 className="font-semibold text-3xl">Welcome</h2>
            <div className="grid gap-6 justify-items-center">
              <div className="flex items-center justify-center gap-2 flex-wrap">
                <h3 className="font-bold text-5xl" id="typewriter">
                  I&apos;m
                </h3>
                <TypingEffect />
              </div>

              <h4 className="font-medium text-xl">based in Lagos, Nigeria</h4>
              {/* <button
                onClick={handleClick}
                className="rounded-full text-xl text-white font-semibold w-40 py-3 border-4 border-green-400"
              >
                Hire Me
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
