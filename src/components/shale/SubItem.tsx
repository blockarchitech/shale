import React from 'react';
import styled from 'styled-components';

const SubItemWrapper = styled.div`
  position: relative;
  padding: 10px 10px 10px 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.lighterGray};
`;

const ItemTitleWrapper = styled.div``;

const ItemDescription = styled.div`
  font-size: 0.8em;
  color: ${({ theme }) => theme.colors.gray};
`;

export interface SubItemProps {
  children: React.ReactNode;
  description?: string;
}

const SubItem: React.FC<SubItemProps> = ({ children, description }) => {
  const title = React.Children.toArray(children).find(
    (child) => typeof child === 'string'
  );
  const control = React.Children.toArray(children).find(
    (child) => typeof child !== 'string'
  );

  return (
    <SubItemWrapper>
      <ItemTitleWrapper>
        {title}
        {description && <ItemDescription>{description}</ItemDescription>}
      </ItemTitleWrapper>
      {control}
    </SubItemWrapper>
  );
};

export default SubItem;
