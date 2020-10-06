import React from 'react';
import { Container } from './styles';

export interface Props {
  color?: string;
  backgroundColor?: string
}
export const Navbar: React.FC<Props> = ({children, backgroundColor = '#121212'}) => {
  return <Container backgroundColor={backgroundColor}>{children}</Container>;
}
