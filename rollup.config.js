import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'

export default [
	{
		input: 'app/demo-app/main.js',
		output: {
			format: 'es',
			file: 'deploy/deploy-with-rollup/build.js'
		},
		plugins: [
			resolve({
				browser: true
			}),
			commonjs()
		],
		watch: {
			clearScreen: false
		}
	}
]
