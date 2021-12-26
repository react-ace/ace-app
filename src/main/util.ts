import { URL } from 'url';
import path from 'path';

const CFonts = require('cfonts');

export let resolveHtmlPath: (htmlFileName: string) => string;

if (process.env.NODE_ENV === 'development') {
  const port = process.env.PORT || 1212;

  // console.log('Client is running on port: ', port);
  CFonts.say(`------ Client is running on port == ${port} ------`, {
    colors: ['magenta'],
    font: 'console',
    align: 'center',
    // gradient: ['magenta', 'red'],
    space: true,
  });

  resolveHtmlPath = (htmlFileName: string) => {
    const url = new URL(`http://localhost:${port}`);
    url.pathname = htmlFileName;
    return url.href;
  };
} else {
  resolveHtmlPath = (htmlFileName: string) => {
    return `file://${path.resolve(__dirname, '../app/', htmlFileName)}`;
  };
}
