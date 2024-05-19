import { FC } from 'react';
import { Fade } from 'react-awesome-reveal';
import { twMerge } from 'tailwind-merge';

type ButtonType = {
  title: string;
  action?: () => void;
  className?: string;
  type?: 'submit' | 'button' | 'reset' | undefined;
  loading?: boolean;
  disabled?: boolean;
};

export const Button: FC<ButtonType> = ({
  action,
  className,
  type,
  title,
  loading,
  disabled
}) => {
  const handleClick = () => {
    if (action) {
      action();
    }
  };

  return (
    <button
      disabled={disabled}
      className={twMerge(
        'min-w-[6.25rem] py-[0.25rem] bg-primary rounded-[5rem] text-base font-nunito',
        className
      )}
      onClick={handleClick}
      type={type}
    >
      <Fade direction="right" triggerOnce>
        {loading ? '' : title}
      </Fade>
    </button>
  );
};
