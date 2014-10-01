// Grab X Coordinates
    
function coordinatesX(element, results) {
    var xRatio = 93.996/parseFloat(933)
    element = $(element);
    results = $(results);
    var left = -xRatio * (element.position().left - 976);
    $(results).text(left);
    };

function otherShit(pixels) {
    var xRatio = 93.996/parseFloat(933)
    pixel / -xRatio + 976 
}

// Grab Y Coordinates
    
function coordinatesY(element, results) {
    var yRatio = parseFloat(50)/parseFloat(497)
    element = $(element);
    results = $(results);
    var top = yRatio * (element.position().top - 43);
    $(results).text(top);
};


// Calculate distance from a point (x,y) and the ball

distanceFromBall = function(x, y){
    return Math.sqrt((x -= parseInt($('#ball-pos-x').text())) * x + (y -= parseInt($('#ball-pos-y').text())) * y);
};

// Compute angle between a point in the court (x,y) and the line perpendicular to the straight line between the ball and the hoop. The resulting angle will be in the interval (0,2*PI] 

function returnSign(x) {
    if (x < 0) {
        return -1
    } else {return 1}
}

function computeAngle(x, y) {

    angleT = 0

    var ballX = parseInt($('#ball-pos-x').text())
    var ballY = parseInt($('#ball-pos-y').text())

    var ballToHoopDistance = distanceFromBall(88.67, 25);
    var unitVectorA = (77 - ballX) / (ballToHoopDistance);
    var unitVectorB = (274 - ballY) / (ballToHoopDistance);

    var newX = unitVectorB * (x - ballX) + unitVectorA * (y - ballY);
    var newY = unitVectorB * (y - ballY) + unitVectorA * (x - ballX);

    if (newX == 0) { angleT = (Math.PI * returnSign(newY)) / 2};
    if (newX != 0) { angleT = ((Math.atan(newY/newX))) };
    if (newX < 0 && angleT != 0) {angleT -= Math.PI * returnSign(angleT)};
    if (newX < 0 && angleT == 0) {angleT = Math.PI};
    if (angleT < 0) {angleT += (2 * Math.PI)};  

    return angleT
}

// Gather and sort Coordinates 

