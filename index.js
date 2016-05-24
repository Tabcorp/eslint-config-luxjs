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
		'comma-dangle': [ERROR, 'always-multiline'],
		'no-console': [ERROR],
		'no-debugger': [ERROR],
		'no-dupe-args': [ERROR],
		'no-dupe-keys': [ERROR],
		'no-duplicate-case': [ERROR],
		'no-extra-semi': [ERROR],
		'no-invalid-regexp': [ERROR],
		'no-irregular-whitespace': [ERROR],
		'no-sparse-arrays': [ERROR],
		'no-unreachable': [ERROR],
		'use-isnan': [ERROR],
		// Best Practices
		'complexity': [ERROR, 15],
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
		'keyword-spacing': [ERROR, {
			'before': true,
			'after': true,
		}],
		'no-lonely-if': [ERROR],
		'no-spaced-func': [ERROR],
		'no-trailing-spaces': [ERROR],
		'no-unreachable': [ERROR],
		'object-curly-spacing': [ERROR, 'always'],
		'one-var': [ERROR, {
			'uninitialized': 'always',
			'initialized': 'never',
		}],
		'one-var-declaration-per-line': [ERROR, 'initializations'],
		'quotes': [ERROR, 'single', {
			'avoidEscape': false,
			'allowTemplateLiterals': false,
		}],
		'semi': [ERROR, 'always'],
		'semi-spacing': [ERROR, {
			'before': false,
			'after': true,
		}],
		'space-before-blocks': [ERROR],
		'space-before-function-paren': [ERROR, 'always'],
		'space-in-parens': [ERROR, 'never'],
		'space-infix-ops': [ERROR],
		'space-unary-ops': [ERROR, {
			'words': true,
			'nonwords': false,
		}],
		// ES2015
		'arrow-parens': [ERROR, 'always'],
		'arrow-spacing': [ERROR, {
			'before': true,
			'after': true,
		}],
		'constructor-super': [ERROR],
		'no-const-assign': [ERROR],
		'no-dupe-class-members': [ERROR],
		'no-this-before-super': [ERROR],
		'prefer-rest-params': [ERROR],
		'prefer-spread': [ERROR],
	},

};
