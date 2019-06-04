
### Application Overview

Displays the list of products based on the data from the API https://api.jsonbin.io/b/5cae9a54fb42337645ebcad3

#### Contains 2 screens

- Product List screen
- Individual Product screen(On click on the product)

### Addons used
- Redux
- Redux-saga
- Sass
- axios
- react-router-dom
- grid css alone from bootstrap used

## `npm install`

Gets all the dependecies

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>

#### Using [Create React App](https://github.com/facebookincubator/create-react-app)

If you are using Create React App, instead of adding to your `package.json` as above, you will need to add a `src/setupTests.js` file to your app, to import jest-enzyme:

```js
// src/setupTests.js
import "jest-enzyme";
```