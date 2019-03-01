# DEPRECATED

This is no longer supported, rule included in this plugin is now under https://github.com/dominiczaq/eslint-plugin-tidio-additional-rules

# eslint-plugin-disallow-literals-as-jsxelement-children

Disallow string literals as direct JSXElement children

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-disallow-literals-as-jsxelement-children`:

```
$ npm install eslint-plugin-disallow-literals-as-jsxelement-children --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-disallow-literals-as-jsxelement-children` globally.

## Usage

Add `disallow-literals-as-jsxelement-children` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "disallow-literals-as-jsxelement-children"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "disallow-literals-as-jsxelement-children/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





