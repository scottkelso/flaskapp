ENDPOINT = "http://localhost:5000";

// submit = function() {
//   text = document.getElementById('text_input').value;
//   console.log('testing')
//   var xhttp = new XMLHttpRequest();
//   xhttp.addEventListener("readystatechange", function () {
//     if (this.readyState === 4) {
//       document.getElementById("result").innerHTML = "RESULT: "+this.responseText;
//     }
//   });
//   xhttp.open("GET", ENDPOINT + "/?input=" + text, true);
//   xhttp.send();
// };

// imgSize = function() {
//   text = document.getElementById('url_input').value;
//   console.log('testing')
//   var xhttp = new XMLHttpRequest();
//   xhttp.addEventListener("readystatechange", function () {
//     if (this.readyState === 4) {
//       alert("Backend says the image has - " + this.responseText);
//     }
//   });
//   xhttp.open("GET", ENDPOINT + "/imgSize/?input=" + text, true);
//   xhttp.send();
// };

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

healthcheck = async function() {
  document.getElementById('spinner').classList.add('spinner-border');
  await sleep(1500);
  document.getElementById('spinner').classList.remove('spinner-border');
  document.getElementById('modules').style.display = 'block';
  document.getElementById('healthcheck_warning').style.display = 'none';
};

fileUpload = function() {
  console.log('testing')
  var xhttp = new XMLHttpRequest();
  xhttp.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
      if (this.responseText == "ok") {
        let status_badge = document.getElementById('data_aquisition_status')
        status_badge.textContent = "Online"
        status_badge.setAttribute('class', 'badge badge-success')
        alert("Data Aquisition Stage Online!");
      } else {
        alert("That's not the correct file!");
        console.log(this.responseText)
      }
    }
  });
  var fileInput = document.getElementById('file_upload');
  var filename = fileInput.files[0].name;
  xhttp.open("POST", ENDPOINT + "/fileUpload", true);
  xhttp.send(filename);
};

// imgUploadSize = function() {
//   console.log('testing')
//   var xhttp = new XMLHttpRequest();
//   xhttp.addEventListener("readystatechange", function () {
//     if (this.readyState === 4) {
//       alert("Image is size " + this.responseText);
//     }
//   });
//   var fileInput = document.getElementById('img_upload_size');
//   var file = fileInput.files[0];
//   var formData = new FormData();
//   formData.append('file', file);
//   xhttp.open("POST", ENDPOINT + "/imgUploadSize", true);
//   xhttp.send(formData);
// };
