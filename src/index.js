import React from 'react';
import { render } from 'react-dom';

import './styles/styles.scss';

import AppRouter from './router/AppRouter';

render(<AppRouter />, document.getElementById('app'));
