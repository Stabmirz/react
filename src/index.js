import React from 'react';
import ReactDOM from 'react-dom';
import './Components/index.css';
// import App from './Components/App';
import BooksApp from './Components/BooksApp'
import PostsApp from './Components/PostsApp'
import FormApp from './Components/FormApp'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <FormApp />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
