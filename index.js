let child=document.getElementById("container").children
console.log({child});

let lastChild=document.getElementById("container").lastChild
console.log({lastChild});
// Change document background color to
// silver 
document.body.style.color="silver"
// Change the font color for h1 title tag to
// green
document.getElementById("title").style.color="green";

// Change the font case for h3 title tags to
// uppercase
document.getElementById("fruits").style.textTransform="uppercase";

document.getElementById("vegies").style.textTransform="uppercase"

// Add one more fruit to the fruits list
let fruit =document.createElement("li");
fruit.textContent="kiwi";
document.getElementById("fruitList").appendChild(fruit);


// Add one more vegetable to the vegetables
// list
let vegie=document.createElement("li");
vegie.textContent="spinach";
document.getElementById("vegList").appendChild(vegie);



