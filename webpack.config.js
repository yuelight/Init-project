module.exports = {
	entry: {
		app: './app.js'
	},
	output: {
		filename: '[name].bundle.js',
		path: `${__dirname}/dist`
	},
	resolve: {
		alias: {
			crtDir: __dirname
		}
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				enforce: 'pre',
				exclude: /(node_modules|bower_components)/,
				loader: 'eslint-loader'
			},
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel-loader'
			}
		]
	},
	target: 'node'
};
