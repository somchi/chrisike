import Typewriter from 'typewriter-effect';

export const TypingEffect = () => {
  return (
    <Typewriter
      options={{
        strings: ['Christopher Ike', 'a Designer', 'a Video Editor'],
        autoStart: true,
        loop: true,
        wrapperClassName: 'typewriter',
        cursorClassName: 'typeCursor',
      }}
    />
  );
};
