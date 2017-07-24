var startTime;
var checkTime;
var vibrateInterval

//Initialize function
var init = function () {
	// TODO:: Do your initialization job
	console.log("init() called");

	// add eventListener for tizenhwkey
	document.addEventListener('tizenhwkey', function(e) {
        if( ev.keyName === "back" ) {
            var activePopup = document.querySelector( '.ui-popup-active' ),
                page = document.getElementsByClassName( 'ui-page-active' )[0],
                pageid = page ? page.id : "";

            if( pageid === "one" && !activePopup ) {
                try {
                    tizen.application.getCurrentApplication().exit();
                } catch (ignore) {
                }
            } else {
                window.history.back();
            }
        }
	});
	var activities = document.getElementById("select-choice-1");
	
	activities.addEventListener("change", function() {
		switch(activities.value){
		case 'b':
			addActivityItem('b');
			break;
		case 'a':
			addActivityItem('a');
			break;
		case 'c':
			addActivityItem('e');
		}
	});

	function addActivityItem(theme2) {
		$("[data-role='page']").buttonMarkup({theme: theme2});
		$("[data-role='header']").buttonMarkup({theme: theme2});
		$(".ui-mobile-viewport").buttonMarkup({theme: theme2});
		$(".ui-btn").buttonMarkup({theme: theme2});
		$("[data-role='listview']").buttonMarkup({theme: theme2});
		$("[data-role='footer']").buttonMarkup({theme: theme2});
	}
	
};
// window.onload can work without <body onload="">
window.onload = init;

function startTime() {
	var today = new Date();
	var h = today.getHours();

	var m = today.getMinutes();
	var s = today.getSeconds();
	m = checkTime(m);
	s = checkTime(s);
	document.getElementById('divbutton1').innerHTML="Current time: " + h + ":" + m + ":" + s;
	var t = setTimeout(startTime, 250);
}

function checkTime(i) {
	if (i < 10) {
		i="0" + i;
	}
	return i;
}
function singleVib(){
	window.navigator.vibrate(200);
}
function singleVib2(){
	window.navigator.vibrate([200,700,200,700,200,700,500,300,100,1000]);
}
function singleVib3(){
	if(vibrateInterval) clearInterval(vibrateInterval);
	window.navigator.vibrate(0);
}
function changeTheme(){
	$("[data-role='page']").buttonMarkup({theme: 'b'});
}