function gatherCoords() {

    offenseArray = []
    defenseArray = []

    offenseX = $.makeArray($('.offense-x div').map(function() { return $(this).text(); }));
    offenseY = $.makeArray($('.offense-y div').map(function() { return $(this).text(); }));
    defenseX = $.makeArray($('.defense-x div').map(function() { return $(this).text(); }));
    defenseY = $.makeArray($('.defense-y div').map(function() { return $(this).text(); }));

    // Offensive players

    player1 = new Object(); 
            player1.x = parseInt(offenseX[0]);
            player1.y = parseInt(offenseY[0]);
            player1.distance = distanceFromBall(parseInt(offenseX[0]), offenseY[0]);
            player1.angle = computeAngle(parseInt(offenseX[0]),  parseInt(offenseY[0]));

    player2 = new Object();
            player2.x = parseInt(offenseX[1]);
            player2.y = parseInt(offenseY[1]);
            player2.distance = distanceFromBall(parseInt(offenseX[1]), offenseY[1]);
            player2.angle = computeAngle(parseInt(offenseX[1]),  parseInt(offenseY[1]));

    player3 = new Object();
            player3.x = parseInt(offenseX[2]);
            player3.y = parseInt(offenseY[2]);
            player3.distance = distanceFromBall(parseInt(offenseX[2]), offenseY[2]);
            player3.angle = computeAngle(parseInt(offenseX[2]),  parseInt(offenseY[2]));

    player4 = new Object(); 
            player4.x = parseInt(offenseX[3]); 
            player4.y = parseInt(offenseY[3]);
            player4.distance = distanceFromBall(parseInt(offenseX[3]), offenseY[3]);
            player4.angle = computeAngle(parseInt(offenseX[3]),  parseInt(offenseY[3]));

    player5 = new Object();
            player5.x = parseInt(offenseX[4]);
            player5.y = parseInt(offenseY[4]);
            player5.distance = distanceFromBall(parseInt(offenseX[4]), offenseY[4]);
            player5.angle = computeAngle(parseInt(offenseX[4]),  parseInt(offenseY[4]));

    // Defensive players


    player6 = new Object();
            player6.x = parseInt(defenseX[0]);
            player6.y = parseInt(defenseY[0]);
            player6.distance = distanceFromBall(parseInt(defenseX[0]), defenseY[0]);
            player6.angle = computeAngle(parseInt(defenseX[0]),  parseInt(defenseY[0]));

    player7 = new Object(); 
            player7.x = parseInt(defenseX[1]);
            player7.y = parseInt(defenseY[1]); 
            player7.distance = distanceFromBall(parseInt(defenseX[1]), defenseY[1]);
            player7.angle = computeAngle(parseInt(defenseX[1]),  parseInt(defenseY[1]));

    player8 = new Object();
            player8.x = parseInt(defenseX[2]);
            player8.y = parseInt(defenseY[2]); 
            player8.distance = distanceFromBall(parseInt(defenseX[2]), defenseY[2]);
            player8.angle = computeAngle(parseInt(defenseX[2]),  parseInt(defenseY[2]));

    player9 = new Object();
            player9.x = parseInt(defenseX[3]);
            player9.y = parseInt(defenseY[3]); 
            player9.distance = distanceFromBall(parseInt(defenseX[3]), defenseY[3]);
            player9.angle = computeAngle(parseInt(defenseX[3]),  parseInt(defenseY[3]));

    player10 = new Object();
            player10.x = parseInt(defenseX[4]);
            player10.y = parseInt(defenseY[4]);
            player10.distance = distanceFromBall(parseInt(defenseX[4]), defenseY[4]);
            player10.angle = computeAngle(parseInt(defenseX[4]),  parseInt(defenseY[4]));


    // Sort offensive players

    finalOutput  = []
    offenseArray.push(player1, player2, player3, player4, player5);

    offenseArray.sort(function(a, b) {
    return a.distance - b.distance;
            // if (a.distance === b.distance)
            // return a.angle - b.angle  
    });

        for (i = 0; i < offenseArray.length; i++) { 
        finalOutput.push(offenseArray[i].x, offenseArray[i].y);

        };

    // Sort defensive players

    defenseArray.push(player6, player7, player8, player9, player10);

    defenseArray.sort(function(a, b) {
    return a.distance - b.distance; });

        for (i = 0; i < defenseArray.length; i++) { 
            finalOutput.push(defenseArray[i].x);
            finalOutput.push(defenseArray[i].y)
        };

    // Push variables
    
    finalOutput.unshift(parseInt($('#ball-pos-y').text()));
    finalOutput.unshift(parseInt($('#ball-pos-x').text()));

    finalOutput.unshift(parseInt($('.shotclock').val()))

      for (i = 0; i < finalOutput.length; i++) { 
            $('#combination').append(finalOutput[i] + ' ')
        };
        console.log(finalOutput)
}
    // Initiate Shotclock

    function shotClock() { 
          $('.shotclock').knob({
          min : 0, 
          max : 24, 
          step : 1, 
          angleOffset : 180, 
          angleArc : 360, 
          stopper : true, 
          readOnly : false, 
          cursor : false,  
          lineCap : 'butt', 
          thickness : '0.25', 
          width : 145, 
          displayInput : true, 
          displayPrevious : true, 
          fgColor : '#2E66B2', 
          inputColor : '#2E66B2', 
          font : 'digi', 
          fontWeight : 'bold', 
          bgColor : '#C0C0C0',
          });

    }



    function checkShotclock() {
    $('#shotclock').mousemove(function() {if (parseInt($('.shotclock').val()) == 0) {
                // $('.shotclock').val("OFF")
          }})
    }
