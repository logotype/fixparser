import React from 'react';
import { render } from 'react-dom';
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';

import './dashboard.scss';
import Dashboard from './Dashboard';

UIkit.use(Icons);

const container = document.createElement('application');
container.className = 'application flexContainer flexColumn';
document.body.appendChild(container);

render( <Dashboard />, document.querySelector('application') );
