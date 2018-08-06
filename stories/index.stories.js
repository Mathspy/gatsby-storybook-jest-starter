import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import { Button, Welcome } from '@storybook/react/demo'

storiesOf('Welcome', module)
  .add('to Storybook', () => <Welcome showApp={linkTo('Button')} />)
  .add('with Gatsby!', () => (
    <div
      style={{
        margin: '15px',
        maxWidth: '600px',
        fontFamily:
          '"Helvetica Neue", Helvetica, "Segoe UI", Arial, freesans, sans-serif',
      }}
    >
      <h1>Using storybook with Gatsby!</h1>
      <p>
        You can read more about what Storybook itself does and how here:{' '}
        <button
          style={buttonStyles}
          onClick={linkTo('Welcome', 'to Storybook')}
        >
          Welcome to Storybook
        </button>
      </p>
      <p>
        Using Storybook with Gatsby is the exact same for most components, for
        example the header component did not need any modification and we were
        able to write stories directly for it as demonstrated here:{' '}
        <button style={buttonStyles} onClick={linkTo('Header')}>
          Header Story
        </button>
      </p>
      <hr />
      <p>
        Things do get a little bit tricky once pages or other components that
        use GraphQL gets involved though.
      </p>
      <div>
        Instead of attempting to override <code>graphql</code> or{' '}
        <code>StaticQuery</code>, we can decouple our queries from components by
        creating folder components as demonstrated below:
        <ul>
          <li>
            for each component with a query (that is not inside of{' '}
            <code>/pages</code> folder) i.e <code>components/layout.js</code> we
            can create a folder named the same as the component with an{' '}
            <code>index.js</code> and
            <code>component-name.js</code> inside of it i.e:
            <code>components/layout/index.js</code> and{' '}
            <code>components/layout/layout.js</code>
            <br />
            <br />
            <span style={{ color: 'red', opacity: 0.7 }}>
              Note: For components inside of <code>/pages</code>, the component
              with the render logic should be placed somewhere else (i.e not
              inside of <code>/pages</code>, could be plaed inside of{' '}
              <code>/components</code>) because Gatsby will attempt to create an
              actual "page" out of each component in <code>/pages</code> which
              would usually work fine while developing but then will
              unexpectedly break while building for production
            </span>
          </li>
          <li>
            we move the query logic into the <code>index.js</code> file while
            moving the rendering logic for the component into the new{' '}
            <code>layout.js</code>
          </li>
          <li>
            we reference the layout component from within <code>index.js</code>{' '}
            by simply importing <code>./layout</code> (unless it's not in the
            same folder as <code>index.js</code>, like page components) and
            passing the necessary properties from the query to it
          </li>
        </ul>
        And that's all! Now you can reference <code>components/layout</code> and
        most toolings (including Gatsby itself) will see the folder and look for
        <code>index.js</code> within it. While you can reference{' '}
        <code>component/layout/layout</code>
        itself in your storybook or unit tests to use only the rendering logic
        of the component
      </div>
      <br />
      <p>
        The process described above was actually applied to layout.js which can
        be found as <code>components/layout.old.js</code> (the one that's no
        longer in use, it was commented out to prevent Gatsby from erroring) and
        the new layout pieces inside of the <code>components/layout</code> and a
        storybook was created for it here:{' '}
        <button style={buttonStyles} onClick={linkTo('Layout')}>
          Layout Story
        </button>
      </p>
    </div>
  ))

storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ))

const buttonStyles = {
  color: '#1474f3',
  textDecoration: 'none',
  borderBottom: '1px solid #1474f3',
  paddingBottom: '2px',
  borderTop: 'none',
  borderRight: 'none',
  borderLeft: 'none',
  backgroundColor: 'transparent',
  padding: 0,
  cursor: 'pointer',
  font: 'inherit',
}
