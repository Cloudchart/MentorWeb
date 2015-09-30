require('babel/register')
var BabelRelayPlugin = require('babel-relay-plugin')
var Schema = require('./data/schema.json')
module.exports = BabelRelayPlugin(Schema.data)
