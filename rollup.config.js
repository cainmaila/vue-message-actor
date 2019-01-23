import VuePlugin from 'rollup-plugin-vue'
import babel from 'rollup-plugin-babel'
import minify from 'rollup-plugin-babel-minify'
export default {
	input: 'src/index.js',
	output: {
		name: 'VueMessageActor',
		file: 'dist/vue-message-actor.js',
		format: 'umd',
		globals: {}
	},
	plugins: [
		VuePlugin(),
		babel({
			exclude: 'node_modules/**',
			babelrc: false,
			presets: [['@babel/preset-env', { modules: false }]],
			plugins: [
				'@babel/plugin-proposal-class-properties',
				'@babel/plugin-transform-async-to-generator',
				[
					'@babel/plugin-transform-runtime',
					{
						corejs: false,
						helpers: false,
						regenerator: true,
						useESModules: false
					}
				]
			]
		}),
		minify()
	]
}
