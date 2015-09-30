import passport from 'passport'
import { Strategy } from 'passport-twitter'
import Configuration from '../config/auth.json'
import db from '../models/database'

passport.use(new Strategy(Configuration.twitter, (accessToken, tokenSecret, profile, done) => {

  db.AuthToken.find({

    where: {
      provider_name:  'twitter',
      provider_id:    profile.id
    },

    include: [
      { model: db.User }
    ]

  }).then((token) => {

    if (token) {
      return done(null, token.User)
    }

    db.User.create({ name: profile.displayName }).then((user) => {
      db.AuthToken.create({ provider_id: profile.id, provider_name: 'twitter', user_id: user.id }).then((token) => {
        return done(null, user)
      })
    })

  })

}))
