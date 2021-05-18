# Frontend Mentor - Profile card component solution

This is a solution to the [Profile card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/profile-card-component-cfArpWshJ).

## Table of contents

  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)
    - [Useful resources](#useful-resources)
  - [Author](#author)


## Overview

### The challenge

- Build out the project to the designs provided
- Making the design responsive
- Not using flexbox, css grid, calc() or any other modern css features
- Making it compatible with IE10 and IE11

### Screenshot

![screenshot of the solution](./images/screenshot.png)

### Links

- [Solution URL](https://www.frontendmentor.io/solutions/finally-no-flexbox-no-css-grid-and-compatible-with-ie10-and-ie11-ga6nFmSJW)
- [Live Site URL](https://farispalayi.github.io/Profile-card-component/)

## My process

### Built with

- HTML
- CSS

### What I learned
I learned :
- How to use `tabindex` attribute make elements focusable and defines an order to the focus.
```html
<h1 tabindex='1'>Some HTML code</h1>
<p tabindex='2'>Some HTML code </p>
```
- You can't use psuedo-elements ::before and ::after on empty tags like \<img\>, \<br\> and \<hr\>
- Finally learned how exactly this works:
```css
  .parent{
    position: relative;
  }
  .child{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
```
- [`background-position`](https://developer.mozilla.org/en-US/docs/Web/CSS/background-position) property. I thought there was only the `background-size` property. This thing can make things a lot easier now.
- to make flexbox compatible with IE10 you need to use the `-ms-` prefix



### Continued development

- My next goal is to learn BEM

### Useful resources

- [caniuse](https://www.caniuse.com)
- [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/)

## Author

- Frontend Mentor - [@FarisPalayi](https://www.frontendmentor.io/profile/FarisPalayi)
- Twitter - [@farispalayi](https://www.twitter.com/farispalayi)
