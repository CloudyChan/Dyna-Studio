document.getElementById("realDownload").disabled = false;
function activeDownload() {
    // Get the checkbox
    var checkBox = document.getElementById("myCheck");
    // Get the output text
    // If the checkbox is checked, display the output text
    if (checkBox.checked == true){
        document.getElementById("realDownload").disabled = false;
    } else {
        document.getElementById("realDownload").disabled = true;
    }
  }