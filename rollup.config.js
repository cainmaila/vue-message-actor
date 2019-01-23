import VuePlugin from 'rollup-plugin-vue'
import babel from 'rollup-plugin-babel'
// import commonjs from 'rollup-plugin-commonjs'
// import resolve from 'rollup-plugin-node-resolve'
export default {
	input: 'src/index.js',
	output: {
		name: 'VueMessageActor',
		file: 'dist/vue-message-actor.js',
		format: 'iife',
		globals: {}
	},
	plugins: [
		VuePlugin(/* VuePluginOptions */),
		// resolve({
		// jsnext: true,
		// main:true,
		// brower:true,
		// }),
		// commonjs(),
		babel({
			exclude: 'node_modules/**',
			babelrc: false,
			presets: [['@babel/preset-env', { modules: false }]],
			// runtimeHelpers: true,
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
		})
	]
}
