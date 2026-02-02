import { ChangeEvent, useCallback } from 'react';
import { useStyles } from './checkbox.styles';

export interface CheckboxProps<T = any> {
  id: string;
  label: string;
  value: T;
  checked: boolean;
  onChange: (value: T, checked: boolean) => void;
}

export const Checkbox = (props: CheckboxProps) => {
  const { root } = useStyles();
  const { id, label, value, checked, onChange } = props;

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const el = e.target;
      const { checked } = el;
      onChange(value, checked);
    },
    [onChange, value],
  );

  return (
    <div className={root}>
      <label htmlFor={id}>{label}</label>
      <input id={id} type="checkbox" onChange={handleChange} checked={checked} />
    </div>
  );
};
