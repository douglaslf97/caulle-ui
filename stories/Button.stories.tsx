import React from 'react';
import { storiesOf } from '@storybook/react';

import { Button, GlobalStyles } from '../src';

storiesOf('Button', module).add('Default', ()=> <><GlobalStyles /><Button /></>)