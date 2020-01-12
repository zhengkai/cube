module.exports = {
	"env": {
		"browser": true,
		"es6": true,
		"node": true
	},
	"extends": [
		"plugin:@typescript-eslint/recommended",
		"plugin:@typescript-eslint/recommended-requiring-type-checking"
	],
	"parser": "@typescript-eslint/parser",
	"parserOptions": {
		"project": "tsconfig.json",
		"sourceType": "module"
	},
	"plugins": [
		"@typescript-eslint",
		"@typescript-eslint/tslint"
	],
	"rules": {
		"@typescript-eslint/array-type": "off",
		"@typescript-eslint/consistent-type-definitions": "error",
		"@typescript-eslint/explicit-member-accessibility": [
			"off",
			{
				"accessibility": "explicit"
			}
		],
		"@typescript-eslint/indent": [
			"error",
			'tab',
			{
				"FunctionDeclaration": {
					"parameters": "first"
				},
				"FunctionExpression": {
					"parameters": "first"
				}
			}
		],
		"@typescript-eslint/interface-name-prefix": "off",
		"@typescript-eslint/member-delimiter-style": [
			"error",
			{
				"multiline": {
					"delimiter": "semi",
					"requireLast": true
				},
				"singleline": {
					"delimiter": "semi",
					"requireLast": false
				}
			}
		],
		"@typescript-eslint/member-ordering": "error",
		"@typescript-eslint/no-empty-function": "off",
		"@typescript-eslint/no-explicit-any": "off",
		"@typescript-eslint/no-non-null-assertion": "error",
		"@typescript-eslint/no-parameter-properties": "off",
		"@typescript-eslint/no-use-before-define": "off",
		"@typescript-eslint/no-var-requires": "off",
		"@typescript-eslint/prefer-for-of": "error",
		"@typescript-eslint/prefer-function-type": "error",
		"@typescript-eslint/quotes": [
			"error",
			"single"
		],
		"@typescript-eslint/semi": [
			"error",
			"always"
		],
		"@typescript-eslint/unified-signatures": "error",
		"arrow-body-style": "error",
		"arrow-parens": [
			"off",
			"as-needed"
		],
		"camelcase": "error",
		"comma-dangle": "off",
		"complexity": "off",
		"constructor-super": "error",
		"curly": "error",
		"dot-notation": "error",
		"eol-last": "error",
		"eqeqeq": [
			"error",
			"smart"
		],
		"guard-for-in": "error",
		"id-blacklist": [
			"error",
			"any",
			"Number",
			"number",
			"String",
			"string",
			"Boolean",
			"boolean",
			"Undefined",
			"undefined"
		],
		"id-match": "error",
		"import/no-deprecated": "warn",
		"import/order": "off",
		"jsdoc/no-types": "error",
		"max-classes-per-file": "off",
		"max-len": [
			"error",
			{
				"code": 140
			}
		],
		"new-parens": "error",
		"no-bitwise": "error",
		"no-caller": "error",
		"no-cond-assign": "error",
		"no-console": [
			"error",
			{
				"allow": [
					"log",
					"warn",
					"dir",
					"timeLog",
					"assert",
					"clear",
					"count",
					"countReset",
					"group",
					"groupEnd",
					"table",
					"dirxml",
					"error",
					"groupCollapsed",
					"Console",
					"profile",
					"profileEnd",
					"timeStamp",
					"context"
				]
			}
		],
		"no-debugger": "error",
		"no-empty": "off",
		"no-eval": "error",
		"no-fallthrough": "error",
		"no-invalid-this": "off",
		"no-multiple-empty-lines": "off",
		"no-new-wrappers": "error",
		"no-shadow": [
			"error",
			{
				"hoist": "all"
			}
		],
		"no-throw-literal": "error",
		"no-trailing-spaces": "error",
		"no-undef-init": "error",
		"no-underscore-dangle": "error",
		"no-unsafe-finally": "error",
		"no-unused-expressions": "error",
		"no-unused-labels": "error",
		"object-shorthand": "error",
		"one-var": [
			"error",
			"never"
		],
		"prefer-arrow/prefer-arrow-functions": "error",
		"quote-props": [
			"error",
			"as-needed"
		],
		"radix": "error",
		"space-before-function-paren": [
			"error",
			{
				"anonymous": "never",
				"asyncArrow": "always",
				"named": "never"
			}
		],
		"spaced-comment": "error",
		"use-isnan": "error",
		"valid-typeof": "off",
		"@typescript-eslint/tslint/config": [
			"error",
			{
				"rules": {
					"component-class-suffix": true,
					"component-selector": [
						true,
						"element",
						"app",
						"kebab-case"
					],
					"contextual-lifecycle": true,
					"directive-class-suffix": true,
					"directive-selector": [
						true,
						"attribute",
						"app",
						"camelCase"
					],
					"import-blacklist": [
						true,
						"rxjs/Rx"
					],
					"import-spacing": true,
					"jsdoc-format": true,
					"no-conflicting-lifecycle": true,
					"no-host-metadata-property": true,
					"no-input-rename": true,
					"no-inputs-metadata-property": true,
					"no-output-native": true,
					"no-output-on-prefix": true,
					"no-output-rename": true,
					"no-outputs-metadata-property": true,
					"no-reference-import": true,
					"one-line": [
						true,
						"check-catch",
						"check-else",
						"check-finally",
						"check-open-brace",
						"check-whitespace"
					],
					"template-banana-in-box": true,
					"template-no-negated-async": true,
					"use-lifecycle-interface": true,
					"use-pipe-transform-interface": true,
					"whitespace": [
						true,
						"check-branch",
						"check-decl",
						"check-operator",
						"check-separator",
						"check-type",
						"check-typecast"
					]
				}
			}
		],
		quotes: ['error', 'single'],
		semi: 'error',
		indent: ['error', 'tab', {
			ArrayExpression: 1,
			CallExpression: { arguments: 1 },
			outerIIFEBody: 0,
			SwitchCase: 1,
		}],
		curly: 'error',
		'no-unneeded-ternary': 'error',
		'array-bracket-spacing': ['error', 'never'],
		'arrow-spacing': 'error',
		'block-spacing': 'error',
		'comma-dangle': ['error', 'always-multiline'],
		'comma-spacing': ['error', { before: false, after: true }],
		'comma-style': 'error',
		'func-call-spacing': ['error', 'never'],
		'brace-style': ["error", "1tbs", { "allowSingleLine": false }],
		'key-spacing': 'error',
		'keyword-spacing': 'error',
		'no-constant-condition': 'off',
		'no-empty': ['error', { allowEmptyCatch: true }],
		'no-multi-spaces': 'error',
		'no-unused-vars': ['warn', { varsIgnorePattern: '_', args: 'none' }],
		'no-var': 'error',
		'object-curly-spacing': ['error', 'always'],
		'prefer-arrow-callback': 'error',
		'prefer-const': 'error',
		'quote-props': ['error', 'as-needed'],
		'space-in-parens': 'error',
		'space-infix-ops': ['error', { int32Hint: false }],
		'space-before-blocks': 'error',
	}
};
