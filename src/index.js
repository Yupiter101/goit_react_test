import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';

// npm install react-icons
// import { FaBeer, FaAllergies } from 'react-icons/fa';
// npm install date-fns // Дата время формат
// import { format } from 'date-fns'; 
// Syntax // format(date, format, [options])
// Ex // const result = format(new Date(2014, 1, 11), 'MM/dd/yyyy')

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// Repeta

// const element = React.createElement('div', {
//  a: 5,
//  b: 7,
//  children: 'hello',
// });

// console.log(element);
// ReactDOM.render(element, document.getElementById('root'));

//  