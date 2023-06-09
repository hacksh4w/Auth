const express = require('express')
const router = express.Router()
const { getGoals, 
        setGoal, 
        updateGoal, 
        deleteGoal } = require('../controllers/goalControllers')

        const { protect } = require('../middleware/authMiddleware')

router.route('/').get(protect, getGoals).post(protect, setGoal)
// combination of router.get('/', getGoals) && router.post('/', setGoal)

//comibnation of router.put('/:id', updateGoal) && router.delete('/:id', deleteGoal)
router.route('/:id').put(protect, updateGoal).delete(protect, deleteGoal)

module.exports = router