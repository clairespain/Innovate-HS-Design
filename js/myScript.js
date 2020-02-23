// Feedback

function fn1(){
  var myQuestion = document.getElementById("question");
  myQuestion.innerHTML = "What could have been better?";
  document.getElementById("mainImage").src = "../img/comments.svg";
  document.getElementById("btnsubmit").style.display = "none";
  document.getElementById("btnsubmit2").style.display = "block";
}

function fn2(){
  var myQuestion = document.getElementById("question");
  myQuestion.innerHTML = "Would you like to hear more about UM offerings for high school students?";
  document.getElementById("mainImage").src = "../img/comments.svg";
  document.getElementById("comment").style.display="none";
  document.getElementById("btnsubmit2").style.display = "none";
  document.getElementById("btnsubmit3").style.display = "block";
  document.getElementById("btnsubmit4").style.display = "block";
}

function fn3(){
  var myQuestion = document.getElementById("question");
  myQuestion.innerHTML = "Other comments, questions, or concerns...";
  document.getElementById("mainImage").src = "../img/comments.svg";
    document.getElementById("comment").style.display="block";
    document.getElementById("btnsubmit3").style.display = "none";
    document.getElementById("btnsubmit4").style.display = "none";
  document.getElementById("btnsubmit5").style.display = "block";
}

function fn4(){
  var myQuestion = document.getElementById("question");
  myQuestion.innerHTML = "We thank you for your time spent taking this survey. Your response has been recorded. Click 'Next' to continue.";
  document.getElementById("mainImage").src = "../img/completed.svg";
  document.getElementById("comment").style.display="none";
  // document.getElementById("btnsubmit2").style.display = "none";
  // document.getElementById("btnsubmit3").style.display = "block";
}
