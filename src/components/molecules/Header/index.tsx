import { Fade } from 'react-awesome-reveal';
import { Button } from 'src/components/atoms/Button';
import { RoutesNames } from 'src/constant/routes';
import { scrollTo } from 'src/constant/scroll';

export const Header = () => {
  return (
    <Fade direction="down" triggerOnce>
      <header className="h-[3.75rem] leading-[3.75rem] sm:px-[1rem] md:px-[2rem] lg:px-[3.75rem]">
        <div className="container flex items-center justify-between">
          <a href="/">
            <img src="/logo.svg" />
          </a>
          <div className="space-x-[10px]">
            <Button title="Users" action={() => scrollTo(RoutesNames.users)} />
            <Button
              title="Sign up"
              action={() => scrollTo(RoutesNames.signUp)}
            />
          </div>
        </div>
      </header>
    </Fade>
  );
};
