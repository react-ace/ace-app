const path = require('path');

const rootPath = path.join(__dirname, '../..');

const dllPath = path.join(__dirname, '../dll');

const srcPath = path.join(rootPath, 'src');
const srcMainPath = path.join(srcPath, 'main');
const srcAppPath = path.join(srcPath, 'app');

const releasePath = path.join(rootPath, 'release');
const releaseAppPath = path.join(releasePath, 'app');
const appPackagePath = path.join(releaseAppPath, 'package.json');
const appNodeModulesPath = path.join(releaseAppPath, 'node_modules');
const srcNodeModulesPath = path.join(srcPath, 'node_modules');

const distPath = path.join(releaseAppPath, 'dist');
const distMainPath = path.join(distPath, 'main');
const distAppPath = path.join(distPath, 'app');

const buildPath = path.join(releasePath, 'build');

const acePath = path.join(srcPath, 'ace');
const aceComp = path.join(acePath, 'component');
const aceCon = path.join(acePath, 'container');

const subPath = path.join(srcPath, 'sub');
const subComp = path.join(subPath, 'component');
const subCon = path.join(subPath, 'container');

export default {
  rootPath,
  dllPath,
  srcPath,
  srcMainPath,
  srcAppPath,
  releasePath,
  releaseAppPath,
  appPackagePath,
  appNodeModulesPath,
  srcNodeModulesPath,
  distPath,
  distMainPath,
  distAppPath,
  buildPath,
  // submodule
  acePath,
  aceComp,
  aceCon,
  subPath,
  subComp,
  subCon,
};
