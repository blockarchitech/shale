
import React from 'react';
import styled from 'styled-components';

const CheckboxWrapper = styled.div<{ checked?: boolean }>`
  position: absolute;
  right: 10px;
  top: 10px;
  width: 21px;
  height: 21px;
  border-radius: 5px;
  border: 2px solid ${({ theme, checked }) => (checked ? theme.colors.orange : theme.colors.mediumLightGray)};
  background-color: ${({ theme, checked }) => (checked ? theme.colors.orange : 'transparent')};

  &:before {
    content: "";
    display: ${({ checked }) => (checked ? 'block' : 'none')};
    position: relative;
    left: 7px;
    width: 6px;
    height: 14px;
    border-color: ${({ theme }) => theme.colors.lighterGray};
    border-width: 0 2px 2px 0;
    border-style: solid;
    transform: rotate(45deg);
  }
`;

interface CheckboxProps {
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

/**
 * Checkbox component.
 *
 * @component
 * @param {boolean} checked - Whether the checkbox is checked.
 * @param {function} onChange - Callback when checkbox value changes.
 * @example
 * <Checkbox checked={true} onChange={handleChange} />
 */
const Checkbox: React.FC<CheckboxProps> = ({ checked, onChange }) => {
  return (
    <>
      <input type="checkbox" className="item-checkbox" checked={checked} onChange={onChange} style={{ display: 'none' }} />
      <CheckboxWrapper checked={checked} />
    </>
  );
};

export default Checkbox;
