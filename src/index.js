import React from 'react';
import { render } from 'react-dom';
import AppRouter from './components/Router';
import asyncComponent from './components/common/asyncComponent';

import './components/common/ContentContainer/styles.css';

const Login = asyncComponent(
  () => System.import('./components/Login').then(module => module.default),
  { name: 'Login' },
);

const isAuthorised = true;

render(
  isAuthorised ? <AppRouter /> : <Login />,
  document.getElementById('li-interface'),
);
