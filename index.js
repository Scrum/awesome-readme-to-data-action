require('dotenv').config();
const fs = require('fs');
const path = require('path');
const { Toolkit } = require('actions-toolkit');
const awesomeReadmeToData = require('awesome-readme-to-data');


Toolkit.run(async tools => {
  const readmeFileName = 'readme.md';
  const dataFileName = 'data.json';
  const contents = tools.getFile(readmeFileName);
  const data = await awesomeReadmeToData(contents);
  fs.writeFileSync(dataFileName, data);
  await tools.runInWorkspace('git', ['add', 'data.json']);
  await tools.runInWorkspace('git', ['-m', '"feat: added new data"']);
  await tools.runInWorkspace('git', ['push']);
}, {
  event: [
    'pull_request.opened',
    'pull_request.synchronize'
  ],
  secrets: [
    'GITHUB_TOKEN'
  ]
})