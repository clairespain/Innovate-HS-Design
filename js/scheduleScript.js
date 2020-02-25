//will insert time check here
//see https://www.w3schools.com/js/js_dates.asp
var currentTime = new Date();
var arrivalTime = new Date(2020, 3, 7, 9, 45);
var whyIHSTime = new Date(2020, 3, 7, 10, 45);
var transitionTime = new Date(2020, 3, 7, 11, 00);
var facultySessionTime = new Date(2020, 3, 7, 11, 45);
var lunchTime = new Date(2020, 3, 7, 12, 40);
var innovationInActionTime = new Date(2020, 3, 7, 13, 55);
var busTime = new Date(2020, 3, 7, 14, 00);


function checkTime(){
  if (currentTime >= arrivalTime){
    document.getElementById("arrival").classList.toggle('complete');
  }

  if(currentTime >= whyIHSTime){
    document.getElementById("whyIHS").classList.toggle('complete');
  }

  if(currentTime >= transitionTime){
    document.getElementById("transition").classList.toggle('complete');
  }

  if(currentTime >= facultySessionTime){
    document.getElementById("facultySession").classList.toggle('complete');
  }

  if(currentTime >= lunchTime){
    document.getElementById("lunch").classList.toggle('complete');
  }

  if(currentTime >= innovationInActionTime){
    document.getElementById("innovationInAction").classList.toggle('complete');
  }

  if(currentTime >= busTime){
    document.getElementById("bus").classList.toggle('complete');
  }
}

checkTime();
