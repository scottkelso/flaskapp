ENDPOINT = "http://localhost:5000";

submit = function() {
  text = document.getElementById('text_input').value;
  console.log('testing')
  var xhttp = new XMLHttpRequest();
  xhttp.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
      document.getElementById("result").innerHTML = "RESULT: "+this.responseText;
    }
  });
  xhttp.open("GET", ENDPOINT + "/?input=" + text, true);
  xhttp.send();
};

imgSize = function() {
  text = document.getElementById('text_input').value;
  console.log('testing')
  var xhttp = new XMLHttpRequest();
  xhttp.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
      alert(this.responseText);
    }
  });
  xhttp.open("GET", ENDPOINT + "/imgSize/?input=" + text, true);
  xhttp.send();
};

healthCheck = function() {
  text = document.getElementById('text_input').value;
  console.log('testing')
  var xhttp = new XMLHttpRequest();
  xhttp.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
      alert(this.responseText);
    }
  });
  xhttp.open("GET", ENDPOINT + "/healthcheck", true);
  xhttp.send();
};
