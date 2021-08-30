const Foods = require('../models/foods')
const foodsCtrl = {
    getFoods: async (req, res) => {
        try {
            const food = await Foods.find()
            res.json(food)

        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    getSingleFood: async (req, res) => {
        try {
            const single = await Foods.findById(req.single.id)
            res.json(single)
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    }
}

module.exports = foodsCtrl