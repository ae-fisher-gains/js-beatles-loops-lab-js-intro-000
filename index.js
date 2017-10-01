function theBeatlesPlay (musicians, instruments) {
  var emptyArray = [];
  var musiciansLength = musicians.length
  for (var i = 0; i < musiciansLength; i++) {
    emptyArray.push (`${musicians[i]} plays ${instruments[i]}`)
  }
  return emptyArray
}

function johnLennonFacts (facts) {
  var i = 0
  var factsLength = facts.length
  var lennonArray = [];
  while (i < factsLength) {
    lennonArray[i] = (`${facts[i]}!!!`)
    i++
  }
  return lennonArray
}
