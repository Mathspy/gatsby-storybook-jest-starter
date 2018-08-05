import { configure } from '@storybook/react'
import { action } from '@storybook/addon-actions'

// Gatsby's Link overrides:
// Gatsby defines a global called ___loader to prevent its method calls from creating console errors we override it here
global.___loader = {
  enqueue: () => {},
  hovering: () => {},
}
// This is to utilise and override the window.___push method Gatsby defines and uses to report what path a Link would be taking us to if it wasn't inside a storybook
window.___push = ({ pathname, search, hash }) => {
  // Note, it is possible to output the whole location object instead of each individual properties like done below
  // It will be displayed as [Object] though and will need expanding, I personally prefer seeing the path as a single string
  action('NavigateTo:')(pathname + search + hash)
}

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /.stories.js$/)
function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
