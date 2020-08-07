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

firebase.database().ref('DataLog').once('value', (snap) => {
    console.log(snap.val());
});

firebase.database().ref('Number').once('value', (snap) => {
    console.log(snap.val());
    document.getElementById("demo1").innerHTML = snap.val().number1;
    document.getElementById("demo2").innerHTML = snap.val().number2;
    document.getElementById("demo3").innerHTML = snap.val().number3;
    document.getElementById("demo4").innerHTML = snap.val().number4;
});

// JSON
// const dbRefObject = firebase.database().ref().child('DataLog');

// dbRefObject.on('value', (snap) =>{
//     dbRefObject.innerHTML = JSON.stringify(snap.val(), null, 3);
// });

//Total
//   firebase.database().ref('Number').on('value',(snap)=>{
//     var totalRecord =  snap.numChildren();
//     console.log("Total Record : "+totalRecord);
//   });

// set
// var [Varilable] = firebase.database().ref("[name]");
// [Varilable1].child("[path/path/...]").set("[value1]")
// [Varilable2].child("[path/path/...]").set("[value2]")
// .... [n] value set/push/...