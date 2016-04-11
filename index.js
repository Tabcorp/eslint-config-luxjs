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
		// Possible Errors
		'no-console': [ERROR],
		'no-debugger': [ERROR],
		'no-dupe-args': [ERROR],
		'no-dupe-keys': [ERROR],
		'no-duplicate-case': [ERROR],
		'no-irregular-whitespace': [ERROR],
		'no-sparse-arrays': [ERROR],
		'no-unreachable': [ERROR],
		'use-isnan': [ERROR],
		// Best Practices
		'dot-location': [ERROR, 'property'],
		'dot-notation': [ERROR],
		'eqeqeq': [ERROR],
		'no-alert': [ERROR],
		'no-eval': [ERROR],
		'no-implicit-coercion': [ERROR],
		'no-redeclare': [ERROR],
		'no-throw-literal': [ERROR],
		// Variables
		'no-undef': [ERROR],
		'no-unused-vars': [ERROR],
		// Stylistic Issues
		'array-bracket-spacing': [ERROR, 'never'],
		'block-spacing': [ERROR, 'always'],
		'brace-style': [ERROR, '1tbs', {
			'allowSingleLine': false,
		}],
		'camelcase': [ERROR, {
			'properties': 'never',
		}],
		'comma-spacing': [ERROR, {
			'before': false,
			'after': true,
		}],
		'comma-style': [ERROR, 'last'],
		'computed-property-spacing': [ERROR, 'never'],
		'consistent-this': [WARN, 'self'],
		'eol-last': [WARN],
		'func-names': [OFF],
		'func-style': [OFF],
		'indent': [ERROR, 'tab', {
			'SwitchCase': 1,
		}],
		'key-spacing': [ERROR, {
			'singleLine': {
				'beforeColon': false,
				'afterColon': true,
				'mode': 'minimum',
			},
			'multiLine': {
				'beforeColon': false,
				'afterColon': true,
				'mode': 'strict',
			},
		}],
		'no-lonely-if': [ERROR],
		'no-trailing-spaces': [ERROR],
		'no-unreachable': [ERROR],
		'semi': [ERROR, 'always'],
		'one-var': [ERROR, {
			'uninitialized': 'always',
			'initialized': 'never',
		}],
		'one-var-declaration-per-line': [ERROR, 'initializations'],
		'space-before-function-paren': [ERROR, 'always'],
		// ES2015
		'arrow-parens': [ERROR, 'always'],
		'arrow-spacing': [ERROR, {
			'before': true,
			'after': true,
		}],
		'constructor-super': [ERROR],
		'no-const-assign': [ERROR],
		'no-dupe-class-members': [ERROR],
	},

};
