

module.exports = {
	entry: './src/index.js',
	output: {
		path: __dirname + '/build',
		filename: 'main.js'
	},
	
	module: {
		loaders: [
			{
				test: /\.js$/,
				use: 'babel-loader'			
			},
			{
				test: /\.scss$/,
				use: 'style-loader!css-loader!scss-loader'
			}
		]
	}
}