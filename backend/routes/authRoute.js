const express = require('express');
const router = express.Router();
const cors = require('cors');
const { test , registerUser , loginUser} = require('../controllers/authController');
const {registerDev , loginDev} = require('../controllers/authempController')
const {registeruser , loginuser} = require('../controllers/authuserController')
router.use(express.json())
//middlewares
router.use(
    cors({
        credentials: true,
        origin: 'http://localhost:5173'   
    })
)

router.get('/' , test)
router.post('/register' , registerUser)
router.post('/login' , loginUser)

router.post('/dev/register' , registerDev)
router.post('/dev/login' , loginDev)

router.post('/user/register' , registeruser)
router.post('/user/login' , loginuser)


module.exports = router