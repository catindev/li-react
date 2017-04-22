const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = env => {
		const ifProd = plugin =>  env.prod ? plugin : undefined;
		const removeEmpty = array => array.filter(p => !!p);

		return {
				/**
				 * entry tells webpack where to start looking.
				 * In this case we have both an app and vendor file.
				 */
				entry: {
						app: path.join(__dirname, '../src/'),
						vendor: ['react', 'react-dom', 'react-router'],
				},
				/**
				 * output tells webpack where to put the files he creates
				 * after running all its loaders and plugins.
				 *
				 * > [name].[hash].js will output something like app.3531f6aad069a0e8dc0e.js
				 * > path.join(__dirname, '../build/') will output into a /build folder in
				 *   the root of this prject.
				 */
				output: {
						filename: '[name].[hash].js',
						path: path.join(__dirname, '../build/'),
				},

				module: {
						// Loaders allow you to preprocess files!
						rules: [
								{
										test: /\.js$/,
										exclude: /(node_modules|bower_components)/,
										use: {
												loader: 'babel-loader',
												options: {
														presets: ['env']
												}
										}
								}
						],
				},

				plugins: removeEmpty([
						new webpack.optimize.CommonsChunkPlugin({
								name: 'vendor',
								minChunks: Infinity,
								filename: '[name].[hash].js',
						}),

						/**
						 * HtmlWebpackPlugin will make sure out JavaScript files are being called
						 * from within our index.html
						 */
						new HtmlWebpackPlugin({
								template: path.join(__dirname, '../src/index.html'),
								filename: 'index.html',
								inject: 'body',
						}),

						ifProd(new webpack.optimize.UglifyJsPlugin({
								compress: {
										'screw_ie8': true,
										'warnings': false,
										'unused': true,
										'dead_code': true,
								},
								output: {
										comments: false,
								},
								sourceMap: false,
						})),
				]),
		};
};