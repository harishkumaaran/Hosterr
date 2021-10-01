var button= document.getElementById("submitButton");


button.addEventListener('click',function(e){
    e.preventDefault();
    var mail =document.getElementById("Email").value;
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    
    if (mail.match(validRegex)) {
  
        alert("Valid email address!");
    
        return true;
    
      } else {
    
        alert("Invalid email address!");
    
        return false;
    
      }
})