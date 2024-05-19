import { FC } from 'react';
import { twMerge } from 'tailwind-merge';

type LoaderProps = {
  className?: string;
};

export const Loader: FC<LoaderProps> = ({ className }) => {
  return <div className={twMerge('loader', className)}></div>;
};
