//Write your pseduo code first! 
//Create an input for the temperature input
//Get the formula for the conversion
//Enter a temperature in Celsius
//When you click on the button, the temperature will ouput in Fahrenheit using the conversion formula

let submit = document.getElementById("submit").addEventListener("click", function() {
  let temperature = document.getElementById("temperature").value
  let outputTemp = document.getElementById("outputTemp")

  outputTemp.innerHTML = (9/5 * temperature) + 32
  
})