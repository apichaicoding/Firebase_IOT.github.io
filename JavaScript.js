var firebaseConfig = {
    apiKey: "AIzaSyAlVLMRaJYA3_6B8KY-7PrOiRcWNPUtdgw",
    authDomain: "mylearning-arduino.firebaseapp.com",
    databaseURL: "https://mylearning-arduino.firebaseio.com",
    projectId: "mylearning-arduino",
    storageBucket: "mylearning-arduino.appspot.com",
    messagingSenderId: "362809845216",
    appId: "1:362809845216:web:c9ad3419f9579cbb32b785",
    measurementId: "G-JZFW5N933X"
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();

firebase.database().ref('Test').once('value', (snap) => {
    console.log(snap.val());

    document.getElementById("Do").value = snap.val().Do;
    document.getElementById("Hp").value = snap.val().Hp;
    document.getElementById("ความขุ่น").value = snap.val().ความขุ่น;
    document.getElementById("Pump").value = snap.val().Pump;

});

function Save2Firebase() {
    var NumPath = firebase.database().ref("Number");
    NumPath.child('number1').set(8888);
}

//Get
// var ref = firebase.database().ref('Datalog');
// ref.on('value', gotData, errdata);

// function gotData(data){
//     var Datalog = data.val();
//     var Dokey = Object.keys(Datalog);
//     console.log(Dokey);
//     for (var i = 0; i < Dokey.length; i++){
//         var k = keys[i] ;
//         var Do = Dos[k].Do ;
//         console.log(Do);
//     }
// }

// function errdata(err){
//     console.log('Error!');
//     console.log(err);
// }