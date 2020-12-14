//moeLifeSelector

//add constants to img ids
const moeYoung = document.querySelector('#moeYoung')
const moeYearOld = document.querySelector('#moeYearOld')
const moeAdult = document.querySelector('#moeAdult')

//click eventlisteners for 3 life stages

document.querySelector('#puppy').addEventListener('click', puppy)
document.querySelector('#yearOld').addEventListener('click', teenager)
document.querySelector('#adult').addEventListener('click', adult)




//function that toggle hidden displaying desired img hiding others
function puppy(){
	moeYearOld.classList.add('hidden')
	moeAdult.classList.add('hidden')
	moeYoung.classList.toggle('hidden')
}

function teenager(){
	moeYoung.classList.add('hidden')
	moeAdult.classList.add('hidden')
	moeYearOld.classList.toggle('hidden')
}

function adult(){
	moeYoung.classList.add('hidden')
	moeYearOld.classList.add('hidden')
	moeAdult.classList.toggle('hidden')
}



// TemperatureConverter
//set eventlistener
document.querySelector('#temp-btn').addEventListener('click', convertTemp)

//set up function
function convertTemp(){
//set variables 
//take value from input assign to temp
let temperatureF = document.querySelector('#input-temp').value
//convert temp from F to C using mafs
let temperatureC = (temperatureF -32) * 5 / 9
//display result in h2
document.querySelector('#converted-temp').innerText = Math.round(temperatureC)

}

// FIGHT DAY SELECTOR

document.querySelector('#fight-btn').addEventListener('click', fightDay)

function fightDay() {

	const day = document.querySelector('#input-day').value.toLowerCase()

	if(day === "sunday"){
		document.querySelector('#fightDay-Result').innerText = ("IT'S TIME!")
		document.querySelector('#fightDay-Result').style.color = 'red'
		document.querySelector('#fightDay-Result').style.fontSize = '100px'
		document.querySelector('.is-it-fightday').classList.add('gold-background')
		document.querySelector('#buffer').classList.toggle('hidden')
	}
	else if (day === "saturday" || day === "friday"){
		document.querySelector('#fightDay-Result').innerText = ('Almost there!')
		document.querySelector('#almost').classList.toggle('hidden')

	}
	else if (day === "monday" || day === "tuesday" || day === "wednesday" || day === "thursday") {
		document.querySelector('#fightDay-Result').innerText = ("You should probably be studying")
		document.querySelector('#bored').classList.toggle('hidden')

	}
	else {
		document.querySelector('#fightDay-Result').innerText = ("You are drunk")
		document.querySelector('#spelling').classList.toggle('hidden')
	}
}


//Convert text to lowercase

//set eventlistner for btn
document.querySelector('#text-btn').addEventListener('click', lowerCase)
document.querySelector('#upper-btn').addEventListener('click', upperCase)
//initiate function
function lowerCase(){	
//set variable
inputText = document.querySelector('#textToConvert').value
//convert text
lowerText = inputText.toLowerCase()
//display converted text
document.querySelector('#convertedText').innerText = lowerText
}

function upperCase(){	
//set variable
inputText = document.querySelector('#textToConvert').value
//convert text
upperText = inputText.toUpperCase()
//display converted text
document.querySelector('#convertedText').innerText = upperText
}



//code checker

//set variables for strings of code i want checked
const docQuerySel = "document.querySelector"
const adEvLi = "addEventListener"
//set event listner for click
document.querySelector('#checkCode').addEventListener('click', checkCode)
//set function
function checkCode(){
//check input code string against stored variables.
inputCode = document.querySelector('#codeInput').value
//output
if (inputCode.includes(docQuerySel && adEvLi)){
	document.querySelector('#codeResult').innerText = "DOMINOS!"
	document.querySelector('#correct').classList.remove('hidden')
	document.querySelector('#tryAgain').classList.add('hidden')
}
else {
	document.querySelector('#codeResult').innerText = "Try Again"
	document.querySelector('#tryAgain').classList.remove('hidden')
	document.querySelector('#correct').classList.add('hidden')
}

}












