module.exports = {

	parserOptions: {
		ecmaVersion: 6,
		sourceType: 'module',
	},

	env: {
		es6: true,
	},

	rules: {
		// Possible Errors
		'comma-dangle': ['error', 'always-multiline'],
		'no-cond-assign': ['error'],
		'no-console': ['error'],
		'no-constant-condition': ['error'],
		'no-control-regex': ['off'],
		'no-debugger': ['error'],
		'no-dupe-args': ['error'],
		'no-dupe-keys': ['error'],
		'no-duplicate-case': ['error'],
		'no-empty': ['error'],
		'no-empty-character-class': ['off'],
		'no-ex-assign': ['off'],
		'no-extra-boolean-cast': ['error'],
		'no-extra-parens': ['off'],
		'no-extra-semi': ['error'],
		'no-func-assign': ['off'],
		'no-inner-declarations': ['error'],
		'no-invalid-regexp': ['error'],
		'no-irregular-whitespace': ['error'],
		'no-negated-in-lhs': ['off'],
		'no-obj-calls': ['off'],
		'no-prototype-builtins': ['off'],
		'no-regex-spaces': ['off'],
		'no-sparse-arrays': ['error'],
		'no-unexpected-multiline': ['off'],
		'no-unreachable': ['error'],
		'no-unsafe-finally': ['off'],
		'use-isnan': ['error'],
		'valid-jsdoc': ['off'],
		'valid-typeof': ['error'],
		// Best Practices
		'accessor-pairs': ['off'],
		'array-callback-return': ['error'],
		'block-scoped-var': ['off'],
		'complexity': ['error', 15],
		'consistent-return': ['off'],
		'curly': ['error', 'all'],
		'default-case': ['off'],
		'dot-location': ['error', 'property'],
		'dot-notation': ['error'],
		'eqeqeq': ['error'],
		'guard-for-in': ['off'],
		'no-alert': ['error'],
		'no-caller': ['off'],
		'no-case-declarations': ['error'],
		'no-div-regex': ['off'],
		'no-else-return': ['off'],
		'no-empty-function': ['error'],
		'no-empty-pattern': ['off'],
		'no-eq-null': ['off'],
		'no-eval': ['error'],
		'no-extend-native': ['off'],
		'no-extra-bind': ['off'],
		'no-extra-label': ['off'],
		'no-fallthrough': ['off'],
		'no-floating-decimal': ['error'],
		'no-implicit-coercion': ['error'],
		'no-implicit-globals': ['off'],
		'no-implied-eval': ['off'],
		'no-invalid-this': ['off'],
		'no-iterator': ['off'],
		'no-labels': ['off'],
		'no-lone-blocks': ['error'],
		'no-loop-func': ['error'],
		'no-magic-numbers': ['off'],
		'no-multi-spaces': ['error', {
			'exceptions': {
				'Property': true,
				'ObjectExpression': true,
			},
		}],
		'no-multi-str': ['off'],
		'no-native-reassign': ['off'],
		'no-new': ['off'],
		'no-new-func': ['off'],
		'no-new-wrappers': ['off'],
		'no-octal': ['off'],
		'no-octal-escape': ['off'],
		'no-param-reassign': ['off'],
		'no-proto': ['off'],
		'no-redeclare': ['error'],
		'no-return-assign': ['off'],
		'no-script-url': ['off'],
		'no-self-assign': ['off'],
		'no-self-compare': ['off'],
		'no-sequences': ['off'],
		'no-throw-literal': ['error'],
		'no-unmodified-loop-condition': ['off'],
		'no-unused-expressions': ['error'],
		'no-unused-labels': ['off'],
		'no-useless-call': ['off'],
		'no-useless-concat': ['off'],
		'no-useless-escape': ['off'],
		'no-void': ['off'],
		'no-warning-comments': ['off'],
		'no-with': ['error'],
		'radix': ['error', 'always'],
		'vars-on-top': ['off'],
		'wrap-iife': ['off'],
		'yoda': ['off'],
		// Strict Mode
		'strict': ['off'],
		// Variables
		'init-declarations': ['off'],
		'no-catch-shadow': ['off'],
		'no-delete-var': ['off'],
		'no-label-var': ['off'],
		'no-restricted-globals': ['off'],
		'no-shadow': ['off'],
		'no-shadow-restricted-names': ['off'],
		'no-undef': ['error'],
		'no-undef-init': ['off'],
		'no-undefined': ['off'],
		'no-unused-vars': ['error'],
		'no-use-before-define': ['off'],
		// Node.js and CommonJS
		'callback-return': ['off'],
		'global-require': ['off'],
		'handle-callback-err': ['off'],
		'no-mixed-requires': ['off'],
		'no-new-require': ['off'],
		'no-path-concat': ['off'],
		'no-process-env': ['off'],
		'no-process-exit': ['off'],
		'no-restricted-modules': ['off'],
		'no-sync': ['off'],
		// Stylistic Issues
		'array-bracket-spacing': ['error', 'never'],
		'block-spacing': ['error', 'always'],
		'brace-style': ['error', '1tbs', {
			'allowSingleLine': false,
		}],
		'camelcase': ['error', {
			'properties': 'never',
		}],
		'comma-spacing': ['error', {
			'before': false,
			'after': true,
		}],
		'comma-style': ['error', 'last'],
		'computed-property-spacing': ['error', 'never'],
		'consistent-this': ['warn', 'self'],
		'eol-last': ['warn'],
		'func-names': ['off'],
		'func-style': ['error', 'declaration', {
			'allowArrowFunctions': true,
		}],
		'id-blacklist': ['off'],
		'id-length': ['off'],
		'id-match': ['off'],
		'indent': ['error', 'tab', {
			'SwitchCase': 1,
		}],
		'jsx-quotes': ['off'],
		'key-spacing': ['error', {
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
		'keyword-spacing': ['error', {
			'before': true,
			'after': true,
		}],
		'linebreak-style': ['off'],
		'lines-around-comment': ['off'],
		'max-depth': ['error', {
			'max': 4,
		}],
		'max-len': ['off'],
		'max-nested-callbacks': ['off'],
		'max-params': ['off'],
		'max-statements': ['off'],
		'max-statements-per-line': ['error', {
			'max': 1,
		}],
		'new-cap': ['error', {
			'newIsCap': true,
			'capIsNew': false,
		}],
		'new-parens': ['error'],
		'newline-after-var': ['off'],
		'newline-before-return': ['off'],
		'newline-per-chained-call': ['off'],
		'no-array-constructor': ['off'],
		'no-bitwise': ['off'],
		'no-continue': ['off'],
		'no-inline-comments': ['off'],
		'no-lonely-if': ['error'],
		'no-mixed-spaces-and-tabs': ['off'],
		'no-multiple-empty-lines': ['error'],
		'no-negated-condition': ['error'],
		'no-nested-ternary': ['error'],
		'no-new-object': ['off'],
		'no-plusplus': ['off'],
		'no-restricted-syntax': ['off'],
		'no-spaced-func': ['error'],
		'no-ternary': ['off'],
		'no-trailing-spaces': ['error'],
		'no-underscore-dangle': ['off'],
		'no-unneeded-ternary': ['error'],
		'no-whitespace-before-property': ['off'],
		'object-curly-spacing': ['error', 'always'],
		'object-property-newline': ['off'],
		'one-var': ['error', {
			'uninitialized': 'always',
			'initialized': 'never',
		}],
		'one-var-declaration-per-line': ['error', 'initializations'],
		'operator-assignment': ['off'],
		'operator-linebreak': ['off'],
		'padded-blocks': ['off'],
		'quote-props': ['error', 'consistent-as-needed'],
		'quotes': ['error', 'single', {
			'avoidEscape': false,
			'allowTemplateLiterals': false,
		}],
		'require-jsdoc': ['off'],
		'semi': ['error', 'always'],
		'semi-spacing': ['error', {
			'before': false,
			'after': true,
		}],
		'sort-vars': ['off'],
		'space-before-blocks': ['error'],
		'space-before-function-paren': ['error', 'always'],
		'space-in-parens': ['error', 'never'],
		'space-infix-ops': ['error'],
		'space-unary-ops': ['error', {
			'words': true,
			'nonwords': false,
		}],
		'spaced-comment': ['off'],
		'unicode-bom': ['off'],
		'wrap-regex': ['off'],
		// ES2015
		'arrow-body-style': ['off'],
		'arrow-parens': ['error', 'always'],
		'arrow-spacing': ['error', {
			'before': true,
			'after': true,
		}],
		'constructor-super': ['error'],
		'generator-star-spacing': ['off'],
		'no-class-assign': ['off'],
		'no-confusing-arrow': ['off'],
		'no-const-assign': ['error'],
		'no-dupe-class-members': ['error'],
		'no-duplicate-imports': ['off'],
		'no-new-symbol': ['off'],
		'no-restricted-imports': ['off'],
		'no-this-before-super': ['error'],
		'no-useless-computed-key': ['off'],
		'no-useless-constructor': ['off'],
		'no-useless-rename': ['off'],
		'no-var': ['off'],
		'object-shorthand': ['off'],
		'prefer-arrow-callback': ['off'],
		'prefer-const': ['off'],
		'prefer-reflect': ['off'],
		'prefer-rest-params': ['error'],
		'prefer-spread': ['error'],
		'prefer-template': ['off'],
		'require-yield': ['off'],
		'sort-imports': ['off'],
		'template-curly-spacing': ['off'],
		'yield-star-spacing': ['off'],
	},

};
