require('dotenv').config()
const { Toolkit } = require('actions-toolkit')

Toolkit.run(async tools => {
  console.dir({tools})
  // tools.log.success('Label successfully applied. Have a nice day!')
}, {
  event: [
    'pull_request.opened',
    'pull_request.synchronize'
  ],
  secrets: [
    'GITHUB_TOKEN'
  ]
})