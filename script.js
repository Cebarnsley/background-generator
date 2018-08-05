var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function background() {
	body.style.background = "Linear-gradient(to right," 
	+color1.value
	+", "
	+color2.value
	+")";

	css.textContent = body.style.background + ";";
}

function setGradient() {
	body.style.background =
	"Linear-gradient(to right," 
	+ color1.value
	+", "
	+color2.value
	+")";

	css.textContent = body.style.background + ";";
}

function randomNumber() {
	return Math.floor((Math.random() * 225) +1);
}

function randomGradient() {
	body.style.background =
	"Linear-gradient(to right," 
	+ "rgb("
	+randomNumber()
	+", "
	+randomNumber()
	+", "
	+randomNumber()
	+")"
	+", " 
	+"rgb("
	+randomNumber()
	+", "
	+randomNumber()
	+", "
	+randomNumber()
	+")"
	+")"
	;
	
	css.textContent = body.style.background + ";";

}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

