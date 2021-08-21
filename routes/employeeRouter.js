const router = require('express').Router()
const employeeCtrl = require('../controllers/employeeCtrl')
const auth = require('../middleware/auth')

router.post('/register', employeeCtrl.register)

router.post('/login', employeeCtrl.login)

router.get('/logout', employeeCtrl.logout)

router.get('/refresh_token', employeeCtrl.refreshToken)

router.get('/infor', auth, employeeCtrl.getUser)

module.exports = router