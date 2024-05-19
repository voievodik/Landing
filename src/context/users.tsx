import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from 'react';
import { useGlobalUI } from './globalUI';
import { UserInterface } from 'src/interfaces/user';
import useVisible from 'src/hooks/useVisible';
import { getUsers } from 'src/services/users';
import { USER_MESSAGE_RESPONSE } from 'src/constant/messages';
import { DEFAULT_COUNT, DEFAULT_PAGE } from 'src/constant/utils';

interface Props {
  children: ReactNode;
}

interface UsersContextType {
  users: UserInterface[];
  nextLink: string | null;
  loadMoreUsers: () => void;
  loadLessUsers: () => void;
  loading: boolean;
  init: (count?: number, page?: number, initital?: boolean) => void;
}

const UsersContext = createContext<UsersContextType>({
  users: [],
  nextLink: null,
  loadMoreUsers: () => {},
  loadLessUsers: () => {},
  loading: true,
  init: () => {}
});

function UserProvider({ children }: Props) {
  const { toastSuccess, toastError } = useGlobalUI();
  const [users, setUsers] = useState<UserInterface[]>([]);
  const [nextLink, setNextLink] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(DEFAULT_PAGE);
  const loadingUsers = useVisible(true);

  const init = async (count?: number, page?: number, initital?: boolean) => {
    if (!loadingUsers.visible) loadingUsers.show();

    const response = await getUsers(count, page);

    if (response.data.success) {
      const users = response.data.users;

      if (initital) {
        setUsers(users);
      } else {
        setUsers(prev => [...prev, ...users]);
      }

      setNextLink(response.data.links.next_url);
      toastSuccess(USER_MESSAGE_RESPONSE.getListSuccess);
    } else {
      toastError(response.data.message);
    }

    loadingUsers.hide();
  };

  const loadMoreUsers = async () => {
    if (nextLink) {
      await init(DEFAULT_COUNT, currentPage + 1);
      setCurrentPage(prev => prev + 1);
    }
  };

  const loadLessUsers = async () => {
    await init(DEFAULT_COUNT, DEFAULT_PAGE, true);
    setCurrentPage(DEFAULT_PAGE);
  };

  useEffect(() => {
    init();
  }, []);

  const authContextValue: UsersContextType = {
    users,
    nextLink,
    loadMoreUsers,
    loadLessUsers,
    loading: loadingUsers.visible,
    init
  };

  return (
    <UsersContext.Provider value={authContextValue}>
      {children}
    </UsersContext.Provider>
  );
}

const useUsersList = () => useContext(UsersContext);

export { UserProvider, useUsersList };
