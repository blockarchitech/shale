import React from 'react';
import styled from 'styled-components';

const ItemWrapper = styled.label`
  position: relative;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;

  &:not(:first-child) {
    border-top: 1px solid ${({ theme }) => theme.colors.mediumLightGray};
  }
`;

const ItemTitleWrapper = styled.div``;

const ItemDescription = styled.div`
  font-size: 0.8em;
  color: ${({ theme }) => theme.colors.gray};
`;

export interface ItemProps {
  children: React.ReactNode;
  description?: string;
}

const Item: React.FC<ItemProps> = ({ children, description }) => {
  const title = React.Children.toArray(children).find(
    (child) => typeof child === 'string'
  );
  const control = React.Children.toArray(children).find(
    (child) => typeof child !== 'string'
  );

  return (
    <ItemWrapper>
      <ItemTitleWrapper>
        {title}
        {description && <ItemDescription>{description}</ItemDescription>}
      </ItemTitleWrapper>
      {control}
    </ItemWrapper>
  );
};

export default Item;
