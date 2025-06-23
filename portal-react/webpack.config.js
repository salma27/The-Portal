const path = require('path');

module.exports = {
  entry: './src/index.tsx', // or .tsx/.jsx depending on your entry point
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          {
            loader: 'resolve-url-loader',
            options: { sourceMap: true },
          },
          {
            loader: 'sass-loader',
            options: { sourceMap: true },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'), // where your static files are
    },
    compress: true,
    port: 3000,
    hot: true,
    open: true,
    historyApiFallback: true, // for React Router
    setupMiddlewares: (middlewares, devServer) => {
      // replace deprecated onBefore/AfterSetupMiddleware here
      console.log('✔ Dev server middlewares loaded');
      return middlewares;
    },
  },
};
