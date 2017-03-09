

function findWaldo(arr, found) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "Waldo") {
      found(i);   // execute callback
    }
  }
}

function actionWhenFound(x) {
  console.log("Found him! I did it "  +  x);

}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);