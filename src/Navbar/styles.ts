import styled from 'styled-components';
import { Props } from '.'

export const Container = styled.nav<Props>`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  background-color: ${({backgroundColor}) => backgroundColor};
`;
