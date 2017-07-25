import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom'

import Base from './layouts/base';
import './sass/main.scss';

ReactDOM.render(
  <HashRouter>
    <Base />
  </HashRouter>,
  document.querySelector('.bs-app')
);
