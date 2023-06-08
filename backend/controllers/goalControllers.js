// @desc GET goals
// @rouete GET/api/goals
// @access Private

const getGoals = (req,res) => {
    res.status(200).json({ message : 'Get Goalsss'})
}

// @desc SET goals
// @rouete POST /api/goals
// @access Private

const setGoal = (req,res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add a text')
    }
    res.status(200).json({ message : 'Set Goalsss'})
}

// @desc UPDATE goals
// @rouete PUT /api/goals/:id
// @access Private

const updateGoal = (req,res) => {
    res.status(200).json({ message : `Update Goal ${req.params.id}`})
}

// @desc DELETE goals
// @rouete DELETE /api/goals
// @access Private

const deleteGoal = (req,res) => {
    res.status(200).json({ message : `Delete Goal ${req.params.id}`})
}


module.exports = {
    getGoals, 
    setGoal, 
    updateGoal, 
    deleteGoal,
}