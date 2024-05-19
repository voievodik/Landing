import { yupResolver } from '@hookform/resolvers/yup';
import { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { FORM_INPUT_TYPE } from 'src/constant/form';
import { regex, requiredFiled } from 'src/constant/validations';
import * as yup from 'yup';
import { usePositionsList } from '../usePositionsList';

export const useUserFormData = () => {
  const { positions, loading: loadingPosition } = usePositionsList();

  const USER_CREATE_SCHEMA = useMemo(() => {
    return yup.object({
      name: yup
        .string()
        .required(requiredFiled('First Name'))
        .matches(regex.fullName.pattern, regex.fullName.message)
        .min(2)
        .max(60),
      email: yup
        .string()
        .required('Please enter your email address')
        .matches(regex.email.pattern, regex.email.message),
      phone: yup
        .string()
        .required(requiredFiled('Phone'))
        .matches(regex.phone.pattern, regex.phone.message),
      position_id: yup
        .number()
        .required(requiredFiled('Position'))
        .default(positions[0]?.id),
      photo: yup.mixed().required(requiredFiled('Photo'))
    });
  }, [positions]);

  const useUserCreateForm = useForm({
    resolver: yupResolver(USER_CREATE_SCHEMA)
  });

  const USER_CREATE_FIELDS = useMemo(() => {
    return [
      {
        name: 'name',
        placeholder: 'Your name',
        type: FORM_INPUT_TYPE.TEXT,
        required: true,
        classNameInput: ''
      },
      {
        name: 'email',
        placeholder: 'Email',
        type: FORM_INPUT_TYPE.TEXT,
        required: true,
        classNameInput: ''
      },
      {
        name: 'phone',
        placeholder: 'Phone',
        type: FORM_INPUT_TYPE.PHONE,
        required: true,
        classNameInput: ''
      },
      {
        name: 'position_id',
        placeholder: 'position',
        type: FORM_INPUT_TYPE.RADIOGROUP,
        required: true,
        classNameInput: '',
        options: positions,
        title: 'Select your position'
      },
      {
        name: 'photo',
        placeholder: 'file',
        type: FORM_INPUT_TYPE.FILE,
        required: true,
        classNameInput: ''
      }
    ];
  }, [positions]);

  return { USER_CREATE_FIELDS, useUserCreateForm, loadingPosition };
};
