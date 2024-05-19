import type { AxiosError, AxiosResponse } from 'axios';
import axios from 'axios';

const BASE_URI = import.meta.env.VITE_APP_BACKEND_URL;

const AxiosGlobalConfig = () => {
  function handleSuccess(response: AxiosResponse) {
    return response;
  }

  function handleError(error: AxiosError) {
    const responseData = error.response?.data as { message: string };
    const customError = {
      error: {
        message: responseData?.message,
        data: responseData
      }
    };
    return customError;
  }

  const instance = axios.create({
    baseURL: BASE_URI,
    headers: {
      'Content-Type': 'application/json'
    }
  });

  instance.interceptors.response.use(handleSuccess, handleError);

  return instance;
};

const axiosInstance = AxiosGlobalConfig();
export default axiosInstance;
