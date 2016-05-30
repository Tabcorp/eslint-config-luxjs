eslint-config-luxjs
===================

## What?

Guidelines for sensible coding. This config is used by [ESLint][eslint-site] to automatically ensure developers across projects are adhering to a single, coherent JavaScript coding style.

## Why?

[Why does JavaScript need a style guide?](https://github.com/airbnb/javascript/issues/102).

## How?

**Install ESLint and this config**

```sh
npm install --save-dev eslint eslint-config-luxjs
```

**Add config to [`.eslintrc`][eslint-extends] (or [`package.json`][eslint-package]) in the root of your project**

```js
{
    "extends": "luxjs"
}
```

**_Optional:_ Add script to [`package.json`][package-json-scripts]**

```js
{
    "devDependencies": {
        "eslint": "*",
        "eslint-config-luxjs": "*"
    },
    "scripts": {
        "lint": "eslint ."
    }
}
```

Then, on the command line:

```sh
$ npm run lint
```

[eslint-site]: http://eslint.org/
[eslint-extends]: http://eslint.org/docs/developer-guide/shareable-configs#using-a-shareable-config
[eslint-package]: http://eslint.org/docs/user-guide/configuring#configuration-file-formats
[package-json-scripts]: https://docs.npmjs.com/misc/scripts
