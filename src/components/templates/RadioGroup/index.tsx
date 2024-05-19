import { FC, useState } from 'react';

type RadioGroupProps = {
  title: string;
  name: string;
  options: {
    id: number;
    name: string;
  }[];
  onChange: (value: number) => void;
};

export const RadioGroup: FC<RadioGroupProps> = ({
  name,
  options,
  title,
  onChange
}) => {
  const [value, setValue] = useState(options[0]?.id);

  const onOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(e.target.id));
    onChange(Number(e.target.id));
  };

  return (
    <div>
      <h3>{title}</h3>

      <ul className="flex flex-col">
        {options.map(option => (
          <li className="flex items-center gap-[0.75rem]" key={option.id}>
            <input
              type="radio"
              name={name}
              value={option.name}
              id={option.id.toString()}
              checked={value === option.id}
              onChange={onOptionChange}
            />
            <label htmlFor={option.id.toString()}>{option.name}</label>
          </li>
        ))}
      </ul>
    </div>
  );
};
