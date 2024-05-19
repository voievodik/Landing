import { FieldValues } from 'react-hook-form';
import { DEFAULT_COUNT, DEFAULT_PAGE } from 'src/constant/utils';
import { useGlobalUI } from 'src/context/globalUI';
import { useUsersList } from 'src/context/users';
import { getToken } from 'src/services/token';
import { createUser } from 'src/services/users';
import useVisible from '../useVisible';

export const useCreateUser = () => {
  const success = useVisible(false);
  const { toastError, toastSuccess } = useGlobalUI();
  const { init } = useUsersList();

  const handleSubmit = async (data: FieldValues) => {
    const formData = new FormData();
    formData.append('name', data?.name);
    formData.append('email', data?.email);
    formData.append('phone', data?.phone);
    formData.append('position_id', data?.position_id);
    formData.append('photo', data?.photo);

    const responseToken = await getToken();

    if (responseToken.data.success) {
      const response = await createUser(formData, responseToken.data.token);

      if (response.data?.success) {
        toastSuccess(response.data.message);
        await init(DEFAULT_COUNT, DEFAULT_PAGE, true);
        success.show();
      } else {
        const errors = response?.error?.data?.fails || {};
        const message = errors[Object.keys(errors)[0]];

        toastError(message || response.error.message);
      }
    }
  };

  const backToForm = () => {
    success.hide();
  };

  return { handleSubmit, success: success.visible, backToForm };
};
