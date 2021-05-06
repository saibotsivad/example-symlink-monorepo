const path = require('path')

module.exports = {
	entry: './app/demo-app/main.js',
	output: {
		path: path.resolve(__dirname, 'deploy/deploy-with-webpack'),
		filename: 'build.js',
	},
}
