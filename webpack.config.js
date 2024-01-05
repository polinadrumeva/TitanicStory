const path = require("path");

module.exports = {
  // devtool: "eval-source-map",
  entry: path.resolve(__dirname, "src/index.ts"), // Your entry TypeScript file
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
              limit: 8192, // Convert images smaller than 8KB to data URL
              fallback: 'file-loader',
              outputPath: 'images/', // Optional: Specify the output directory
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
    extensions: [".ts", ".js", ".jpg"],
  },
  devServer: {
    static: path.resolve(__dirname, "dist"),
    port: 3000,
    hot: true,
    open: true,
    compress: true,
  },
};