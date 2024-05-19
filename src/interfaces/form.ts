import {
  ControllerRenderProps,
  FieldErrors,
  FieldValues
} from 'react-hook-form';

export interface FieldPropsType {
  field: ControllerRenderProps<FieldValues, string>;
  className?: string;
  classNameInput?: string;
  note?: string;
  type?: string;
  name: string;
  placeholder?: string;
  icon?: string;
  disabled?: boolean;
  errors?: FieldErrors;
  charCount?: boolean;
  onInput?: () => void;
  classNameLabel?: string;
  options?: {
    id: number;
    name: string;
  }[];
  title?: string;
}

export type FieldValueType = {
  note?: string;
  type?: string;
  name: string;
  placeholder?: string;
  icon?: string;
  disabled?: boolean;
  checkboxLabel?: string;
  onChecker?: ((value: boolean) => void) | null;
  className?: string;
  value?: string | string[];
  visible?: boolean;
  max?: number;
  passwordIcon?: boolean;
  classNameLabel?: string;
};
