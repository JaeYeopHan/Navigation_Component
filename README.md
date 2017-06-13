# Navigation Component
**This is Navigation component.**  
Simply pass api and the id value of the html you want to specify as root, and the `renderOption` to complete the navigation.

## Usage
```js
const list = new ListComponent(api, '#list');
const nav = new NavComponent(api, '#nav');
nav.on('buildNav', function(data) {
    list.render(data);
});
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
* mocha/chai for test
* Webpack (for bundle and minify)
  * handlebars-loader
  * babel-loader
* event-emitter
* bootstrap

### Futhermore
* html file uglify, minify
* css and bootstrap uglify, minify
* Apply Travis CI
* Add karma
* Add istanbul
* Add Unit Test
* Cross-browsing issue

