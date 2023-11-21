import { Overlay } from '../overlay';
import { TypingEffect } from '../typing-effect';

export const Banner = () => {
  return (
    <section id="home" className="grid relative text-white">
      <div className="relative overflow-hidden">
        <Overlay />
        <div
          id="banner"
          className="grid bg-no-repeat 
        bg-cover bg-fixed bg-center h-screen z-0 justify-center"
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
