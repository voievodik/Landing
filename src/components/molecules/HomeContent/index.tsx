import { Fade } from 'react-awesome-reveal';
import { Button } from 'src/components/atoms/Button';
import { RoutesNames } from 'src/constant/routes';
import { scrollTo } from 'src/constant/scroll';

export const HomeContent = () => {
  return (
    <Fade direction="up" triggerOnce>
      <div className="container relative">
        <div className="home-background absolute z-[-1]"></div>
        <div className="w-full min-h-[650px] flex justify-center items-center">
          <div className="max-w-[23.75rem] text-center text-white sm:px-[1rem]">
            <h1 className="text-xl mb-[1.25rem]">
              Test assignment for front-end developer
            </h1>
            <p className="text-base mb-[2rem]">
              What defines a good front-end developer is one that has skilled
              knowledge of HTML, CSS, JS with a vast understanding of User
              design thinking as they&#39;ll be building web interfaces with
              accessibility in mind. They should also be excited to learn, as
              the world of Front-End Development keeps evolving.
            </p>
            <Button
              title="Sign up"
              action={() => scrollTo(RoutesNames.signUp)}
              className="text-black"
            />
          </div>
        </div>
      </div>
    </Fade>
  );
};
