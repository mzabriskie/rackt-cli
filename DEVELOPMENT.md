# Developer Guide

First clone the repo and install dependencies

```bash
$ git clone https://github.com/instructure-react/runt.git
$ cd runt && npm install
```

Next link runt

```bash
$ cd react-modal
$ npm link ../runt
```

Remove existing config from react-modal

```bash
$ rm karma.conf.js
$ rm webpack.config.js
$ rm -rf scripts
```

Finally invoke runt

```bash
# Run tests
$ ./node_modules/.bin/runt test

# Run build
$ ./node_modules/.bin/runt build

# Run dev build
$ ./node_modules/.bin/runt build --dev
# or
$ ./node_modules/.bin/runt build -D

# Release
$ ./node_modules/.bin/runt release

# Release preview
$ ./node_modules/.bin/runt release --preview
# or
$ ./node_modules/.bin/runt release -P
```
