// Initialize Firebase
 var config = {
   apiKey: "AIzaSyC-F_1mpAYh-YZfrQXhY8x-UK2i3f29RAg",
   authDomain: "train-scheduler-dfd33.firebaseapp.com",
   databaseURL: "https://train-scheduler-dfd33.firebaseio.com",
   projectId: "train-scheduler-dfd33",
   storageBucket: "",
   messagingSenderId: "947704542192"
 };
 firebase.initializeApp(config);

var database = firebase.database();

$("#btn-primary").on("click", function () {

var trainName = $('#TrainInput').val().trim();
var destInput = $('#DestinationInput').val().trim();
var trainTimeInput = $('#TrainTimeInput').val().trim();
var freqInput = $('#FrequencyInput').val().trim();

console.log(trainName);
console.log(destInput);
console.log(trainTimeInput);
console.log(freqInput);

// push values to firebase
database.ref().push({
  trainName: Train_Name,
  destInput: Destination,
  trainTimeInput: Train_Time,
  freqInput: Frequency,
});

});

//on click push to function database
database.ref().on("child_added", function (childSnapshot) {

var name = childSnapshot.val().trainName;
var dest = childSnapshot.val().destInput;
var time = childSnapshot.val().trainTimeInput;
var freq = childSnapshot.val().freqInput;

});
