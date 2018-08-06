import React from 'react'
import { StaticQuery } from 'gatsby'

import { shallow } from 'enzyme'

import Layout from '../layout/layout'
import LayoutWrapper from '../layout'

import Header from '../header'

const data = {
  site: {
    siteMetadata: {
      title: 'test title',
    },
  },
}

describe('Layout', () => {
  it('should throw if no data prop was passed to it', () => {
    expect(() => shallow(<Layout />)).toThrow()
  })

  it('should render a simple div', () => {
    const wrapper = shallow(<Layout data={data} />)

    expect(wrapper.find('div')).toHaveLength(1)
  })

  it('should contain the children passed to it', () => {
    const wrapper = shallow(
      <Layout data={data}>
        <div className="test-div" />
      </Layout>
    )

    expect(wrapper.contains(<div className="test-div" />)).toBe(true)
  })

  it('should render header with title passed inside data', () => {
    const wrapper = shallow(<Layout data={data} />)

    expect(wrapper.find(Header)).toHaveLength(1)
    expect(wrapper.find(Header).props()).toEqual({ siteTitle: 'test title' })
  })
})

describe('LayoutWrapper', () => {
  it('should be a StaticQuery component', () => {
    const wrapper = shallow(
      <LayoutWrapper>
        <div />
      </LayoutWrapper>
    )

    expect(wrapper.type()).toBe(StaticQuery)
  })

  it('should render a Layout and pass to it the correct props', () => {
    const wrapper = shallow(
      <LayoutWrapper>
        <div />
      </LayoutWrapper>
    )

    const inner = wrapper.prop('render')(data)

    expect(inner.type).toBe(Layout)
    expect(inner.props).toEqual({ data, children: <div /> })
  })
})
