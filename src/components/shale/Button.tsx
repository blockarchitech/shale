
import styled from 'styled-components';

/**
 * A button component.
 *
 * @component
 * @example
 * <Button value="Click me" />
 */
export const Button = styled.input.attrs({ type: 'button' })`
  width: 60%;
  height: 35px;
  background-color: ${({ theme }) => theme.colors.orange};
  border-radius: ${({ theme }) => theme.borderRadius};
  color: white;
  font-size: 0.8em;
  border: none;
  appearance: none;
`;
