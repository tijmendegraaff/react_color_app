import React from 'react';
import { render } from 'react-dom';

import './styles/styles.scss';

import AppRouter from './routers/AppRouter';

render(<AppRouter />, document.getElementById('app'));
