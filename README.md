# simple-navigation-component
[![Build Status](https://travis-ci.org/JaeYeopHan/simple-navigation-component.svg?branch=master)](https://travis-ci.org/JaeYeopHan/simple-navigation-component)  [![npm version](https://badge.fury.io/js/simple-navigation-component.svg)](https://badge.fury.io/js/simple-navigation-component) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
                                                                                                                                                                                                                                                                                    


**This is a navigation component created with vanilla js (ES6).**  
Simply pass api and the id value of the html you want to specify as root, and the `renderOption` to complete the navigation.

## Install
```bash
$ npm install --save-dev simple-navigation-component
# or
$ yarn add -D simple-navigation-component
```

## Feature
You can see the demo with list component in [demo-branch](https://github.com/JaeYeopHan/Navigation_Component/tree/demo-branch)  

### 1. Caching fetched data
Assuming that the data fetched from the api does not change, once fetched from the api, the data that count of item is cached.

### 2. Prev button and Next button
These two buttons change the index to the first index of the next or previous page. For example, if `countOfIndex` is 5, if index is between 1 and 5, clicking on the next button will move to the first index of 6 on the next page. (Similarly, if the index is between 6 and 10, click the prev button to move to index of 1.)

### 3. Activate buttons according to the case
`X`: Not clickable  |  `O`:  Clickable

#### Case 1
| 이전 | << | >> | 다음 |
|:-:|:-:|:-:|:-:|
| X | X | O | O |

![](/docs/DEMO_IMAGE/demo_1.png)

#### Case 2
| 이전 | << | >> | 다음 |
|:-:|:-:|:-:|:-:|
| X | O | O | O |

![](/docs/DEMO_IMAGE/demo_2.png)

#### Case 3
| 이전 | << | >> | 다음 |
|:-:|:-:|:-:|:-:|
| O | O | O | X |

![](/docs/DEMO_IMAGE/demo_3.png)

#### Case 4
| 이전 | << | >> | 다음 |
|:-:|:-:|:-:|:-:|
| O | O | X | X |

![](/docs/DEMO_IMAGE/demo_4.png)

</br>

### Style
Currently, bootstrap framework is applied to the style. 

</br>

## Usage
#### bootstrap CDN
```html
<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
```

#### Import
```js
import NavComoponent from 'simple-navigation-component';
// or
var NavComponent = require('simple-navigation-component');
```

#### Create
```js
/**
 * 
 * @type { NavComponent }
 * @param api [required] (fetch data url)
 * @param root [required] (selector)
 * 
**/
const nav = new NavComponent(api, '#nav');
```

#### Attatch event
```js
/**
 * 
 * @method on
 * @event buildNav
 *        This event occurs when the navigation index changes by click.
 * 
**/
nav.on('buildNav', data => {
    //TODO Insert your code!
});
```

**Also,** depending on the situation, you can customize the rendered appearance through `renderOption`.

```js
import NavComoponent from 'simple-navigation-component';

const nav = new NavComponent(api, '#nav', {
    countOfItem: 5,
    countOfIndex: 3
});

nav.on('buildNav', data => {
    //TODO Insert your code!
});
```

#### Default renderOption
```js
{
  countOfItem: 3, // Number of items to render on one page
  countOfIndex: 5 // Number of pagination about items
}
```
> **Notice!**  
If the `renderOption` passed to the two each components is different, an **error** occurs. You can check it in tool for developer of browser.


### API Design in component
* To fetch value to count of data
```
[Domain Address]/count
```

</br>

## Development
```bash
# Clone repository and move folder
$ git clone https://github.com/JaeYeopHan/simple-navigation-component
$ cd simple-navigation-component

# Install dependencies
$ yarn
# or
$ npm install

# Build
$ npm run dev

# Test
$ npm test
```

</br>

## Supported Browsers
The following table shows browsers supported in this component.

|IE|Chrome|Firefox|Safari|
|:-:|:-:|:-:|:-:|
|11+|Latest|Latest|Latest|

</br>

## Dependency
* axios
* handlebars
* event-emitter
* bootstrap

</br>

## Bug Report
If you find a bug, please report it to me using the [Issues](https://github.com/JaeYeopHan/simple-navigation-component/issues) page on Github.

</br>

## LICENSE
simple-navigation-component is released under the [MIT License](https://github.com/JaeYeopHan/simple-navigation-component/blob/master/LICENSE).
```
Copyright (c) 2017 Jbee

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
