// add solution here
var plays = [];
function theBeatlesPlay(instruments, musicians){
  for(let i = 0; i < musicians.length; i++){
    plays.push(musicians[i] + " plays " + instruments[i]);
  }
  return plays;
}
