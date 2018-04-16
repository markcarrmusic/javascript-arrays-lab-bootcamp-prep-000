const app = "I don't do much."

// Append a kitten to the end of the kittens Array
var kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten(name) {
  var dAK = kittens.push(name);
  return dAK;
}
