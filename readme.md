# <img valign="text-bottom" height="49" src="https://raw.githubusercontent.com/sdras/awesome-actions/master/awesome-actions.png" align="right"> Awesome readme to data action
> A GitHub Action that transform awesome readme to data and commit in PR 


## Usage

You can create a `.github/workflows/create-dataset.yml` file:

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
        with:
          ref: ${{ github.head_ref }}
      - name: Awesome readme to data
        uses: Scrum/awesome-readme-to-data-action@v0.1.4
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
      - name: Commit files and Push changes
        run: |
          git config --local user.email "action@github.com"
          git config --local user.name "GitHub Action"
          git add -A
          git commit -m "feat: update data file"
          git remote set-url origin https://x-access-token:${{ secrets.GITHUB_TOKEN }}@github.com/${{ github.repository }}
          git push
```
