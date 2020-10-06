import styled from 'styled-components';
import { Props } from '.'

export const Container = styled.nav<Props>`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background-color: ${({backgroundColor}) => backgroundColor};
  padding: 0px 10px;
`;

export const Logo = styled.img`
  height: 60px;
  width: auto;
  object-fit: contain;
  filter: brightness(0.8);
`

export const NavItems = styled.ul`
  margin: 0 10px;
  list-style-type: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const NavItem = styled.li`
  a {
    font-family: 'Montserrat', sans-serif;
    color: #fff;
    text-decoration: none;
    font-size: 14px;
    font-weight: 500;
    transition: color 0.5s ease;
  }
  a:hover {
    color: #4287f5;
  }
  padding: 5px 10px;
`
