/*********************************************************************
* WEB222 SSA – Assignment 01
* I declare that this assignment is my own work in accordance with
* Seneca Academic Policy. No part of this assignment has been 
* copied manually or electronically from any other source
* (including web sites) or distributed to other students.
*
* Name: Senal Goonetilaka  Student ID: 136471174  Date: 24/09/2018
*
*********************************************************************/ 



// Task 1
//
function displayStudentInfo(name, program, courses, hasJob) {
  var std_Info;
  
  if(hasJob) {
        std_Info = "My name is " + name + " and I’m in the "+ program +" program. I’m taking " + courses + " courses this semester, and I do have a part-time job.";
		
    }
	else {
        std_Info = "My name is " + name + " and I’m in the "+ program +" program. I’m taking " + courses + " courses this semester, and I don't have a part-time job.";        
    }    
  console.log(std_Info);
    
}

// Task 2
//
function calculateAgeStats(birthDate) {

  
  var days = new Array(7);
  days[0] = "Sun";
  days[1] = "Mon";
  days[2] = "Tue";
  days[3] = "Wed";
  days[4] = "Thu";
  days[5] = "Fri";
  days[6] = "Sat";
    
    
  var dob = new Date(birthDate);  
  var day_name = days[dob.getDay()];
  
  var current_time = Date.now();
  var duration = Math.floor((current_time - dob)/1000/3600);
  console.log("You were born on " + day_name + " " + birthDate + " and have been alive for approximately " + duration + " hours.")
  
}


// Task 3
//
function convertTempFrom(value, scale = 'c') {
  var temp;
  var converted_Temp;
  
  switch (scale){
      
    case 'c':
    case 'C':
      temp = Math.round((value*1.8) + 32);
      converted_Temp = temp + " F";
      break;
    
    case 'f':
    case 'F':
      temp = Math.round((value-32) / 1.8);
      converted_Temp = temp + " C";
      break;
    
    default:
      converted_Temp = "ERROR: Unknown Scale - " +scale;
      break;
  }
  
  return converted_Temp; 
}

// Task 4
//
function displayOddEven(rangeStart, rangeEnd) {
	
    for(var i = rangeStart; i < = rangeEnd; i++){
      if(i % 2 == 0)
        console.log(i + " is even\n");
      else
        console.log(i + " is odd\n");
    }    
}


// Task 5
//
var findLargest = function () {
    
	var largest_Val = arguments[0];
	
    for(var i = 1; i < arguments.length; i++){
		
        if(arguments[i] > largest_Val){
			
            largest_Val = arguments[i];
        }            
    }
    
    return largest_Val;
};

//Task 6
//
function calculateAverage() {
  
  var total = 0;
  var average = 0;
   
  for (var x = 0; x < arguments.length; x++) {
    
    total += arguments[x];
  }
  
  average = (total / arguments.length);
  
  console.log(average);
  
}

// Task 7
//
function formatGrades() {
    var grade_str = "";

    var letterFromMark = function (mark) {
        var grade;
        switch (true) {
            case (mark >= 90 && mark <= 100):
                grade = "A+";
                break;
            case (mark >= 80 && mark <= 89):
                grade = "A";
                break;
            case (mark >= 75 && mark <= 79):
                grade = "B+";
                break;
            case (mark >= 70 && mark <= 74):
                grade = "B";
                break;
            case (mark >= 65 && mark <= 69):
                grade = "C+";
                break;
            case (mark >= 60 && mark <= 64):
                grade = "C";
                break;
            case (mark >= 55 && mark <= 59):
                grade = "D+";
                break;
            case (mark >= 50 && mark <= 54):
                grade = "D";
                break;
            default:
                grade = "F";
                break;
        }
        return grade;
    };

    for (var i = 0; i < arguments.length; i++) {
        grade_str = grade_str + " " + letterFromMark(arguments[i]);
    }

    return grade_str.trim();

}  