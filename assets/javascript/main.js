// Initialize Firebase
var config = {
   apiKey: "AIzaSyC-F_1mpAYh-YZfrQXhY8x-UK2i3f29RAg",
   authDomain: "train-scheduler-dfd33.firebaseapp.com",
   databaseURL: "https://train-scheduler-dfd33.firebaseio.com",
   projectId: "train-scheduler-dfd33",
   storageBucket: "train-scheduler-dfd33.appspot.com",
   messagingSenderId: "947704542192"
 };
 firebase.initializeApp(config);

var database = firebase.database();

var trainName = "";
var destInput = "";
var trainTimeInput = "";
var freqInput = "";

$(".btn-primary").on("click", function (event) {
  event.preventDefault();

var trainName = $('#TrainInput').val().trim();
var destInput = $('#DestinationInput').val().trim();
var trainTimeInput = $('#TrainTimeInput').val().trim();
var freqInput = $('#FrequencyInput').val().trim();

var trainInfo = {
  trainName: trainName,
  destInput: destInput,
  trainTimeInput: trainTimeInput,
  freqInput: freqInput
};

// push values to firebase
database.ref().push(trainInfo);

console.log(trainInfo.trainName);
console.log(trainInfo.destInput);
console.log(trainInfo.trainTimeInput);
console.log(trainInfo.freqInput);

});



//on click push to function database
database.ref().on("child_added", function (childSnapshot) {

var name = childSnapshot.val().trainName;
var dest = childSnapshot.val().destInput;
var time = childSnapshot.val().trainTimeInput;
var freq = childSnapshot.val().freqInput;

});
