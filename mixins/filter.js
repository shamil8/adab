// TODO:: Remove this function in all places and add this mixin for them!
const filterByName = (letter, arr) => {
  const res = []
  arr.forEach(item => item.name.indexOf(letter) === 0 && res.push(item))

  return res
}
