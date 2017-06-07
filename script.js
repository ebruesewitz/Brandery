/* The following functions are for displaying the parent contact form
    1a. schoolFade()
    2a. displayParent()
    3a. showFContact()
*/

// 1a. Used to fade out the "Schools" section and the "I'm a Parent" button.
//    Triggered by clicking "I'm a Parent" button
// Calls 2a. (displayParent)
function schoolFade(){
  document.getElementById("schools").setAttribute("style", "animation-name: fadeOut");
  document.getElementById("parentButton").setAttribute("style", "animation-name: fadeOut");
  setTimeout(displayParent, 150);
}

// 2a. Used to keep the "Schools" section and button hidden. | Left aligns Families description content
//    Adjusts width (or height) of Families section | Shows contact Form
// Calls 3a. (showFContact)
function displayParent(){
  setTimeout(showFContact, 700);
  document.getElementById("schools").style.display = "none";
  if(window.innerWidth <= 600){
    document.getElementById("families").setAttribute("style", "animation-name: stretchUp");
  }
  else if(window.innerWidth <= 1100){
    document.getElementById("families").setAttribute("style", "animation-name: stretchRight2");
    document.getElementById("familiesIntro").style.paddingTop = "20px";
    document.getElementById("familiesIntro").style.marginLeft = "5%";
    document.getElementById("familiesIntro").style.width = "50%";
    document.getElementById("familiesIntro").getElementsByTagName("h3")[0].style.textAlign = "left";
    document.getElementById("familiesIntro").getElementsByTagName("p")[0].style.marginLeft = "0px";
    document.getElementById("familiesIntro").getElementsByTagName("h3")[0].style.marginLeft = "0px";
  }
  else{
    document.getElementById("familiesIntro").style.paddingTop = "20px";
    document.getElementById("familiesIntro").style.marginLeft = "5%";
    document.getElementById("families").setAttribute("style", "animation-name: stretchRight");
    document.getElementById("familiesIntro").style.width = "50%";
    document.getElementById("familiesIntro").getElementsByTagName("h3")[0].style.textAlign = "left";
    document.getElementById("familiesIntro").getElementsByTagName("p")[0].style.marginLeft = "0px";
    document.getElementById("familiesIntro").getElementsByTagName("h3")[0].style.marginLeft = "0px";
  }
  document.getElementById("familiesForm").style.display = "flex";
  document.getElementById("parentButton").style.display = "none";
}

// 3a. Displays the form inputs & the button to exit form.
function showFContact(){
  var inputs = document.getElementById("familiesForm").getElementsByTagName("input");
  for(var i = 0; i < inputs.length; i++){
    inputs[i].style.display = "inline";
  }
  document.getElementById("goBack").style.display = "inline";
}

/* The following functions are for hiding the parent contact form
    4a. hideFContact()
    5a. exitParent()
    6a. showSchool()
*/

// 4a. Hides form inputs.
//    Triggered by clicking the "x" on the form.
// Calls 5a. (exitParent)
function hideFContact(){
  var inputs = document.getElementById("familiesForm").getElementsByTagName("input");
  for(var i = 0; i < inputs.length; i++){
    inputs[i].style.display = "none";
    inputs[i].classList.remove("inputInvalid");
    if(inputs[i].type != "submit" && inputs[i].type != "hidden"){
      inputs[i].value = "";
    }
  }
  document.getElementById("fEmail").style.color="#313131";
  document.getElementById("fEmail").style.fontStyle="normal";
  window.removeEventListener("keyup", validateFEmail);
  setTimeout(exitParent, 100);
}

// 5a. Hides the "x" | adjusts width (or height) of families section.
// Calls 6a. (showSchool)
function exitParent(){
  setTimeout(showSchool, 900);
  document.getElementById("goBack").style.display = "none";
  if(window.innerWidth <= 600){
    document.getElementById("families").setAttribute("style", "animation-name: shrinkUp");
  }else if(window.innerWidth <= 1100){
    document.getElementById("families").setAttribute("style", "animation-name: shrinkLeft2");
  }
  else{
    document.getElementById("families").setAttribute("style", "animation-name: shrinkLeft");
  }
}

