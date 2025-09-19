
import React from 'react';
import styled from 'styled-components';

const SelectWrapper = styled.div`
  position: absolute;
  right: 0px;
  top: 0px;

  select {
    color: ${({ theme }) => theme.colors.gray};
    font-size: 1em;
    line-height: 1em;
    background-color: transparent;
    border: none;
    direction: rtl;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    padding-right: 20px;
  }

  .select-triangle {
    position: absolute;
    right: 15px;
    top: 20px;
    width: 0;
    height: 0;
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
    border-top: 7px solid ${({ theme }) => theme.colors.orange};
    pointer-events: none;
  }
`;

interface SelectProps {
    children: React.ReactNode;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

/**
 * Select dropdown component.
 *
 * @component
 * @param {React.ReactNode} children - The option elements.
 * @param {string} value - The selected value.
 * @param {function} onChange - Callback when selection changes.
 * @example
 * <Select value={val} onChange={handleChange}>
 *   <option value="1">One</option>
 * </Select>
 */
const Select: React.FC<SelectProps> = ({ children, value, onChange }) => {
    return (
        <SelectWrapper>
            <select value={value} onChange={onChange}>{children}</select>
            <div className="select-triangle"></div>
        </SelectWrapper>
    );
};

export default Select;
