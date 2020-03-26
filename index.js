require('dotenv').config();
const fs = require('fs');
const path = require('path');
const { Toolkit } = require('actions-toolkit');
const awesomeReadmeToData = require('awesome-readme-to-data');
const makeDir = require('make-dir');


Toolkit.run(async tools => {
  const readmeFileName = tools.inputs.entry;
  const dataFileName = path.resolve(path.join(tools.workspace, tools.inputs.output));
  const contents = tools.getFile(readmeFileName);
  const data = await awesomeReadmeToData(contents);
  makeDir.sync(path.dirname(dataFileName));
  fs.writeFileSync(dataFileName, JSON.stringify(data));
}, {
  event: [
    'pull_request.opened',
    'pull_request.synchronize'
  ],
  secrets: [
    'GITHUB_TOKEN'
  ]
})