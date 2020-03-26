require('dotenv').config();
const fs = require('fs');
const path = require('path');
const { Toolkit } = require('actions-toolkit');
const awesomeReadmeToData = require('awesome-readme-to-data');


Toolkit.run(async tools => {
  const readmeFileName = 'readme.md';
  const dataFileName = './data.json';
  const contents = tools.getFile(readmeFileName);
  const data = await awesomeReadmeToData(contents);
  fs.writeFileSync(path.resolve(path.join(tools.workspace, dataFileName)), data);
}, {
  event: [
    'pull_request.opened',
    'pull_request.synchronize'
  ],
  secrets: [
    'GITHUB_TOKEN'
  ]
})