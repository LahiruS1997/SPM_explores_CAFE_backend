const router = require('express').Router()
const foodsCtrl = require('../controllers/foodsCtrl')

router.route('/foods')
    .get(foodsCtrl.getFoods)

router.route('/singleFood')
    .get(foodsCtrl.getSingleFood)

module.exports = router