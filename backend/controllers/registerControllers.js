const Register = require('../models/register');


//GET all registers
const getRegister = async (req,res) => {
    const registers = await Register.find({}).sort({createAt: -1})

    res.status(200).json(registers)
}


//GET single registers
const getDetail = async (req,res) => {
    try {
        const {email} = req.params
        const register = await Register.findOne({email})
        if (register.length == 0) throw Error("Not Found")
        res.status(200).json(register)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

//POST a new registers
const createRegister = async (req,res) =>{
    const {fname,lname,mnumber,email,password} = req.body

    //add doc to DB  
    try{

        const register = await Register.create({fname,lname,mnumber,email,password})
        res.status(200).json(register)

    }catch(error){

        res.status(400).json({error:error.message})
    }
}


//DELET single registers
const deleteDetails = async(req,res)=>{
    try {
        const {id} = req.params;
        const register = await Register.findByIdAndDelete(id)
        if (!register) throw Error("Not found")
        res.sendStatus(200)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

module.exports = { 
    createRegister,
    getRegister,
    getDetail,
    deleteDetails
 }