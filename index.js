const app = "I don't do much."


var kittens = ['Milo', 'Otis', 'Garfield'];

// Destrutively appending a kitten to the end
function destructivelyAppendKitten(name) {
  var dAK = kittens.push(name);
  return dAK;
}
