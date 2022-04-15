var dbConnect = require('../../config/db.config')

var Employe = function(employee){
    this.first_name = employee.first_name;
    this.last_name = employee.last_name;
    this.email = employee.email;
    this.phone = employee.phone;
    this.organisation = employee.organisation;
    this.designation = employee.designation;
    this.salary = employee.salary;
    this.status = employee.status? employee.status: 1;
    this.created_at = new Date();
    this.updated_at = new Date() 
}
//creer le model en bd
Employe.createTable = function(){
    dbConnect.query('CREATE TABLE IF NOT EXISTS employee (first_name VARCHAR(25) NOT NULL, last_name VARCHAR(25), email VARCHAR(60) NOT NULL, phone INTEGER, organisation VARCHAR(25), designation VARCHAR(25), salary INTEGER, status INTEGER NOT NULL, created_at DATE, updated_at DATE, id INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT )')
}


Employe.create = function(newEmp, result){
    var value = [newEmp.first_name, newEmp.last_name, newEmp.email, newEmp.phone, newEmp.organisation, newEmp.designation, newEmp.salary, newEmp.status, newEmp.created_at, newEmp.updated_at]
    dbConnect.query(
        // 'INSERT INTO employee SET ?',
        `INSERT INTO employee (first_name, last_name, email, phone, organisation, designation, salary, status, created_at, updated_at) VALUES (?) `,
        [value],
        function(err, res){
            if(err){
                console.log("error: ", err)
                result(err, null)
            } else {
                console.log("employee cree :", res.insertId)
                result(null, res.insertId)
            }
        }
    )
}

Employe.findById = function(id, result){
    dbConnect.query("select * from employee where id=? ", id, function(err, res){
        if(err){
            console.log("error :", err)
            result(err, null)
        } else {
            console.log(res)
            result(null, res)
        }
    })
}

Employe.findAll = function(result){
    dbConnect.query("select * from employee ", function(err, res){
        if(err){
            console.log("error :", err)
            result(err, null)
        } else {
            console.log("Les employees ",res)
            result(null, res)
        }
    })
}

Employe.update = function(id, employee, result){
    dbConnect.query("UPDATE employee SET first_name=?, last_name=?, email=?, phone=?, organisation=?, designation=?,salary=?  where id=? ", [employee.first_name, employee.last_name, employee.email, employee.phone, employee.organisation, employee.designation, employee.salary, id], function(err, res){
        if(err){
            console.log("error :", err)
            result(err, null)
        } else {
            console.log(res)
            result(null, res)
        }
    })
}

Employe.delete = function(id, result){
    dbConnect.query("DELETE FROM employee WHERE id=?", [id], function(err, res){
        if(err){
            console.log("error :",err)
            result(err,null)
        } else {
            result(null, res)
        }
    })
}

module.exports = Employe;














