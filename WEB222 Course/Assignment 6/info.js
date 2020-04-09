
var unlock = [false, false, false, false, false, false];
var regName = /^[A-Za-z]*$/;
var regFirstChar = /[A-Z]/; 

function validateFname(){
	var name = document.signup.fname.value;
	var div = document.getElementById('msg');
	
	//If all the characters are alphabetic
	if(!(regName.test(name))){
		
		var errorMessage="Your first name should only contain alphabetic characters!";
		document.signup.fname.focus();
		div.innerHTML = errorMessage;
		
		document.getElementById("formSubmit").disabled = true;
		unlock[0]=false;
	}
		
		//If the 1st character is uppercase
    else if(!(regFirstChar.test(name[0]))){
		div.innerHTML="";
			
		var errorMessage = "First character of your first name should be uppercase!";
		document.signup.fname.focus();
		div.innerHTML = errorMessage;
		
		unlock[0]=false;
	}
	else{
			
		unlock[0]=true;
		div.innerHTML ="";
	}
	
	
}

function validateLname(){
	var name = document.signup.lname.value;
	var div = document.getElementById('msg');
	
	//If all the characters are alphabetic
	if(!(regName.test(name))){
		
		var errorMessage="Your last name should only contain alphabetic characters!";
		document.signup.lname.focus();
		div.innerHTML = errorMessage;
	
		unlock[1]=false;
	}

	
	//If the 1st character is uppercase
    else if(!(regFirstChar.test(name[0]))){
			
		var errorMessage = "First character of your last name should be uppercase!";
		document.signup.lname.focus();
		div.innerHTML = errorMessage;
		
		unlock[1]=false;
	}
	
	else{
		unlock[1]=true;
		div.innerHTML ="";
	}
	
}

function validatePassword(){
	
	var password_1 = document.signup.password_1.value;
	var div = document.getElementById('msg');
	
	//If 6 characters long
	if(password_1.length!=6){
		
		var errorMessage = "Password must be only 6 characters long!";
		document.signup.password_1.focus();
		div.innerHTML = errorMessage;
		
		return false;
	}
	
	//If one uppercase letter is available
	else if(!(/^(?=.*[A-Z]).*$/.test(password_1))){
		
		var errorMessage ="Password must contain at least one uppercase letter!";
		document.signup.password_1.focus();
		div.innerHTML = errorMessage;
		
		unlock[2]=false;
	}
	
	//if one digit is available
	else if(!(/^(?=.*[0-9]).*$/.test(password_1))){
		
		var errorMessage="Password must contain at least one digit!";
		document.signup.password_1.focus();
		div.innerHTML = errorMessage;
		
		unlock[2]=false;
	}
	
	else{
		unlock[2]=true;
		div.innerHTML ="";
	}
	
}

function validateConfirmPassword(){
	var div = document.getElementById('msg');
	
	var password_1 = document.signup.password_1.value;
	var password_2 = document.signup.password_2.value;
          
    if (password_1 != password_2) {
    	var errorMessage = "Passwords do not match.";
		document.signup.password_2.focus();
		div.innerHTML = errorMessage;
		
        unlock[3]=false;
    }
	else{
		unlock[3]=true;
		div.innerHTML ="";
	}
}

function validateAge(){
	
	var div = document.getElementById('msg');
	var age = document.signup.age.value;
	
	if(!(age>=18 && age<=60)){
		var errorMessage = "Age should be 18 - 60";
		document.signup.age.focus();
		div.innerHTML = errorMessage;
		
		unlock[4]=false;
	}
	else{
		unlock[4]=true;
		div.innerHTML ="";
	}
}

function validateUsername(){
	
	var div = document.getElementById('msg');
	var name = document.signup.uname.value;
	
	var regFirstCharU = /[A-Za-z]/;
	
	if(!(regFirstCharU.test(name[0]))){

			
		var errorMessage = "First character of your user username should be letter!";
		document.signup.uname.focus();
		div.innerHTML = errorMessage;
		
		unlock[5]=false;
	}
	
	else if(name.length<6 && name.length>0){
		
		var errorMessage = "Username must be at least 6 characters long!";
		document.signup.uname.focus();
		div.innerHTML = errorMessage;
		
		unlock[5]=false;
	}
	
	else{
		unlock[5]=true;
		div.innerHTML ="";
	}
	
}

//Unlock submit button
function updateC(){
	//console.log(unlock);
	var div = document.getElementById('msg');
	
	if(unlock[0] && unlock[1] && unlock[2] && unlock[3] && unlock[4] && unlock[5]){
		document.getElementById("formSubmit").disabled=false;
		div.innerHTML ="";
	}
	else{
		document.getElementById("formSubmit").disabled = true;
	}
}