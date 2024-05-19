import { TokenResponseInterface } from 'src/interfaces/token';
import axiosInstance from 'src/lib/axios';

export const getToken = async (): Promise<TokenResponseInterface> => {
  return await axiosInstance.get('token');
};
