import React from 'react'

import { storiesOf } from '@storybook/react'

import Header from '../src/components/header'

storiesOf('Header', module).add('default', () => <Header siteTitle="Test" />)
