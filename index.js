// 0 - turn the rule off
const OFF = 0;
// 1 - turn the rule on as a warning (doesn't affect exit code)
const WARN = 1;
// 2 - turn the rule on as an error (exit code is 1 when triggered)
const ERROR = 2;

module.exports = {

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
		// Stylistic Issues
		'array-bracket-spacing': [ERROR, 'never'],
		'block-spacing': [ERROR, 'always'],
		'brace-style': [ERROR, '1tbs', {
			'allowSingleLine': false,
		}],
		'indent': [ERROR, 'tab', {
			'SwitchCase': 1,
		}],
	},

};
