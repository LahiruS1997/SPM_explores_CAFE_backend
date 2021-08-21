const Employees = require('../models/employeeModel')

const authManager = async (req, res, next) => {
    try {
        //get user by id
        const user = await Employees.findOne({
            _id: req.user.id
        })
        //customer
        if(user.role === 0)
            return res.status(400).json({msg: "Manager resources access denied"})

        //kitchen manager
        if(user.role === 1)
        return res.status(400).json({msg: "Manager resources access denied"})

        //Cashier
        if(user.role === 2)
        return res.status(400).json({msg: "Manager resources access denied"})

        //Chef
        if(user.role === 3)
        return res.status(400).json({msg: "Manager resources access denied"})

        next() 

    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
}

module.exports = authManager