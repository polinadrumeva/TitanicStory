const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "src/index.ts"),
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              fallback: 'file-loader',
              outputPath: 'images/',
              name: '[name].[ext]',
            },
          },
        ],
      },
    ],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  devServer: {
    static: path.resolve(__dirname, "dist"),
    port: 3000,
    hot: true,
    open: true,
    compress: true,
  },
};
