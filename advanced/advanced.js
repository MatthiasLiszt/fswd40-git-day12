
var employeeSchema={
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "EmployeeData",
    "description": "something from Codefactory",
    "type": "object",
    "properties": {
        "id": {
            "description": "The unique identifier for a product",
            "type": "integer"
            
        },
        "firstName": {
            "description": "The first name of the employee",
            "type": "string"
            
        },
        "lastName": {
            "description": "The last name of the employee",
            "type": "string"
        },
        "email": {
            "description": "The e-mail address of the employee",
            "type": "string"
        },
        "jobTitle": {
            "description": "The job title of the employee",
            "type": "string"
        },
        "salary": {
            "description": "the employee's salary",
            "type": "number",
            "minimum": 0,
            "exclusiveMinimum": true
        }
    },
    "required": ["id","firstName","lastName","email","jobTitle","salary"]
};

var employees=[];

function fill10employees(){
  var firstname=['Martin',"Linda","Lisa","Patrick","Mario","Ida","Sigfrid","Herbert","Hans","Tanja","Maria"];
  var lastname=['Martin',"Linda","Lisa","Patrick","Mario","Ida","Sigfrid","Herbert","Hans","Tanja","Maria"];
  var jobTitle=["programmer","developer","consultant","manager"];
  var i=0;
  
  for(i=0;i<10;++i){employees.push(JSON.parse((JSON.stringify(employeeSchema))));}

  for(i=0;i<10;++i)
   {

    var seed=Math.random();  	
    var seed2=Math.random();
    employees[i].properties.id.content=Math.floor(seed*10000*10000);
    
    employees[i].properties.firstName.content=firstname[Math.floor(seed*9)];
    employees[i].properties.lastName.content=lastname[Math.floor(seed2*9)];
    employees[i].properties.email.content=employees[i].properties.firstName.content+"."+employees[i].properties.lastName.content+"@gmail.com";
    employees[i].properties.jobTitle.content=jobTitle[Math.floor(seed*3)];
    employees[i].properties.salary.content=Math.floor((seed2)*5000)%5000;
    
   }	 
   console.log(JSON.stringify(employees));
}

