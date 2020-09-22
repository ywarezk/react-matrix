# JSX

JSX is the drawing language of a react component.
It's really similar to HTML with some differences and some rules. 
Let's go over the important rules we have to remember about JSX

## What is JSX

```
<h1>hello world</h1>
```

babel will turn it to 

```
React.createElement(...)
```

## JSX is not html

there are differences 

## differences between JSX and HTML



## Lesson Plan

- small letters html
- capital letters = React Components
- no reserved js words
- JS in jsx
- Events
- if's
- for's

## EX.

- complete the ex that is placed in the folder `ex-jsx`
- Button event
  - create a component with a button that when you click on the button there is an alert with the text `hello world`
- If
  - Create a component that use `Math.random()` to generate a random number between 0 and 1.
  If the number is greater than 0.5 the component will write `Win`
  otherwise it will write `Loose`
- Loop
  - Create a component that holds an array of strings, of todo tasks.
  The component should iterate on that list and print an unordered ul-li of the items in the list