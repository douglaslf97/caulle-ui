import React from 'react';
import { storiesOf } from '@storybook/react';

import { GlobalStyles, Navbar, Logo, NavItems, NavItem } from '../src';

storiesOf('Navbar', module).add('Default', () => (
  <div style={{ width: '700px' }}>
    <GlobalStyles />
    <Navbar>
      <a href="#" style={{ order: 1, marginRight: 'auto' }}>
        <Logo
          src="https://www.brandcrowd.com/gallery/brands/pictures/picture15230035508985.png" />
      </a>
      <NavItems style={{ order: 2 }}>
        <NavItem>
          <a href="#">Home</a>
        </NavItem>
        <NavItem>
          <a href="#">Services</a>
        </NavItem>
        <NavItem>
          <a href="#">About</a>
        </NavItem>
      </NavItems>
    </Navbar>
  </div>
))