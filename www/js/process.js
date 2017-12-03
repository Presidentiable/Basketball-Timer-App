let myApp = new Framework7({swipePanel: 'right'});
let myApp2 = new Framework7({swipePanel: 'left'});

let left = <div className="page">
				<header><center><img className="logo" width="100px" src="app-logo.png"></img></center></header>
				<header>Terms and Conditions</header>
				<p>These Terms and Conditions constitute a legally binding agreement made between you, whether personally or on behalf of an entity. We, concerning your access to and use of the Basketball Timer App. You agree that by using the App, you have read, understood, and agree to be bound by all of these Terms and Conditions Use.  IF YOU DO NOT AGREE WITH ALL OF THESE TERMS and CONDITIONS, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SITE AND YOU MUST DISCONTINUE USE IMMEDIATELY.</p>
				<header>Modifications and Interruptions </header>
				<p>We cannot guarantee the App will be available at all times.  We may experience hardware, software, or other problems or need to perform maintenance related to the App, resulting in interruptions, delays, or errors.  We reserve the right to change, revise, update, suspend, discontinue, or otherwise modify the App at any time or for any reason without notice to you.  You agree that we have no liability whatsoever for any loss, damage, or inconvenience caused by your inability to access or use the App. Nothing in these Terms of Use will be construed to obligate us to maintain and support the App or to supply any corrections, updates, or releases in connection therewith.</p>
				<header>Governing Law </header>
				<p>These Terms of Use and your use of the App are governed by and construed in accordance with the laws of the Republic of the Philippines applicable to agreements made and to be entirely performed within the constitution, without regard to its conflict of law principles.  </p>
				<header>Contact Us</header>
				<p>In order to resolve a complaint regarding the App or to receive further information regarding use of the App, please contact us at: </p>
				<p>KTG™<br></br>
				Magtaquing, Bugallon, Pangasinan<br></br>
				https://www.facebook.com/Kain-Tulog-Gala-164371753658180</p>
			</div>
		ReactDOM.render(left,document.getElementById('left'));


let right = <div className="page">
				<header className="head"><center><img className="App-logo" width="100px" src="logo.svg"></img></center></header>
				<header className="head">About App</header>
				<p>A Standard Basketball Timer Android Application that was made to fulfill the needs of some basketball leagues with tight budget that cannot afford to provide a basketball committee bundles. Now with this application, coming out for free, we are happy here at KTG to help you.</p>
			</div>
		ReactDOM.render(right,document.getElementById('right'));





//Gameclock script 
let timeleft = 720;
let id = 0;
let counter = 0;

 	function convert(s) {
 		let mins = Math.floor(s / 60);
 		let secs = s % 60;
 		if (mins<10) {
	 		mins = "0" + mins;
 		}
 		if (secs<10) {
 		secs = "0" + secs;
 		}
 		return mins + ':' + secs;
	 }

	function minstart() {
		id = setInterval(timeIt, 1000);
		}
		
	function timeIt() {
		let minTime = document.getElementById('timers');
		counter++;
		ReactDOM.render(convert(timeleft-counter),document.getElementById('timers'));
			if (counter == timeleft) {
				buzzer.play();
				clearInterval(id);
				counter = 0;	
			}
		}

	function minstop() {
		clearInterval(id);
		console.log('Gameclock Stopped');
		}

	function minset() {
		console.log('Gameclock Reset');
		timeleft=720;
		counter = 0;
		ReactDOM.render(convert(timeleft-counter),document.getElementById('timers'));
		}


	




//Shotclock here
let clock = 24;
let countdownId = 0;

	function start() {
 		countdownId = setInterval("countdown()", 1000);
	}

	function countdown(){
		if(clock > 1 ){
 			clock = clock - 1;
			ReactDOM.render(clock,document.getElementById('timer'));
		}

		else {
			buzzer.play();
 			clearInterval(countdownId);
 			clock = 0;
 			ReactDOM.render(clock,document.getElementById('timer'));
		}
	}

	function stop() {
		clearInterval(countdownId);
		console.log('Shotclock Stopped');
	}

	function reset() {
		console.log('Shotclock Reset');
		clock=24;
		ReactDOM.render(clock,document.getElementById('timer'));
	}



let btn = <div>
			<center>
			<br></br>
			<br></br>
				<h2>Gameclock</h2>
					<div id="timers" className='Gameclock'>12:00</div>
						<button className="gameBtn" onClick={minstart}>Start</button>
						<button className="gameBtn" onClick={minstop}>Stop</button>
						<button className="gameBtn" onClick={minset}>Reset</button>
							<br></br>
							<br></br>
							<hr></hr>
							<br></br>
				<h2>Shotclock</h2>
					<div id='timer' className='Shotclock'>24</div>
						<button className="shotBtn" onClick={start}>Start</button>
						<button className="shotBtn" onClick={stop}>Stop</button>
						<button className="shotBtn" onClick={reset}>Reset</button>
						<audio id="buzzer" src="buzzer.mp3"></audio>
			</center>
		 </div>	

ReactDOM.render(btn,document.getElementById('root'));








