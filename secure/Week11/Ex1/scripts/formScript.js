function writeTy(person) {
  document.getElementById("submitInfo").innerHTML=("Thanks for filling out the form, "+person+" !");
}
function processForm() {
  //make a variable and put the value of the HTML element whose id is
  //nameInput into it (See page 299 – checkReqFields())
  //Bring_up_an_appropriate_alert_box (see p299 – checkReqFields())
  var name = document.getElementById('nameinput').value; 
  if (name ==null || name =="") {
    alert("First name must be filled out");
    return false;
  }
  writeTy(name);
  document.forms('quote').reset();
}
 //Find the HTML element that has an Id of submitInfo and put text
// into it that includes the variable (user name) (See page301 – writeTY)