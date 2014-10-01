function ballStickToPlayer() { 

   if (player1.distance < player2.distance && player1.distance < player3.distance && player1.distance < player4.distance && player1.distance < player5.distance) {
					$('#ball').removeClass();
        	$('#ball').addClass("grouped1");
					$('#x1').addClass("grouped1");
					$('#o1').draggable( { alsoDrag: ".grouped1" });
		} else if (player2.distance < player1.distance && player2.distance < player3.distance && player2.distance < player4.distance && player2.distance < player5.distance) {
					$('#ball').removeClass();
					$('#ball').addClass("grouped2");
      	  $('#x2').addClass("grouped2");
					$('#o2').draggable( { alsoDrag: ".grouped2" });
		} else if (player3.distance < player1.distance && player3.distance < player2.distance && player3.distance < player4.distance && player3.distance < player5.distance) {
					$('#ball').removeClass();
					$('#ball').addClass("grouped3");
					$('#x3').addClass("grouped3");
					$('#o3').draggable( { alsoDrag: ".grouped3" });
		} else if (player4.distance < player1.distance && player4.distance < player2.distance && player4.distance < player3.distance && player4.distance < player5.distance) {
					$('#ball').removeClass();
					$('#ball').addClass("grouped4");
					$('#x4').addClass("grouped4");
					$('#o4').draggable( { alsoDrag: ".grouped4" });
		} else if (player5.distance < player1.distance && player5.distance < player2.distance && player5.distance < player3.distance && player5.distance < player4.distance) {
					$('#ball').removeClass();
					$('#ball').addClass("grouped5");
					$('#x5').addClass("grouped5");
					$('#o5').draggable( { alsoDrag: ".grouped5" });
		}

}


	function ballSnapToPlayer() {
		if (player1.distance < player2.distance && player1.distance < player3.distance && player1.distance < player4.distance && player1.distance < player5.distance) {
					$('#ball').removeClass();
        	$('#ball').addClass("grouped1");
					$('#x1').addClass("grouped1");
					$('#o1').draggable( { alsoDrag: ".grouped1" });
		} else if (player2.distance < player1.distance && player2.distance < player3.distance && player2.distance < player4.distance && player2.distance < player5.distance) {
					$('#ball').removeClass();
					$('#ball').addClass("grouped2");
      	  $('#x2').addClass("grouped2");
					$('#o2').draggable( { alsoDrag: ".grouped2" });
		} else if (player3.distance < player1.distance && player3.distance < player2.distance && player3.distance < player4.distance && player3.distance < player5.distance) {
					$('#ball').removeClass();
					$('#ball').addClass("grouped3");
					$('#x3').addClass("grouped3");
					$('#o3').draggable( { alsoDrag: ".grouped3" });
		} else if (player4.distance < player1.distance && player4.distance < player2.distance && player4.distance < player3.distance && player4.distance < player5.distance) {
					$('#ball').removeClass();
					$('#ball').addClass("grouped4");
					$('#x4').addClass("grouped4");
					$('#o4').draggable( { alsoDrag: ".grouped4" });
		} else if (player5.distance < player1.distance && player5.distance < player2.distance && player5.distance < player3.distance && player5.distance < player4.distance) {
					$('#ball').removeClass();
					$('#ball').addClass("grouped5");
					$('#x5').addClass("grouped5");
					$('#o5').draggable( { alsoDrag: ".grouped5" });
		}


	}