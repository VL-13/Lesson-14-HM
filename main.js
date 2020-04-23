let availableQuantity = 15;
let orderedQuantity = prompt('Please enter quantity');

if (orderedQuantity > availableQuantity) {
alert( 'Sorry, we don’t have enough in stock :(');
} else {
   alert( 'Great, we will soon ship your order!' );
} 

availableQuantity -=orderedQuantity;

let secondOrderedQuantity = prompt('Please enter quantity');
let order = secondOrderedQuantity > availableQuantity ? alert( 'Sorry, we don’t have enough in stock :(' )
 : alert( 'Great, we will soon ship your order!' );