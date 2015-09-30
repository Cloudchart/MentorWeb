import passport from 'passport'
import { Strategy as LocalStrategy } from 'passport-local'
import db from '../models/database'

passport.use(new LocalStrategy({ usernameField: 'email', passwordField: 'password'}, (email, password, done) => {
  db.User.find({ where: { email: email } }).then((user) => {
    if (!user) return done(null, false)
    if (!user.isPasswordValid(password)) return done(null, false)
    return done(null, user)
  })
}))
