import { useMemo, useState } from 'react';
import { FORM_INPUT_TYPE } from 'src/constant/form';
import { FieldPropsType } from 'src/interfaces/form';
import { twMerge } from 'tailwind-merge';
import { RadioGroup } from '../RadioGroup';
import { FileUpload } from '../FileUpload';

const Field = ({
  name,
  errors,
  field,
  className,
  classNameInput,
  note,
  type,
  placeholder,
  icon,
  disabled,
  options,
  title
}: FieldPropsType) => {
  const [isFocused, setIsFocused] = useState(false);

  const hasError = useMemo(() => {
    return errors && errors[name] && errors[name]?.message;
  }, [errors, errors?.[name], errors?.[name]?.message]);

  const inputClass = useMemo(() => {
    return twMerge(
      `w-full min-w-[23.75rem] sm:min-w-[20.5rem] h-[54px] px-[1rem] py-[14px] border text-gray-2 outline-none rounded-[0.25rem] ${
        disabled ? 'opacity-50' : 'opacity-100'
      } ${hasError ? 'border-error' : ' border-gray-1'}`
    );
  }, [icon, hasError]);

  const renderField = () => {
    switch (type) {
      case FORM_INPUT_TYPE.RADIOGROUP:
        return (
          <RadioGroup
            name={name}
            options={options || []}
            title={title || ''}
            onChange={value => field.onChange(value)}
          />
        );
      case FORM_INPUT_TYPE.FILE:
        return (
          <FileUpload
            hasErorr={Boolean(errors && errors[name] && errors[name]?.message)}
            onChange={value => field.onChange(value)}
          />
        );
      default:
        return (
          <>
            <input
              {...field}
              value={field?.value || ''}
              name={name}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              className={`${inputClass} ${classNameInput}`}
              type={type || 'text'}
              placeholder={placeholder}
              disabled={disabled}
            />
            {type === FORM_INPUT_TYPE.PHONE && (
              <span className="text-gray-2 text-xs flex mt-[0.25rem]">
                +38 (XXX) XXX - XX - XX
              </span>
            )}
          </>
        );
    }
  };
  return (
    <div className={twMerge(`${className} relative`)}>
      <label
        className={twMerge(
          `${isFocused ? 'absolute z-50 top-[-8px] left-[10px] bg-white px-[5px] text-xs' : 'hidden'}`,
          hasError ? 'text-error' : 'text-gray-2 '
        )}
      >
        {placeholder}
      </label>
      <div className="relative w-full">{renderField()}</div>
      {note && <div className="mt-2 base2 text-n-4/50">{note}</div>}
      {hasError && (
        <p className={`text-error text-sm font-normal italic`}>
          {String(errors?.[name]?.message)}
        </p>
      )}
    </div>
  );
};

export default Field;
