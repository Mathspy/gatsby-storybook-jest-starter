import React from 'react'

import { storiesOf } from '@storybook/react'

import { MemoryRouter } from 'react-router'

import Layout from '../src/components/layout/layout'

storiesOf('Layout', module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .add('passing a simple paragraph', () => (
    <Layout data={layoutData}>
      <p>Hello World!</p>
    </Layout>
  ))

const layoutData = {
  site: {
    siteMetadata: {
      title: 'test title',
    },
  },
}
