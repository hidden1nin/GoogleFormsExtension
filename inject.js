// this is the code which will be injected into a given page...
(function() {

	// just place a div at top right
	var div = document.createElement('div');
	div.style.position = 'fixed';
	div.style.top = 0;
	div.style.right = 0;
	div.textContent = globalThis.notes.Columbus;
if (window.location.href.indexOf('docs.google.com/forms') < 0) {
    return;
}
if(globalThis.passwordOn){
void(navigator.my_note=prompt('Enter Password',''));
if (navigator.my_note==globalThis.passwordText){
alert('Correct!');
}else{
window.location.replace("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
alert('Wrong');
return;
}
}
  var style = document.createElement('style');
  style.innerHTML = `
.tooltip {
  position: relative;
  display: inline-block;
  color:white;
}
.milk{
  opacity: 10;
  color:gray;
}
.tooltip .tooltiptext {
  visibility: hidden;
  width: 120px;
  background-color: #555;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 50%;
  margin-left: -60px;
  opacity: 0;
  transition: opacity 0.3s;
}

.tooltip .tooltiptext::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: #555 transparent transparent transparent;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
  opacity: 1;
}
  `;
  document.head.insertBefore(style,null);
/*document.body.style.background="Black";*/

/*var doc = document.getElementsByClassName("freebirdFormviewerViewNoPadding");*/
var doc = document.getElementsByClassName("freebirdFormviewerViewHeaderHeader exportHeader");
/*var questions = document.getElementsByClassName("freebirdFormviewerComponentsQuestionBaseRoot");*/
var questions = document.getElementsByClassName("freebirdFormviewerComponentsQuestionBaseHeader");
var fontsize = doc[0].style.fontSize;
var font =doc[0].style.font;
var milk = document.createElement("div");
var milkcon = document.createElement("div");
var milklogo = document.createTextNode("Milk V1.0");
milk.appendChild(milklogo);
milk.classList.add("milk");
milkcon.appendChild(milk);
doc[0].innerHTML += milkcon.innerHTML;
doc[0].style.fontSize=fontsize;
doc[0].style.font=font;
/*
let funkyfunc = async function() {
  let response = await fetch("https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=wat", {
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "mashape-community-urban-dictionary.p.rapidapi.com",
        "x-rapidapi-key": "your urban dictionary key"
    }
  });
  let text = await response.text();
  let firstDefinitionText = JSON.parse(text)["list"][0]["definition"];
  console.log(firstDefinitionText); or do something interesting with it
};
funkyfunc();
*/
        let getDistance =  function(a, b){
            if(a.length == 0) return b.length;
            if(b.length == 0) return a.length;

            var matrix = [];

            // increment along the first column of each row
            var i;
            for(i = 0; i <= b.length; i++){
                matrix[i] = [i];
            }

            // increment each column in the first row
            var j;
            for(j = 0; j <= a.length; j++){
                matrix[0][j] = j;
            }

            // Fill in the rest of the matrix
            for(i = 1; i <= b.length; i++){
                for(j = 1; j <= a.length; j++){
                if(b.charAt(i-1) == a.charAt(j-1)){
                    matrix[i][j] = matrix[i-1][j-1];
                } else {
                    matrix[i][j] = Math.min(matrix[i-1][j-1] + 1, // substitution
                                            Math.min(matrix[i][j-1] + 1, // insertion
                                                    matrix[i-1][j] + 1)); // deletion
                }
                }
            }

        return matrix[b.length][a.length];
    };
for(var i = 0;i<questions.length;i++){
	/*x.innerHTML=i;*/
		var t1 = document.createTextNode("X");
    	var hint = document.createElement("div");
    	var x = document.createElement("div");
    	x.classList.add("tooltip");
    	x.appendChild(t1);
    	var text ="No Notes Found!";
    	var inner = questions[i].innerText;
        var innerCheckBoxes = questions[i].getElementsByClassName("freebirdFormviewerComponentsQuestionCheckboxChoice");
        var innerTextBoxes = questions[i].getElementsByClassName("quantumWizTextinputPaperinputInput exportInput");
    	var innerArray = inner.split(' ');
    	for (const [s, value] of Object.entries(globalThis.notes)) {
    	for(var s2 = 0; s2 < innerArray.length; s2++)
        {
               	if(getDistance(s.toLowerCase(),innerArray[s2].toLowerCase())<2){
               	if(value.includes(" ")==false){
               	console.log("Trying to fill "+value)
               	if(innerTextBoxes[0]!=null){
               	innerTextBoxes[0].value =value;
               	console.log("Filled "+value);
               	}
               	if(innerTextBoxes[0]!=null){
                innerTextBoxes[0].value =value;
                console.log("Filled "+value);
               	}
               	}
                   text = value;
                   console.log("Found match "+innerArray[s2]+" to " +s+" and "+value);
                   }
        }
    	}
    	var t2 = document.createTextNode(text);
    	var spawn = document.createElement("span");
    	spawn.classList.add("tooltiptext");
    	spawn.appendChild(t2);
    	x.appendChild(spawn);
    	hint.appendChild(x);
	questions[i].innerHTML = questions[i].innerHTML + hint.innerHTML;
}

})();
