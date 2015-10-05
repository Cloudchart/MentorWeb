import path           from 'path'
import Sequelize      from 'sequelize'
import configuration  from '../config/database.json'

let env     = process.env.NODE_ENV || 'development'
let config  = configuration[env]
let db      = {}

let sequelize = new Sequelize(config.database, config.username, config.password, config)

;

['user', 'auth_token', 'theme'].forEach(name => {
  let model = sequelize.import(path.join(__dirname, name + '.js'))
  db[model.name] = model
})

Object.keys(db).forEach((name) => {
  if ('associate' in db[name]) {
    db[name].associate(db)
  }
})

db.sequelize = sequelize

export default db
