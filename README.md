<h1 align="center">
  Gatsby jest and storybook starter
</h1>

A Gatsby starter based on the default with storybook and jest pre-installed.

## 🚀 Quick start

1.  **Install the Gatsby CLI.**

    The Gatsby CLI helps you create new sites using Gatsby starters (like this one!)

    ```sh
    # install the Gatsby CLI globally
    npm install -g gatsby-cli
    ```

2.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying the default starter.

    ```sh
    # create a new Gatsby site using this starter
    gatsby new project-name https://github.com/mathspy/gatsby-storybook-jest-starter
    ```

3.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```sh
    cd project-name/
    gatsby develop
    ```

4.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    *Note: You'll also see a second link: `http://localhost:8000___graphql`. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://next.gatsbyjs.org/tutorial/part-five/#introducing-graphiql).*

    Open the `project-name` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!

5.  **Write your first story!**

    Start running Storybook's local development enviroment

    ```sh
    npm run storybook
    ```

    At first you can read the explanation for what are stories and how using them differ with Gatsby in the "Welcome" story. Open the `stories` directory in your code editor of choice and edit existing or create new stories (which should all end with `.stories.js`). Save your changes and the browser will update in real time with your components' stories!

6.  **Test your first React component!**

    You can start running Jest's watch functionality

    ```sh
    npm run test:watch
    ```

    Testing Gatsby components is pretty straight forward if you have any experience with testing React components in general, otherwise you can start you testing journey in [the Jest docs](https://jestjs.io/docs/en/tutorial-react) and by checking out the simple test I wrote in `/src/components/__tests__/layout.test.js`

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── __mocks__
    ├── .storybook
    ├── node_modules
    ├── src
    ├── stories
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── jest-preprocess.js
    ├── LICENSE
    ├── loadershim.js
    ├── package-lock.json
    ├── package.json
    ├── README.md
    ├── setupTest.js
    └── yarn.lock


  1.  **`/.storybook`**: The directory that contains all configurations for [Storybook](https://storybook.js.org) and its add-ons

  2.  **`/node_modules`**: The directory where all of the modules of code that your project depends on (npm packages) are automatically installed.

  3.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser), like your site header, or a page template. “Src” is a convention for “source code”.

  4.  **`/stories`**: This directory contains all stories for [Storybook](https://storybook.js.org)! You might want to change the location of this directory, in that case just move it and change the `../stories` reference inside of `.storybook/config.js` to point to the new location

  5.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

  6.  **`.prettierrc`**: This is a configuration file for a tool called [Prettier](https://prettier.io/), which is a tool to help keep the formatting of your code consistent.

  7.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://next.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

  8.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://next.gatsbyjs.org/docs/gatsby-config/) for more detail).

  9.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby node APIs](https://next.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

  10.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://next.gatsbyjs.org/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

  11.  **`LICENSE`**: Gatsby is licensed under the MIT license.

  12.  **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. (You won’t change this file directly).

  13.  **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

  14.  **`README.md`**: A text file containing useful reference information about your project.

  15.  **`yarn.lock`**: [Yarn](https://yarnpkg.com/) is a package manager alternative to npm. You can use either yarn or npm, though all of the Gatsby docs reference npm.  This file serves essentially the same purpose as `package-lock.json`, just for a different package management system.

  16.  **`__mocks__`**, **`jest-preprocess.js`**, **`loadershim.js`**, **`setupTest.js`**: are all files/folders needed to configure [Jest](https://jestjs.io) to work properly with Gatsby, more can be learnt about that [here](https://github.com/gatsbyjs/gatsby/pull/6678). Many thanks to [@ascorbic](https://github.com/ascorbic/) for writing this out, doubt I would have been able to find out how to get everything working without the amazing write-up.

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://next.gatsbyjs.org/). Here are some places to start:

-   **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://next.gatsbyjs.org/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

-   **To dive straight into code samples head [to our documentation](https://next.gatsbyjs.org/docs/).** In particular, check out the “Guides”, API reference, and “Advanced Tutorials” sections in the sidebar.

## 💫 Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/mathspy/gatsby-storybook-jest-starter)
