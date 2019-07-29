ENDPOINT = "http://localhost:5000";

callDetector = function() {
  text = document.getElementById('text_input').value;
  console.log('testing')
  var xhttp = new XMLHttpRequest();
  xhttp.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
      alert(this.responseText);
      document.getElementById("result").innerHTML = "RESULT: "+this.responseText;
    }
  });
  xhttp.open("GET", ENDPOINT + "/?input=" + text, true);
  xhttp.send();
};
