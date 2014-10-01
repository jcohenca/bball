// Communicate with R

function callR() {
    $.ajax({
        url: "/r",
        data: {
            input: finalOutput
        },
        dataType: 'json'
  }).done(function(data){
        $('#EP').append(parseFloat(data).toFixed(2));
        console.log(parseFloat(data));
  })
}

function rNoShotClock() {
    $.ajax({
        url: "/r_no_shotclock",
        data: {
            input: finalOutput
        },
        dataType: 'json'
  }).done(function(data){
        $('#EP').append(parseFloat(data).toFixed(2));
        console.log(parseFloat(data));
  })
}

function rShot() {
    $.ajax({
        url: "/r_shot",
        data: {
            input: finalOutput
        },
        dataType: 'json'
  }).done(function(data){
        $('#EP').append(parseFloat(data).toFixed(2));
        console.log(parseFloat(data));
  })
}

function rPass() {
    $.ajax({
        url: "/r_pass",
        data: {
            input: finalOutput
        },
        dataType: 'json'
  }).done(function(data){
        $('#EP').append(parseFloat(data).toFixed(2));
        console.log(parseFloat(data));
  })
}

// Functions to be called on draggable drop

function stopMethods() {

            coordinatesX('#ball', '#ball-pos-x'); coordinatesY('#ball', '#ball-pos-y');
            coordinatesX('#o1', '#results1-x');  coordinatesY('#o1', '#results1-y');
            coordinatesX('#o2', '#results2-x');  coordinatesY('#o2', '#results2-y');
            coordinatesX('#o3', '#results3-x');  coordinatesY('#o3', '#results3-y');
            coordinatesX('#o4', '#results4-x');  coordinatesY('#o4', '#results4-y');
            coordinatesX('#o5', '#results5-x');  coordinatesY('#o5', '#results5-y');
            coordinatesX('#x1', '#results6-x');  coordinatesY('#x1', '#results6-y');
            coordinatesX('#x2', '#results7-x');  coordinatesY('#x2', '#results7-y');
            coordinatesX('#x3', '#results8-x');  coordinatesY('#x3', '#results8-y');
            coordinatesX('#x4', '#results9-x');  coordinatesY('#x4', '#results9-y');
            coordinatesX('#x5', '#results10-x'); coordinatesY('#x5', '#results10-y');

            $('#combination').empty()
            $('#EP').empty()
            gatherCoords();
            ballStickToPlayer()
            callR();
}