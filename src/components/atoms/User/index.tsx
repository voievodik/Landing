import { FC } from 'react';
import { Tooltip } from 'react-tooltip';
import { UserInterface } from 'src/interfaces/user';

type UserProps = {
  user: UserInterface;
};

export const User: FC<UserProps> = ({ user }) => {
  const { name, email, phone, position, photo } = user;
  const formattedName = name.length > 25 ? `${name.slice(0, 25)}...` : name;
  const formattedEmail = email.length > 25 ? `${email.slice(0, 25)}...` : email;

  return (
    <li className="p-[1.25rem] text-center space-y-[1.25rem] bg-white">
      <div className="flex justify-center">
        <img
          className="rounded-[100%]"
          width={70}
          height={70}
          src={photo}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null;
            currentTarget.src = '/public/default-avatar.png';
          }}
        />
      </div>

      <p>{formattedName}</p>

      <div>
        <p>{position}</p>
        <p
          className="cursor-pointer"
          data-tooltip-id="email"
          data-tooltip-content={email}
        >
          <Tooltip id="email" place="bottom" />
          {formattedEmail}
        </p>
        <p>{phone}</p>
      </div>
    </li>
  );
};
