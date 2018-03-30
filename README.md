Interactive ICO
=========================

An open source project for implementing the Interactive ICO. Initial commit [forked from Kleros](https://github.com/kleros).

## Get Started

1. Clone this repo.
2. Install and set up the [MetaMask](https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en) chrome extension.
3. Configure MetaMask on the Kovan Test Network.
4. Run `yarn` to install dependencies and then `yarn start` to start the dev server.

## Other Scripts

* `yarn run prettify` - Apply prettier to the entire project.
* `yarn run lint:scss` - Lint the entire project's .scss files.
* `yarn run lint:js` - Lint the entire project's .js files.
* `yarn run lint:scss --fix` - Fix fixable linting errors in .scss files.
* `yarn run lint:js --fix` - Fix fixable linting errors in .js files.
* `yarn run lint` - Lint the entire project's .scss and .js files.
* `yarn test` - Run the jest test suites + storyshots.
* `yarn run storybook` - Start the storybook.
* `yarn run cz` - Run commitizen.
* `yarn run build` - Create a production build.
* `yarn run build:analyze` - Analyze the production build using source-map-explorer.

## Testing

Storybook Storyshots for `components` and jest integration tests for `containers`.
