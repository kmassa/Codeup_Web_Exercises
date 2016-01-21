


//functions goldbars to dollats to tanks

function toUSD (numberOfGoldBars) {
	return numberOfGoldBars * 500000; 
}
var goldBarCount = prompt ("how many gold bars do you have?")
console.log(toUSD(goldBarCount));

function toGoldBars (numberOfUSD){
	return numberofGoldBars / 500000;
}

function isThisEnoughForATank(value, currency){
	var costOfTank = 7500000;
	if(currency === USD){
		return true;
		} else {
			return false;
		}

		} else if (currency === "GOLD") {
			var USD = toUSD(value);
			if(USD>=costOfTank){
			return true;
		} else {
			return false:
		}
	}
}
var  haveEnough  = isThisEnoughForATank (3.5, "gold");
console.log (haveEnough);

//powerball function

function winPowerball (playInClass, totalPlayers){
	return playInClass/totalPlayers;
}	
console.log(winPowerball(10, 292000000));

<script type="text/javascript">
function changeText3(){
               var oldHTML = document.getElementById('para').innerHTML;
               var newHTML = "<span style='color:#ffffff'>" + oldHTML + "</span>";
               document.getElementById('para').innerHTML = newHTML;
}

//enter text and change with a button
</script>
<p id='para'>Welcome to the site <b id='boldStuff3'>dude</b> </p>
<input type='button' onclick='changeText3()' value='Change Text'/>

//display alert when “hover”
<html>
<head>
<script type="text/javascript">
<!--
function popup() {
               alert("Hello World")
}
//-->
</script>
</head>
<body>
 
<input type="button" value="Click Me!" onclick="popup()"><br />
<a href="#" onmouseover="" onMouseout="popup()">
Hover Me!</a>

// class exercise
 
var colors = ["red", "blue", "green", "yellow"];
//or
// var colors = new Array ("red", ...)

 var rand = math.floor(math.random()*10);
 console.log(rand);

 console.log(colors[rand]);

//stay within array

if(rand < colors.length){
 console.log(colors[rand]);
} else {
	console.log("that numebr is not in the array");
}
</body>
</html>

