
import React from 'react';
import styled, { css } from 'styled-components';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'danger';
  children: React.ReactNode;
}

const buttonStyles = css<ButtonProps>`
  height: 35px;
  border-radius: ${({ theme }) => theme.borderRadius};
  color: white;
  font-size: 0.8em;
  border: none;
  appearance: none;
  padding: 0 20px;

  ${({ variant, theme }) => {
    switch (variant) {
      case 'secondary':
        return css`
          background-color: ${theme.colors.darkGray};
        `;
      case 'danger':
        return css`
          background-color: ${theme.colors.red};
        `;
      default:
        return css`
          background-color: ${theme.colors.orange};
        `;
    }
  }}
`;

const StyledButton = styled.button<ButtonProps>`
  ${buttonStyles}
`;

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
}) => {
  return <StyledButton variant={variant}>{children}</StyledButton>;
};

export default Button;

export const ButtonRow = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
`;
