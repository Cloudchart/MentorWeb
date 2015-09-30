import express    from 'express'
import session    from 'express-session'
import connect    from 'connect-redis'
import engine     from 'express-dot-engine'
import bodyParser from 'body-parser'
import passport   from 'passport'
import morgan     from 'morgan'
import path       from 'path'

import graphqlHTTP  from 'express-graphql'

import db       from './models/database'
import schema   from './graphql/schema'

import router       from  './router'
import auth_router  from './routes/auth'

import './strategies/local'
import './strategies/facebook'
import './strategies/twitter'

let app     = express()
let store   = connect(session)


app.use(morgan('dev'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(session({
  store:              new store({ host: '127.0.0.1', port: 6379 }),
  name:               'mentor',
  secret:             'keyboard cat',
  saveUninitialized:  true,
  resave:             false
}))


app.use(passport.initialize())
app.use(passport.session())

passport.serializeUser((user, done) => {
  done(null, user.id)
})

passport.deserializeUser((id, done) => {
  db.User.findById(id).then((user) => {
    done(null, user)
  })
})


app.engine('dot', engine.__express)
app.set('views', path.join(__dirname, './views'))
app.set('view engine', 'dot')


app.use('/', router)
app.use('/auth', auth_router)
app.use('/graphql', graphqlHTTP((req) => ({ schema: schema, rootValue: { user: req.user }, pretty: true })))
app.use('/assets', express.static(__dirname + '/public/assets'))


export default app.listen(9090)
