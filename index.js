// 0 - turn the rule off
const OFF = 0;
// 1 - turn the rule on as a warning (doesn't affect exit code)
const WARN = 1;
// 2 - turn the rule on as an error (exit code is 1 when triggered)
const ERROR = 2;

module.exports = {

	plugins: ['babel'],

	parser: 'babel-eslint',

	parserOptions: {
		ecmaVersion: 6,
		sourceType: 'module',
	},

	env: {
		'es6': true,
	},

	globals: {

	},

	rules: {
		'indent': [ERROR, 'tab'],
	},

};
