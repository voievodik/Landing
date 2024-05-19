import { Fade } from 'react-awesome-reveal';
import { Button } from 'src/components/atoms/Button';
import { Title } from 'src/components/atoms/Title';
import { User } from 'src/components/atoms/User';
import { Loader } from 'src/components/templates/Loader';
import { RoutesNames } from 'src/constant/routes';
import { useUsersList } from 'src/context/users';

export const UsersList = () => {
  const { users, nextLink, loadMoreUsers, loadLessUsers, loading } =
    useUsersList();

  return (
    <div className="container space-y-[3.25rem]" id={RoutesNames.users}>
      <Title title="Working with GET request" />
      <ul className="grid grid-cols-3 gap-[2rem] md:grid-cols-2 sm:grid-cols-1">
        {users.map(user => (
          <Fade direction="up" triggerOnce key={user.id}>
            <User user={user} />
          </Fade>
        ))}
      </ul>

      {loading && (
        <div className="flex justify-center">
          <Loader className="" />
        </div>
      )}

      <div className="text-center">
        <Button
          className=""
          title={nextLink ? 'Show more' : 'Show less'}
          action={nextLink ? loadMoreUsers : loadLessUsers}
        />
      </div>
    </div>
  );
};
