# Navigation Component
[![Build Status](https://travis-ci.org/JaeYeopHan/Navigation_Component.svg?branch=master)](https://travis-ci.org/JaeYeopHan/Navigation_Component)  


**This is Navigation component.**  
Simply pass api and the id value of the html you want to specify as root, and the `renderOption` to complete the navigation.

## Usage
```js
const list = new ListComponent(api, '#list');
const nav = new NavComponent(api, '#nav');
nav.on('buildNav', data => list.render(data));

```
Also,
```js
const list = new ListComponent(api, '#list', {
    countOfItem: 5
});
const nav = new NavComponent(api, '#nav', {
    countOfItem: 5,
    countOfIndex: 3
});
```

#### **Notice!**
If the `renderOption` passed to the two each components is different, an error occurs. You can check it in tool for developer of browser.
```js
// default renderOption
{
  countOfItem: 3, // Number of items to render on one page
  countOfIndex: 5 // Number of pagination about items
}
```

## Description
* axios
* handlebars
* mocha / chai / chai-http
* Webpack2
  * eslint-loader(pre)
  * handlebars-loader
  * babel-loader
* ESLint
  * airbnb-base
* event-emitter
* Travis CI
* bootstrap

### TODO
* Add Unit Test
* Remove bootstrap to use original css 
* html file uglify, minify
* css uglify, minify(textExtract)
* tree shaking (webpack)
* Add karma
* Add istanbul
* Cross-browsing issue
