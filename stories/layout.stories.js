import React from 'react'

import { storiesOf } from '@storybook/react'

import Layout from '../src/components/layout/layout'

storiesOf('Layout', module).add('passing a simple paragraph', () => (
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
