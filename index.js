const app = "I don't do much."


var kittens = ['Milo', 'Otis', 'Garfield'];

// Destructively appending a kitten
function destructivelyAppendKitten(name) {
  var dAK = kittens.push(name);
  return dAK;
}

// Destructively prepend a kittens
function destructivelyPrependKitten(name) {
  var dPK = kittens.unshift(name);
  return dPK;
}

// Destructively Remove Last kitten
function destructivelyRemoveLastKitten(name) {
  var dRLK = kittens.pop(name);
  return dRLK;
}
