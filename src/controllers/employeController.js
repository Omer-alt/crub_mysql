
const Employe = require("../models/employeModel")

const findAll = function(req, res){
    Employe.findAll(function(err, resp){
        console.log("all Employe")
        if(err)
            return res.send(err);

        res.send(resp)
    })
}

const findById = function(req, res){
    Employe.findById(req.params.id ,function(err, employee){
        if(err)
            res.send(err)
        res.status(201).json(employee)
    })
}

const create = function(req, res){
    const new_employe = new Employe(req.body)
    try {
        if(req.body.constructor === Object && Object.keys(req.body).length === 0){
            res.status(400).send({error:true, message:"please complete all required field" })
    
        } else {
            Employe.create( new_employe,function(err, employee){
                if(err)
                    return res.send(err)
                    
                res.status(201).json({error:false, message:"employee added sucessfully", data: employee})
                console.log(employee)
            })
        }  
    } catch (error) {
        console.log(error)

        res.sendStatus(500)
    }
    
}
const update = function(req, res){
    const new_employe = new Employe(req.body)
    
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({error:true, message:"please complete all required field" })

    } else {
        Employe.update( req.params.id, new_employe,function(err, employee ){
            if(err)
                res.send(err)
            res.status(201).json({error:false, message:"employee updated sucessfully"})
        })
    }  
}
const deleted = function(req, res){
    Employe.delete(req.params.id, function(err, employee){
        if(err){
            res.send(err)
        }
        res.json({error:false, message:"Employee sucessfuly deleted"})
    })
}


module.exports = {
    findAll,
    findById,
    create,
    update,
    deleted
}










