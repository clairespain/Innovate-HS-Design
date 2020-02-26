// Feedback

function fn1() {
  var myQuestion = document.getElementById("question");
  myQuestion.innerHTML = "What could have been better?";
  document.getElementById("mainImage").src = "../img/comments.svg";
  document.getElementById("btnsubmit").style.display = "none";
  document.getElementById("btnsubmit2").style.display = "block";
}

function fn2() {
  var myQuestion = document.getElementById("question");
  myQuestion.innerHTML = "Would you like to hear more about UM offerings for high school students?";
  document.getElementById("mainImage").src = "../img/comments.svg";
  document.getElementById("comment").style.display = "none";
  document.getElementById("btnsubmit2").style.display = "none";
  document.getElementById("btnsubmit3").style.display = "block";
  document.getElementById("btnsubmit4").style.display = "block";
}

function fn3() {
  var myQuestion = document.getElementById("question");
  myQuestion.innerHTML = "Other comments, questions, or concerns...";
  document.getElementById("mainImage").src = "../img/comments.svg";
  document.getElementById("comment").style.display = "block";
  document.getElementById("btnsubmit3").style.display = "none";
  document.getElementById("btnsubmit4").style.display = "none";
  document.getElementById("btnsubmit5").style.display = "block";
}

function fn4() {
  var myQuestion = document.getElementById("question");
  myQuestion.innerHTML = "We thank you for your time spent taking this survey. Your response has been recorded. Click 'Next' to continue.";
  document.getElementById("mainImage").src = "../img/completed.svg";
  document.getElementById("comment").style.display = "none";
  // document.getElementById("btnsubmit2").style.display = "none";
  // document.getElementById("btnsubmit3").style.display = "block";
}

//topics

// var myTopic = {
//   ""
// }
//
// var myFavTopics = ["business", "environment"];
//
// var theTopics = [
//   {},
//   {},
//   {}]
// document.getElementById("Business").innerHTML


//Communicating with the server

// var xhr = new XMLHttpRequest();  //created XMLHttpRequest object
//
// xhr.onload = function() {        //when readystate changes
//   if(xhr.status === 200) {       // If server status was ok
//     responseObject = JSON.parse(xhr.responseText);  //converts string into js object
//   }
//
//   //Build up string with new content
//   var newContent = '';
//   //new content variable is created to hold new HTML data. It is set to an empty string
//   //outside the loop so that the code in the loop can add to the string.
//   for(var i =0; i< responseObject.events.length; i++){ //loop through object
//     newContent += '<div class ="event">';
//     //etc
//
//   }
//   //Update the page with the new content
//   document.getElementById('content').innerHTML = newContent;
// }
//
// };
//
// xhr.open('GET', 'data/data.json', true);    //Prepare the Request
// xhr.send(null);                             //Send the request
//


// $ function(){
//
// $.ajax({
//     type: "POST",
//     url: "url",
//     timeout: 2000,
//     beforeSend: function(){
//       $content.append('div id="load">Loading</div>');
//     },
//     complete: function(data) {
//       $('#loading').remove();
//     },
//     success: function(data) {
//       $content.html( $(data).find('#container')).hide().fadeIn(400);
//     },
//     fail: function() {
//       $('#panel').html('<div class="loading">Please try again soon.</div>');
//     }
// });
// });
