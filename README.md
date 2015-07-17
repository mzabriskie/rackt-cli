# rackt-cli

Command line interface for automating common tasks when building React.js components.

## About

The motivation for this cli is to make it simple to get started when creating a new component, and eliminate the boilerplate that is commonly copy/pasted from one project to another. This cli provides all config, dev dependencies, and scripts for building, testing, and releasing. There is even a command for generating a new component structure. By leveraging `rackt-cli`, you are able to focus on writing code.

## Installing

```bash
$ npm install -g rackt-cli
```

## Usage

| Command             | Purpose                                                               |
| ------------------- | --------------------------------------------------------------------- |
| `rackt`             | Prints out a list of available commands.                              |
| `rackt init <name>` | Creates a folder called `<name>` and generates a component structure. |
| `rackt build`       | Builds the component to `dist/` for UMD, and `build/` for CommonJS.   |
| `rackt server`      | Starts the dev server using port `8080`.                              |
| `rackt release`     | Publish a new release to npm. Use `--preview` to preview release.     |
| `rackt test`        | Runs the test suite. Use `--single-run` for single run.               |
| `rackt pages`       | Deploys the examples to gh-pages.                                     |

