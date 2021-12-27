import React from 'react';
// @ts-ignore
import { createRoot } from 'react-dom';

import Home from './page/home/index';

const container = document.getElementById('root');

const root = createRoot(container);

root.render(<Home />);

