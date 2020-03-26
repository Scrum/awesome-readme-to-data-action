# <img valign="text-bottom" height="49" src="https://raw.githubusercontent.com/sdras/awesome-actions/master/awesome-actions.png" align="right"> Awesome readme to data action
> A GitHub Action that transform awesome readme to data and commit in PR 


## Usage

You can create a `.github/workflows/label-sponsors.yml` file:

```yaml
name: Awesome readme to data action
on:
  pull_request:
    types: [opened]
  branches:
    - master
jobs:
  build:
    name: awesome readme to data
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: Scrum/awesome-readme-to-data-action@v1
        with:
          entry: 'path/to/file'
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```