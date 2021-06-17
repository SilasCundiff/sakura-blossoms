import React from 'react';
import styled from 'styled-components';
import { useNavContext } from '../NavContext';

const StyledNavItem = styled.li`
  padding: 8px 16px;

  color: ${(props) => props.theme.colors.secondaryColor};
  cursor: pointer;
  & a {
    text-decoration: none;
    color: inherit;
  }
`;

const ListItem = ({ children }) => {
  const { handleCloseNav } = useNavContext();
  return (
    <StyledNavItem onClick={handleCloseNav}>
      <a href='/'>{children}</a>
    </StyledNavItem>
  );
};

export { ListItem };
