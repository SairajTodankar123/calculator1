function Calculator() {
  var value = document.getElementById("value").value;
  var result = eval(value);
  document.getElementById("result").value = result;
}

var buttons = document.getElementsByTagName("button");
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        var value = this.innerHTML;
        if (value === "C") {
            document.getElementById("value").value = "";
            document.getElementById("result").value = "";
        } else if (value === "X") {
            var value = document.getElementById("value").value;
            var result = value.substring(0, value.length - 1);
            document.getElementById("value").value = result;
        } else if (value === "=") {
            Calculator();
        } else {
            document.getElementById("value").value += value;
        }
    });
}

