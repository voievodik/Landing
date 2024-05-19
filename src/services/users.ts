import {
  UserCreateResponse,
  UsersResponseInterface
} from 'src/interfaces/user';
import axiosInstance from 'src/lib/axios';

const USERS_BASE_PATH = '/users';

export const getUsers = async (
  count: number = 6,
  page: number = 1
): Promise<UsersResponseInterface> => {
  return await axiosInstance.get(
    `${USERS_BASE_PATH}?count=${count}&page=${page}`
  );
};

export const createUser = async (
  formData: FormData,
  token: string
): Promise<UserCreateResponse> => {
  return await axiosInstance.post(`${USERS_BASE_PATH}`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
      Token: token
    }
  });
};
