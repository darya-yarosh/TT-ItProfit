import "./index.scss";

const heading = document.createElement('h1')
heading.textContent = 'Test title'

const root = document.querySelector('#root')
root.append(heading)