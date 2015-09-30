import express        from 'express'
import passport       from 'passport'

let router = express.Router()

router.get('/facebook', passport.authenticate('facebook'))

router.get('/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/login' }),
  (req, res) => res.redirect('/')
)


router.get('/twitter', passport.authenticate('twitter'))

router.get('/twitter/callback',
  passport.authenticate('twitter', { failureRedirect: '/login' }),
  (req, res) => res.redirect('/')
)


export default router
