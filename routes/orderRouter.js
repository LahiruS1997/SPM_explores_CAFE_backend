const router  = require('express').Router()
const orderCtrl = require('../controllers/orderCtrl')
 
router.route('/orders')
    .get(orderCtrl.getOrders)
    .post(orderCtrl.createOrders)

    router.route('/orders/:id')
        .delete(orderCtrl.deleteFood)

module.exports = router