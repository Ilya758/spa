import React, { useState } from 'react';
import CheckedIcon from '@/public/svg/checked.svg';
import { StyledCheckbox, StyledCheckboxCheckedIcon } from './Checkbox.styled';

export type CheckboxProps = {
  /**
   * Specifies whether checkbox is active or not
   */
  checked?: boolean;

  /**
   * Optional onChange event-handler
   */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

/**
 * Basic checkbox for all "checked" conditions.
 */
export const Checkbox = ({ onChange, ...props }: CheckboxProps) => {
  const [checked, setChecked] = useState(false);
  const isCheckboxChecked = props.checked ?? checked;

  const onCheckboxChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    if (onChange) {
      onChange(event);
    } else {
      setChecked(!checked);
    }
  };

  return (
    <StyledCheckbox $checked={isCheckboxChecked}>
      <input onChange={onCheckboxChange} type="checkbox" {...props} />
      {isCheckboxChecked && (
        <StyledCheckboxCheckedIcon>
          <CheckedIcon />
        </StyledCheckboxCheckedIcon>
      )}
    </StyledCheckbox>
  );
};
