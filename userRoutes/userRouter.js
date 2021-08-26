const router = require('express').Router()
const userC = require('../controllers/userC')
const auth = require('../middleware/auth')

router.post('/test', (req,res)=>{
    res.json({msg: "test completed"})
})

router.post('/register', userC.register)

router.post('/login', userC.login)

router.get('/logout', userC.logout)

router.get('/refresh_token', userC.refreshToken)

router.get('/infor', auth, userC.getUser)


module.exports = router