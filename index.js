module.exports = {
	extends: [
		'./rules/best-practices',
		'./rules/errors',
		'./rules/es6',
		'./rules/node',
		'./rules/react',
		'./rules/react-a11y',
		'./rules/style',
		'./rules/variables',
	].map(require.resolve),

	parserOptions: {
		ecmaVersion: 6,
		sourceType: 'module',
	},

	env: {
		browser: true,
		es6: true,
		node: true,
	},

	rules: {
		strict: ['error'],
	},
};
