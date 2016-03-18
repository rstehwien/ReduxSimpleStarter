module.exports = {
  context: __dirname + "/app",
  entry: {
    javascript: './src/index.js',
    html: './index.html'
  },
  output: {
    path: __dirname + "/dist",
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel'
    },
    {
    test: /\.html$/,
    loader: "file?name=[name].[ext]",
  }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
