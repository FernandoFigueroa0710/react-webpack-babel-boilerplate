//old
//const path = require('path');
//const HtmlWepackPlugin = require('html-webpack-plugin');

// new 
 import path from 'path';
 import HtmlWepackPlugin from 'html-webpack-plugin';

module.exports = {
  entry: path.join(__dirname, 'src', 'index.js'),
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'index.bundle.js'
  },
  mode: process.env.NODE_ENV || 'development',
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules']
  },
  devServer: {
    contentBase: path.join(__dirname, 'src')
  },
  module: {
    rules: [
      {
        //this is so we compile any React, ES6 and above into normal ES5 syntax 
        test: /\.(js|jsx)$/,
        //we don't want anything from the modules to be compiled 
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        //this is so we compaile any SCCC to reach adn ES5 syntack +
        test: /\.(css|scss)$/,
        use: [
          "style-loader", //creates style nodes frrom JS string 
          "css-loader",  // translates CSS into common JS 
          "sass-loader" //compiles Sass to CSS, using Node Sass but default 
        ]
      },
      {//this is how we compile media to our app 
      test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
      loaders: ['file-loader']
      }
    ]
  },
  plugins: [
    new HtmlWepackPlugin({
      template: path.join(__dirname, 'src', 'index.html')
    })
  ]
};

/* 
* Entry and Output: tell our server what has to be compiled and from where; 
and also where to put the putputted version; output - folder and the file name 
* Mode: this is the mode for our output, we are setting to "development "
* Resolve: this is used so we can import anything form the node modules directly 
*devServer: this tells the webpack-dev-server what files need to be served 
(everything from the src folder needs to be served in the browser)
*plugins: here is where we set the plugins we need i our app 
*/