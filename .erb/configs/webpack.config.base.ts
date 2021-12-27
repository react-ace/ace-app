import webpack from 'webpack';
import webpackPaths from './webpack.paths';
import { dependencies as externals } from '../../release/app/package.json';

const configuration: webpack.Configuration = {
  externals: [...Object.keys(externals || {})],

  stats: 'errors-only',

  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
          options: {
            // Remove this line to enable type checking in webpack builds
            transpileOnly: true,
          },
        },
      },
    ],
  },

  output: {
    path: webpackPaths.srcPath,
    // https://github.com/webpack/webpack/issues/1114
    library: {
      type: 'commonjs2',
    },
  },

  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
    modules: [webpackPaths.srcPath, 'node_modules'],
    alias: {
      '@': webpackPaths.rootPath,
      '@root': webpackPaths.rootPath,
      '@src': webpackPaths.srcPath,
      '@app': webpackPaths.srcAppPath,
      '@main': webpackPaths.srcMainPath,
      // submodule
      '@ace': webpackPaths.acePath,
      '@aceComp': webpackPaths.aceComp,
      '@aceCon': webpackPaths.aceCon,
      '@sub': webpackPaths.subPath,
      '@subComp': webpackPaths.subComp,
      '@subCon': webpackPaths.subCon,
    },
  },

  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'production',
    }),
  ],
};

export default configuration;
