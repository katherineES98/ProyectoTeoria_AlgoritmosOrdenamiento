var tree;
var numeros=[4, 10, 3, 5, 1,22,51,32];


function setup() {
  createCanvas(600, 400);
  background(51);
  tree = new Tree();
  for (var i = 0; i < numeros.length; i++) {
    tree.addValue(numeros[i], i);
  }
  console.log(tree);
//tree.traverse();

  var result = tree.search(10);
  if (result == null) {
    console.log('not found');
  } else {
    console.log(result);
  }

}