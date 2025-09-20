
import styled from 'styled-components';

/**
 * A container for grouping related items.
 */
export const ItemContainer = styled.div`
  color: ${({ theme }) => theme.colors.darkGray};
  margin-top: 15px;
`;

/**
 * The header section of an `ItemContainer`.
 */
export const ItemContainerHeader = styled.div`
  padding: 3px 10px;
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 0.8em;
  font-weight: normal;
  color: ${({ theme }) => theme.colors.gray};
`;

/**
 * The main content area of an `ItemContainer`.
 */
export const ItemContainerContent = styled.div`
  background-color: ${({ theme }) => theme.colors.lighterGray};
  border-top: 1px solid ${({ theme }) => theme.colors.mediumLightGray};
  border-bottom: 1px solid ${({ theme }) => theme.colors.mediumLightGray};
`;

/**
 * The footer section of an `ItemContainer`.
 */
export const ItemContainerFooter = styled.div`
  padding: 3px 10px;
  font-size: 0.7em;
  line-height: 1.4em;
  color: ${({ theme }) => theme.colors.gray};
`;

/**
 * A container for centering a button.
 */
export const ButtonContainer = styled.div`
  text-align: center;
`;
