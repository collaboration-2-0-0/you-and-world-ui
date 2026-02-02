import { Checkbox, CheckboxChangeEvent } from 'antd';
import { useStyles } from './option.styles';
import { useCallback } from 'react';

export interface OptionProps<T = any> {
  id: string;
  label: string;
  value: T;
  checked: boolean;
  onChange: (value: T, checked: boolean) => void;
}

export const Option = (props: OptionProps) => {
  const { root } = useStyles();
  const { id, label, value, checked, onChange } = props;

  const handleChange = useCallback(
    (e: CheckboxChangeEvent) => {
      const el = e.target;
      const { checked } = el;
      onChange(value, checked);
    },
    [onChange, value],
  );

  return (
    <div className={root}>
      <label htmlFor={id}>{label}</label>
      <Checkbox id={id} type="checkbox" onChange={handleChange} checked={checked} />
    </div>
  );
};
