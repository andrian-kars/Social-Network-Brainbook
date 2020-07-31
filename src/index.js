import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let posts = [
  { id: 1, message: `I'm doing great today!`, likesCount: 228 },
  { id: 2, message: `React is such a cool thing!`, likesCount: 322 },
  { id: 3, message: `It's my first React program!`, likesCount: 696 }
]

let dialogs = [
  { id: 1, name: 'Ivan' },
  { id: 2, name: 'Lebowski' },
  { id: 3, name: 'Anna' },
  { id: 4, name: 'Andrey' },
  { id: 5, name: 'Sveta' },
  { id: 6, name: 'Julius Caesar' },
  { id: 7, name: 'Donald Trump' },
  { id: 8, name: 'Elon Musk' }
]

let messages = [
  { id: 1, message: `Where's the Money, Lebowski?` },
  { id: 2, message: `Hello, how are your things going?` },
  { id: 3, message: `Hi!` }
]

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages} />
  </React.StrictMode>,
  document.getElementById('root')
);


// let dialogs = [
//   { id: 1, name: 'Ivan' },
//   { id: 2, name: 'Lebowski' },
//   { id: 3, name: 'Anna' },
//   { id: 4, name: 'Andrey' },
//   { id: 5, name: 'Sveta' },
//   { id: 6, name: 'Julius Caesar' },
//   { id: 7, name: 'Donald Trump' },
//   { id: 8, name: 'Elon Musk' }
// ]

// let messages = [
//   { id: 1, message: `Where's the Money, Lebowski?` },
//   { id: 2, message: `Hello, how are your things going?` },
//   { id: 3, message: `Hi!` }
// ]

// let postsData = [
//   { id: 1, message: `I'm doing great today!`, likesCount: 228 },
//   { id: 2, message: `React is such a cool thing!`, likesCount: 322 },
//   { id: 3, message: `It's my first React program!`, likesCount: 696 }
// ]

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