// 6a. Centers "Families" content (if applicable) | shows "I'm a Parent" button
//    Hides the "Families" contact form | shows "Schools" option
function showSchool(){
  if(window.innerWidth > 600){
    document.getElementById("familiesIntro").style.marginLeft = "0";
    document.getElementById("familiesIntro").style.paddingTop = "0px";
    document.getElementById("familiesIntro").style.width = "90%";
    document.getElementById("familiesIntro").getElementsByTagName("h3")[0].style.textAlign = "center";
    document.getElementById("familiesIntro").getElementsByTagName("p")[0].removeAttribute("style", "margin-left: 0px");
    document.getElementById("familiesIntro").getElementsByTagName("h3")[0].removeAttribute("style", "margin-left: 0px");
    document.getElementById("familiesIntro").style.paddingTop = "0px";
  }
  document.getElementById("parentButton").removeAttribute("style", "animation-name: fadeOut");
  document.getElementById("familiesForm").style.display = "none";
  document.getElementById("schools").setAttribute("style", "animation-name: fadeIn");
  document.getElementById("families").style.textAlign = "center";
}

/* The following functions are for showing the school contact form
    1b. parentFade()
    2b. displaySchool()
    3b. showSContact()
*/

// 1b. Used to fade out the "Families" section and the "I'm an Educator" button.
//    Triggered by clicking "I'm an Educator" button
// Calls 2b. (displaySchool)
function parentFade(){
  document.getElementById("families").setAttribute("style", "animation-name: fadeOut");
  document.getElementById("schoolButton").setAttribute("style", "animation-name: fadeOut");
  setTimeout(displaySchool, 150);
}

// 2b. Used to keep the "Families" section and button hidden. | Left aligns "Schools" description content
//    Adjusts width (or height) of "Schools" section | Shows contact Form
// Calls 3b. (showSContact)
function displaySchool(){
  setTimeout(showSContact, 700);
  document.getElementById("families").style.display = "none";
  document.getElementById("schoolsForm").style.display = "flex";
  document.getElementById("schoolButton").style.display = "none";
  if(window.innerWidth <= 600){
    document.getElementById("schools").setAttribute("style", "animation-name: stretchDown");
  }
  else if(window.innerWidth <= 1100){
    document.getElementById("schools").setAttribute("style", "animation-name: stretchRight2");
    document.getElementById("schoolsIntro").style.width = "50%";
    document.getElementById("schoolsIntro").getElementsByTagName("h3")[0].style.textAlign = "left";
    document.getElementById("schoolsIntro").getElementsByTagName("p")[0].style.marginLeft = "0px";
    document.getElementById("schoolsIntro").getElementsByTagName("h3")[0].style.marginLeft = "0px";
    document.getElementById("schoolsIntro").style.paddingTop = "20px";
    document.getElementById("schoolsIntro").style.marginLeft = "5%";
  }else{
    document.getElementById("schools").setAttribute("style", "animation-name: stretchRight");
    document.getElementById("schoolsIntro").style.width = "50%";
    document.getElementById("schoolsIntro").getElementsByTagName("h3")[0].style.textAlign = "left";
    document.getElementById("schoolsIntro").getElementsByTagName("p")[0].style.marginLeft = "0px";
    document.getElementById("schoolsIntro").getElementsByTagName("h3")[0].style.marginLeft = "0px";
    document.getElementById("schoolsIntro").style.paddingTop = "20px";
    document.getElementById("schoolsIntro").style.marginLeft = "5%";
  }
}

// 3b. Displays the form inputs & the button to exit form.
function showSContact(){
  var inputs = document.getElementById("schoolsForm").getElementsByTagName("input");
  for(var i = 0; i < inputs.length; i++){
    inputs[i].style.display = "inline";
  }
  document.getElementById("goBack2").style.display = "inline";
}


/* The following functions are for hiding the parent contact form
    4b. hideSContact()
    5b. exitSchool()
    6b. showParent()
*/

