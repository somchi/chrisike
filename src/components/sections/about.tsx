import { Separator } from '../separetor';
import { forwardRef } from 'react';

export const About = forwardRef<
  HTMLSelectElement,
  React.HTMLAttributes<HTMLSelectElement>
>(({ ...props }, ref) => {
  return (
    <section
      id="about"
      className="md:px-5 px-10 py-20 max-w-screen-2xl grid justify-self-center"
      ref={ref}
    >
      <div className="grid items-center gap-2 justify-center mb-10">
        <h1 className="font-bold text-4xl text-center">About Me</h1>
        <div className="h-1 w-20 bg-green-400 justify-self-center flex"></div>
      </div>
      <div className="grid md:flex gap-20">
        <div className="md:w-2/3">
          <h2 className="font-semibold text-3xl md:text-start text-center">
            I&apos;m{' '}
            <strong className="text-green-400 font-medium">
              Christopher Ike
            </strong>
          </h2>
          <div className="grid gap-3 mt-3">
            <p className="text-xl font-medium text-gray-400">
              I love travels, road trips, adventures, sports, and aircraft. I
              have traveled to Dubai, Kenya, Zimbabwe, and lots to come. I like
              documentaries, wildlife, and nature.
            </p>
            <p className="text-xl font-medium text-gray-400">
              I enjoy car races, motorbikes, cycling, Skydiving, and skating
              which is one sport I am currently and actively do. I am an art
              lover, drawings, sculpting, painting, graphic and craft art, and
              anything related. I have a passion for art and at the moment I do
              pencil art, not as a career that I derive joy doing.
            </p>
            <p className="text-xl font-medium text-gray-400">
              My life is full of dreams and achievements but most importantly, I
              have a career that I was born with, a talent a gift that has been
              and will continue to be part of me. I am a WRITER. I write for a
              living; technical, content, and copywriting. I write about
              WordPress, Shopify, NFT, and others. In 2015, I was the Overall
              Best in Standard Organization of Nigeria Essay Competition.
            </p>
          </div>
        </div>
        <div className="md:w-1/3">
          <div className="flex items-center">
            <p className="text-xl font-bold">Name: </p>&nbsp;&nbsp;
            <span className="text-xl font-medium">Christopher Ike</span>
          </div>
          <Separator className="!bg-gray-600 my-3" />
          <div className="flex items-center">
            <p className="text-xl font-bold">Email: </p>&nbsp;&nbsp;
            <span className="text-xl font-medium text-green-400">
              hello@christopherike.com
            </span>
          </div>
          <Separator className="!bg-gray-600 my-3" />
          <div className="flex items-center">
            <p className="text-xl font-bold">From: </p>&nbsp;&nbsp;
            <span className="text-xl font-medium">Nigeria</span>
          </div>
          {/* <div className="mt-6">
            <button className="bg-green-500 py-3 rounded-full font-bold text-xl px-8">
              Download CV
            </button>
          </div> */}
        </div>
      </div>
    </section>
  );
});

About.displayName = 'About';
