import React from 'react'

import { storiesOf } from '@storybook/react'

import { MemoryRouter } from 'react-router'

import Header from '../src/components/header'

storiesOf('Header', module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .add('default', () => <Header siteTitle="Test" />)
