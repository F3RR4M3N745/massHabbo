function getData() {
  var email = document.getElementById('credentials-email').value;
  var password = document.getElementById('credentials-password').value;
  alert(email + " / " + password);
}

var value = document.getElementById('credentials-submit');
value.setAttribute("onClick", getData() ); 
