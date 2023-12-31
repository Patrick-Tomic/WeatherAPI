const path = require('path');
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
 
module.exports = {
	mode: 'development',
	entry: {bundle: path.resolve(__dirname,'src/index.js')},
	devtool: 'inline-source-map',
	devServer: {
		static: './dist',
	},
	plugins:[
		new HtmlWebpackPlugin({
			title: 'Weather Application',
			filename: 'index.html',
			template: 'src/template.html'
		}),
	],
    output: {
		filename: '[name].js',
		path: path.resolve(__dirname,'dist'),
		clean:true,
         
        
	},
	module:{
		rules:[
			{
				test: /\.scss$/,
				use:[
					'style-loader',
					'css-loader',
					'sass-loader',
				],
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource',
			},
		],
	},
	optimization:{
		runtimeChunk: 'single'
	},
};