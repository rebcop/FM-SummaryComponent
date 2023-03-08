# Frontend Mentor - Results summary component solution

This is a solution to the [Results summary component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/results-summary-component-CE_K6s0maV). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

Desktop Solution Screenshot:
![Desktop Screenshot of Solution](./assets/images/desktop-solution.PNG.jpg)
Mobile Solution Screenshot:
![Desktop Screenshot of Solution](./assets/images/mobile-solution.PNG.jpg)

### Links

- Solution URL: [Github Repo](https://github.com/rebcop/FM-SummaryComponent)
- Live Site URL: [Github Pages](https://rebcop.github.io/FM-SummaryComponent/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- JavaScript / jQuery to use data from JSON file

### What I learned

1. This is my first time touching gradients. Thought it would be more complicated but it was easy. Just plug in the colors.

```css
.results {
  background-image: linear-gradient(
    var(--result-bg1-grad),
    var(--result-bg2-grad)
  );
  color: var(--white);
  border-radius: 0rem 0rem 1.875rem 1.875rem;
  padding: 1.6rem;
  height: 22.25rem;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  gap: 1.1rem;
  width: 100%;
}
```

2. This is also my first time using a JSON file to present data. It looks like the only way I could work with the JSON data was with the callback function... but I'm pretty sure I'm missing something. I abstracted away the actual html snippet that is appended to make the executed function below more readable.

```js
$.getJSON("data.json", (jsonData) => {
  for (let i = 0; i < jsonData.length; i++) {
    const category = jsonData[i].category;
    const score = jsonData[i].score;
    const icon = jsonData[i].icon;

    $(".categories").append(appendCategory(category, score, icon));
  }
});
```

### Continued development

- Try this same exercise with React
- Play around with JSON files further to see how I can access the data outside of the .getJSON jQuery function.

### Useful resources

- [W3 Schools CSS Gradients](https://www.w3schools.com/css/css3_gradients.asp) - This helped me learn about linear gradients.
- [jQuery .getJSON()](https://api.jquery.com/jQuery.getJSON/#jQuery-getJSON-url-data-success) - This is what I used to get the data from the JSON file to use in the JavaScript file.

## Author

- Website - [Rebecca Copeland](https://rebcop.github.io/)
- Frontend Mentor - [@rebcop](https://www.frontendmentor.io/profile/rebcop)
