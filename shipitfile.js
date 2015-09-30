module.exports = function(shipit) {

  require('shipit-deploy')(shipit)

  shipit.initConfig({

    default: {
      workspace: './tmp/deploy',
      deployTo: '~/apps/web-app-mentor',
      ignores: ['.git', 'node_modules'],
      repositoryUrl: 'https://github.com/seanchas/deku.git'
    },

    staging: {
      servers: 'rails@staging1.cochart.net'
    }

  })

}
