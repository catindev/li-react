const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const moment = require('moment');
const $hash = moment( new Date() ).format( 'DD_MM_YYYY__hh_mm' );

module.exports = env => {
		const ifProd = plugin =>  env.prod ? plugin : undefined;
		const removeEmpty = array => array.filter(p => !!p);

		return {
				devtool: 'source-map',

				entry: {
						app: path.join(__dirname, '../src/'),
						vendor: ['react', 'react-dom', 'react-router'],
				},

				output: {
						filename: `[name].${ $hash }.js`,
						path: path.join(__dirname, '../build/'),
				},

				module: {
						rules: [
								{
										test: /\.js$/,
										exclude: /(node_modules)/,
										use: {
												loader: 'babel-loader',
												options: {
														plugins: [
																"transform-object-assign",
																"transform-decorators-legacy",
																"transform-class-properties",
																"transform-runtime"
														]
												}
										}
								},

								{
										test: /\.css$/,
										use: [
												"style-loader",
												{
														loader: "css-loader",
														options: { modules: true }
												}
										]
								},

								{
										test: /\.(ttf|eot|svg|gif|jpg|png|mp3)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
										loader: `file-loader?name=assets/[name]-${ $hash }.[ext]`
								},

								{
										test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
										loader: `url-loader?name=assets/[name]-${ $hash }.[ext]&limit=10000&mimetype=application/font-woff`
								},
						],
				},

				plugins: removeEmpty([

						new webpack.optimize.CommonsChunkPlugin({
								name: 'vendor',
								minChunks: Infinity,
								filename: `[name].${ $hash }.js`,
						}),

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