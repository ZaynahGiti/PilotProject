/**
* Employee.js
*/

module.exports = {

  attributes: {
 
	  name:{
        type:"string",
        required:true,
        minLength: 2
      },      
      date_birth:{
        type:"date",
        required:true
      
      },
	  department:{
        type:"string",
        required:true
      },
     year_experience:{
        type:"number",
        required:true
     }
  }
};

