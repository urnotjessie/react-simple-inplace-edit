const path = require('path');
const pkg = require('./package.json');
const libraryName= pkg.name;

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
    library: libraryName,
    libraryTarget: 'umd',  
    publicPath: 'dist/',
    umdNamedDefine: true  
  }, 
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  externals: [].concat(
    Object.keys(pkg.dependencies || {}),
    Object.keys(pkg.peerDependencies || {}),
  ).map((dep) => new RegExp('^' + dep)),
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-typescript', '@babel/preset-react'],
            plugins: ['@babel/proposal-class-properties', '@babel/proposal-object-rest-spread']
          }
        }, {
          loader: 'ts-loader',
        }]
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ]
  }
};