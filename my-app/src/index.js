import React from 'react';//确保JSX语法的解析
import ReactDOM from 'react-dom';

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <div>
    <App />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
