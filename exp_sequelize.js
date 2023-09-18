const Sequelize=require('sequelize');

const sequelize=require('../utilis/database')

const Expense=sequelize.define('expense',{
    category:{
        type:Sequelize.STRING,
        allowNull:false

    },
     description:{
        type:Sequelize.STRING,
        allowNull:false
    },
    amount:{
        type:Sequelize.INTEGER,
        allowNull:false,
    },
    id:{
        type:Sequelize.INTEGER,
        unique:true,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true
    }
   
   
   
})

module.exports=Expense;
