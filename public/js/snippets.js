


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