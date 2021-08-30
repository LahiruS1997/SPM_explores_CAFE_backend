const Orders = require('../models/orderModel')

const orderCtrl = {
    getOrders: async (req, res) => {
        try {
            const orders = await Orders.find()
            res.json(orders)

        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    createOrders: async (req, res) => {
        try {
            const {order_id, name, images, price, status} = req.body;
            // if(!images) return res.status(400).json({msg: "No image upload"})
            
            const orders = await Orders.findOne({order_id})

            if(orders)
                return res.status(400).json({msg: "This Order already exists."})

            const newOrders = new Orders({
                order_id, 
                name, 
                images, 
                price, 
                status
            })
            await newOrders.save()
            res.json({msg: "Order Created."})

        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    deleteFood: async (req, res) => {
        try {
            await Orders.findByIdAndDelete(req.params.id)
            res.json({msg: "Delete the category"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    }

}

module.exports = orderCtrl