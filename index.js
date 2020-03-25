require('dotenv').config();
const { Toolkit } = require('actions-toolkit');
const fs = require('fs');
const path = require('path');

Toolkit.run(async tools => {
  const data = fs.readFileSync(path.resolve('readme.md'));
  console.dir({data})
  tools.log.success('Label successfully applied. Have a nice day!')
}, {
  event: [
    'pull_request.opened',
    'pull_request.synchronize'
  ],
  secrets: [
    'GITHUB_TOKEN'
  ]
})