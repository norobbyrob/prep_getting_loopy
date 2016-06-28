//Challenge 1
function listPresidents(presidents){
 	for(var i = 0; i < presidents.length; i++){
   		console.log("the value of the index is: " + presidents[i]);
   		console.log("the value of i is: " + i);
 	}
 }
 
  
  var presidents = ['Washington', 'Adams', 'Jefferson', 'Madison', 'Monroe'];
  listPresidents(presidents);


//Challenge 3

var evenNumberArray = ''

function evenNumbers(){
      
for(var i = 0; i <= 100; i+=2){
  evenNumberArray = evenNumberArray + i;
}

console.log("Value is: " + evenNumberArray)
}

evenNumbers();

