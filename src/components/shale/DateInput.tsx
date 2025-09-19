
import React from 'react';
import styled from 'styled-components';

const DateInputWrapper = styled.div`
  position: relative;
  display: inline-block;

  input {
    appearance: none;
    border: none;
    background-color: ${({ theme }) => theme.colors.lighterGray};
    color: ${({ theme }) => theme.colors.gray};
    padding: 10px;
    border-radius: ${({ theme }) => theme.borderRadius};
    font-size: 1em;
    line-height: 1em;
    direction: rtl;
  }
`;

/**
 * Date input component.
 *
 * @component
 * @example
 * <DateInput />
 */
const DateInput: React.FC = () => {
  return (
    <DateInputWrapper>
      <input type="date" />
    </DateInputWrapper>
  );
};

export default DateInput;
