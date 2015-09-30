import express        from 'express'
import passport       from 'passport'


let router = express.Router()


router.get('/', (req, res, next) => {
  if (!req.user) {
    return res.redirect('/login')
  }
  next()
})


router.get(/\/login|\/register/, (req, res, next) => {
  if (req.user) {
    return res.redirect('/')
  }
  next()
})


router.get('/', (req, res) => {
  res.render('index', { title: 'Hello World!', user: req.user })
})


router.get('/login', (req, res) => {
  res.render('login', {})
})


router.get('/logout', (req, res) => {
  req.logout()
  res.redirect('/')
})


export default router
