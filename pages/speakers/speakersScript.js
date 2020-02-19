//Accordian function created using code from https://www.w3schools.com/howto/howto_js_accordion.asp

var accordian = document.getElementsByClassName("speakers");

for (var i = 0; i < accordian.length; i++) {
  accordian[i].addEventListener("click", function() {
    //Activate
    this.classList.toggle("active");

    //Show & hide
    var info = this.nextElementSibling;
    if (info.style.display === "block") {
      info.style.display = "none";
    } else {
      info.style.display = "block";
    }
  });
}
