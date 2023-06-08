const asyncHandler = require('express-async-handler')
// @desc GET goals
// @rouete GET/api/goals
// @access Private

const getGoals = asyncHandler(async (req,res) => {
    res.status(200).json({ message : 'Get Goalsss'})
})

// @desc SET goals
// @rouete POST /api/goals
// @access Private

const setGoal = asyncHandler(async (req,res) => {
    res.status(200).json({ message : 'Set Goalsss'})
})

// @desc UPDATE goals
// @rouete PUT /api/goals/:id
// @access Private

const updateGoal = asyncHandler(async (req,res) => {
    res.status(200).json({ message : `Update Goal ${req.params.id}`})
})

// @desc DELETE goals
// @rouete DELETE /api/goals
// @access Private

const deleteGoal = asyncHandler(async (req,res) => {
    res.status(200).json({ message : `Delete Goal ${req.params.id}`})
})


module.exports = {
    getGoals, 
    setGoal, 
    updateGoal, 
    deleteGoal,
}