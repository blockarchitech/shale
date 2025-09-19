
import React from 'react';
import styled from 'styled-components';

const ToggleWrapper = styled.div<{ checked?: boolean }>`
  position: absolute;
  right: 10px;
  top: 8px;
  width: 56px;
  height: 30px;
  border-radius: 5px;
  transition: background-color 0.3s ease-in-out;
  background-color: ${({ theme, checked }) => (checked ? theme.colors.orange : theme.colors.gray)};

  .item-styled-toggle {
    position: relative;
    background-color: #FFFFFF;
    width: 28px;
    height: 28px;
    border-radius: 5px;
    top: 1px;
    transition: left 0.3s ease-in-out;
    left: ${({ checked }) => (checked ? '27px' : '1px')};
  }

  .item-styled-toggle-bar {
    width: 3px;
    height: 15px;
    margin-left: 3px;
    background-color: ${({ theme }) => theme.colors.lightGray};
    float: left;
    position: relative;
    left: 4px;
    top: 7px;
  }
`;

interface ToggleProps {
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

/**
 * Toggle switch component.
 *
 * @component
 * @param {boolean} checked - Whether the toggle is on.
 * @param {function} onChange - Callback when toggle value changes.
 * @example
 * <Toggle checked={true} onChange={handleChange} />
 */
const Toggle: React.FC<ToggleProps> = ({ checked, onChange }) => {
  return (
    <>
      <input type="checkbox" className="item-toggle" checked={checked} onChange={onChange} style={{ display: 'none' }} />
      <ToggleWrapper checked={checked}>
        <div className="item-styled-toggle">
          <div className="item-styled-toggle-bar" />
          <div className="item-styled-toggle-bar" />
          <div className="item-styled-toggle-bar" />
        </div>
      </ToggleWrapper>
    </>
  );
};

export default Toggle;
