const express =require ('express');
const router = express.Router(); 
const {
        createRegister,
        getRegister,
        getDetail,
        deleteDetails
      } = require ('../controllers/registerControllers')

//GET all register
router.get('/', getRegister)

//GET single register
router.get('/:email',getDetail)

//POST a new register
router.post('/',createRegister);

//DELET single workouts
router.delete('/:id',  deleteDetails)

module.exports = router 