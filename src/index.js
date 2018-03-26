import React from 'react';
import { render } from 'react-dom';
import Routes from './routes/routes';
import '../node_modules/grommet-css'

render(<Routes />, document.getElementById('blah'));  

module.hot.accept();