// 4b. Hides form inputs.
//    Triggered by clicking the "x" on the form.
// Calls 5b. (exitSchool)
function hideSContact(){
  var inputs = document.getElementById("schoolsForm").getElementsByTagName("input");
  for(var i = 0; i < 6; i++){
    inputs[i].style.display = "none";
    inputs[i].classList.remove("inputInvalid");
    if(inputs[i].type != "submit" && inputs[i].type != "hidden"){
      inputs[i].value = "";
    }
  }
  document.getElementById("sEmail").style.color="#313131";
  document.getElementById("sEmail").style.fontStyle="normal";
  window.removeEventListener("keyup", validateSEmail);
  setTimeout(exitSchool, 100);
}

// 5b. Hides the "x" | adjusts width (or height) of "Schools" section.
// Calls 6b. (showParent)
function exitSchool(){
  setTimeout(showParent, 900);
  document.getElementById("goBack2").style.display = "none";
  if(window.innerWidth <= 600){
    document.getElementById("schools").setAttribute("style", "animation-name: shrinkUp");
  }else if(window.innerWidth <= 1100){
    document.getElementById("schools").setAttribute("style", "animation-name: shrinkLeft2");
  }
  else{
    document.getElementById("schools").setAttribute("style", "animation-name: shrinkLeft");
  }
}

// 6a. Centers "Schools" content (if applicable) | shows "I'm an Educator" button
//    Hides the "Schools" contact form | shows "Families" option
function showParent(){
  if(window.innerWidth > 600){
    document.getElementById("schoolsIntro").style.marginLeft = "0";
    document.getElementById("schoolsIntro").style.paddingTop = "0px";
    document.getElementById("schoolsIntro").style.width = "90%";
    document.getElementById("schoolsIntro").getElementsByTagName("h3")[0].style.textAlign = "center";
    document.getElementById("schoolsIntro").getElementsByTagName("p")[0].removeAttribute("style", "margin-left: 0px");
    document.getElementById("schoolsIntro").getElementsByTagName("h3")[0].removeAttribute("style", "margin-left: 0px");
    document.getElementById("schoolsIntro").style.paddingTop = "0px";
  }
  document.getElementById("schoolsForm").style.display = "none";
  document.getElementById("families").setAttribute("style", "animation-name: fadeIn");
  document.getElementById("schoolButton").removeAttribute("style", "animation-name: fadeOut");
  document.getElementById("schools").style.textAlign = "center";
}

/* The following functions are used to validate the contact forms before submitting to mailchimp.
   They test to make sure the email field has an "@" symbol and that each required field is filled out.
   They also add some styling to communicate to the user if the form has not been filled out sucessfully.
*/

function validateSForm(){
  var isvalid = true;
  var inputs = document.getElementById("schoolsForm").getElementsByTagName("input");
  for(var i = 0; i < inputs.length; i++){
    if(inputs[i].validity.valueMissing){
      isvalid = false;
      inputs[i].className += " inputInvalid";
    }
    if(inputs[i].type == "email" && !inputs[i].value.includes("@") && !inputs[i].validity.valueMissing){
      isvalid = false;
      inputs[i].style.color = "#F15B36";
      inputs[i].style.fontStyle = "italic";
      window.addEventListener("keyup", validateSEmail);
    }
  }
  return isvalid;
}


function validateFForm(){
  var isvalid = true;
  var inputs = document.getElementById("familiesForm").getElementsByTagName("input");
  for(var i = 0; i < inputs.length; i++){
    if(inputs[i].validity.valueMissing){
      isvalid = false;
      inputs[i].className += " inputInvalid";
    }
    if(inputs[i].type == "email" && !inputs[i].value.includes("@") && !inputs[i].validity.valueMissing){
      isvalid = false;
      inputs[i].style.color = "#F15B36";
      inputs[i].style.fontStyle = "italic";
      window.addEventListener("keyup", validateFEmail);
    }
  }
  return isvalid;
}

//once the email has an "@" symbol remove the error text styling to avoid confusion.
function validateFEmail(){
  if(document.getElementById("fEmail").value.includes("@")){
    document.getElementById("fEmail").style.color="#313131";
    document.getElementById("fEmail").style.fontStyle="normal";
    window.removeEventListener("keyup", validateFEmail);
  }
}

function validateSEmail(){
  if(document.getElementById("sEmail").value.includes("@")){
    document.getElementById("sEmail").style.color="#313131";
    document.getElementById("sEmail").style.fontStyle="normal";
    window.removeEventListener("keyup", validateSEmail);
  }
}
