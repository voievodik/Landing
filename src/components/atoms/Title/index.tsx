import { FC } from 'react';
import { Fade } from 'react-awesome-reveal';
import { twMerge } from 'tailwind-merge';

type TitleProps = {
  title: string;
  className?: string;
};

export const Title: FC<TitleProps> = ({ title, className }) => {
  return (
    <Fade direction="right" triggerOnce>
      <h2
        className={twMerge(
          'text-black text-xl text-center sm:px-[1rem]',
          className
        )}
      >
        {title}
      </h2>
    </Fade>
  );
};
