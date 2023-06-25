const mongoose = require("mongoose");
const { number } = require("yargs");
const Schema = mongoose.Schema;
require('../app.js') ;

const memberSchema = new Schema({
    id:Number,
    firstName: String,
    lastName: String,
    phone : number , 
    email: String,
    password: String ,
    joinDate : Date,
    birthday:Date 

  });

  const MemberModel = mongoose.model('Member', memberSchema);

  module.exports = MemberModel;
  
  // const newMember= new member({
    
  //   firstName: 'rihab1',
  //   lastName: 'bel arbi',
  //   email: 'rihab@gmail.com',
  //   // password: String ,
  //   joinDate : '2022-10-01',
  //   birthday:'2002-01-22' 
  // });
  
  // newMember.save()
  // .then(() => {
  //   console.log('User created successfully!');
  // })
  // .catch((err) => {
  //   console.error(err);
  // });
