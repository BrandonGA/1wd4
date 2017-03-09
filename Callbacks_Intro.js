

function findWaldo(arr, found) {
  // for (var i = 0; i < arr.length; i++) {
    arr.forEach(function(search){
      console.log(search);
      if (search == "Waldo"){
        found(arr.indexOf(search));

      }
    });
  }


function actionWhenFound(x) {
  console.log("Found him! I did it "  +  x);

}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);

//In this this ARRAY i want FOREACH to pass to the FUNCTION
//as VARIABLE
// ['butt', 'fart', 'shart'].forEach(function(variable){
//   console.log(variable);
// });