import { useCallback } from 'react';
import clsx from 'clsx';
import { Checkbox, CheckboxChangeEvent } from 'antd';
import { useStyles } from './option.styles';

export interface OptionProps<T = any> {
  id: string;
  label: string;
  value: T;
  checked: boolean;
  onChange: (value: T, checked: boolean) => void;
  className?: string;
}

export const Option = (props: OptionProps) => {
  const { root } = useStyles();
  const { id, label, value, checked, onChange, className } = props;

  const handleChange = useCallback(
    (e: CheckboxChangeEvent) => {
      const el = e.target;
      const { checked } = el;
      onChange(value, checked);
    },
    [onChange, value],
  );

  return (
    <div className={clsx(root, className)}>
      <label htmlFor={id}>{label}</label>
      <Checkbox id={id} type="checkbox" onChange={handleChange} checked={checked} />
    </div>
  );
};
