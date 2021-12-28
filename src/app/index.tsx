import React from 'react';
// @ts-ignore
import { createRoot } from 'react-dom';

import AppRoot from '@subCon/app-root';

const container = document.getElementById('root');

const root = createRoot(container);

root.render(<AppRoot />);
