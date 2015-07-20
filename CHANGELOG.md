# Changelog

### 0.1.0 (Jan 03, 2015)

- Initial release

### 0.1.1 (Jan 03, 2015)

- [322e68f](../../commit/322e68f) Fixing issue with Travis CI preferring bash over shell

### 0.1.2 (Jan 03, 2015)

- [a78e2f8](../../commit/a78e2f8) Switching all tasks to use bash

### 0.2.0 (Jun 12, 2015)

- [a1c1028](../../commit/a1c1028) Removing browserify in favor of webpack
- [12dd98e](../../commit/12dd89e) Using webpack for testing
- [9d600c7](../../commit/9d600c7) Using babel-loader for handling JSX

### 0.3.0 (Jun 11, 2015)

- [14e720d](../../commit/14e720d) Supporting ES6 syntax via babel
- [49489e3](../../commit/49489e3) Tests are now expected to be under `lib/` using suffix `-test.js`

### 0.3.1 (Jun 11, 2015)

- [e942c2f](../../commit/e942c2f) Fixing bad reference to dependency

### 0.3.2 (Jun 12, 2015)

- [b6313bd](../../commit/b6313bd) Fixing issue with releasing to npm

### 0.4.0 (Jul 19, 2015)

- [166348e](../../commit/166348e) Removing error triggered by running `rackt` on a non-project directory.
- [b0f65b4](../../commit/b0f65b4) Adding ability to generate a component.
- [b08cf8e](../../commit/b08cf8e) Adding ESlint to testing.
- [1bbf5e6](../../commit/1bbf5e6) Honoring `main` in package.json as component entry.
- [c10754d](../../commit/c10754d) Changing `test --ci` option to use standard `--single-run`.
- [d0b6a01](../../commit/d0b6a01) Renaming `dev` command to `server`.
- [fe8e9ad](../../commit/fe8e9ad) Allowing additional parameters to be passed to dev server.
