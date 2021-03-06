module.exports = {
	"parser": "babel-eslint",
	"env": {
		"browser": true,
		"commonjs": true,
		"es6": true,
		"node": true
	},
	"extends": "eslint:recommended",
	"parserOptions": {
		"sourceType": "module"
	},
	"rules": {

		"indent": [
            "error",
            "tab"
        ],

		"linebreak-style": [
			"error",
			"unix"
		],

		"quotes": [
			"error",
			"single"
		],

		"semi": [
			"error",
			"always"
		],

		"arrow-parens": 0,

		"generator-star-spacing": ["error", {
			"before": false,
			"after": true
		}],

		'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,

		'space-before-function-paren': 0,

		"no-console": 0
	}
};
