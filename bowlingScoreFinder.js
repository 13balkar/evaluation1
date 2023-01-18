const containsOnlyNumbers = (array) => {
    return array.every((element) => {
      return typeof element === 'number';
    })
}
const getScore= rolls =>{
  if (!Array.isArray(rolls)) {
    throw new Error('Not an array');
  }
  if (rolls.length === 0) {
    throw new Error('Empty error');
  }
  if(!containsOnlyNumbers(rolls)){
    throw new Error('Not all elements are numbers');
  }
  let totalScore=0;
  for(let iterator=0;iterator<20;iterator+=2){
    if(rolls[iterator]===10){
      totalScore+=10+rolls[iterator+1]+rolls[iterator+2];
    }else if(rolls[iterator]+rolls[iterator+1]>=10){
      totalScore+=10+rolls[iterator+2];
    }else{
      totalScore+=rolls[iterator]+rolls[iterator+1];
    }
  }
  return totalScore;
}


const findBestScore= rollsSet =>{
    if (!Array.isArray(rollsSet)) {
      throw new Error('Not an array');
    }
    if (rollsSet.length === 0) {
      throw new Error('Empty error');
    }
    let bestScore=0;
    rollsSet.forEach( roll =>{
        bestScore=Math.max(bestScore,getScore(roll));
    })
    return bestScore;
}

let rolls1=[3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6];
let rolls2=[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10];
let rolls3=[6, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

console.log(findBestScore([rolls1,rolls2,rolls3]));

module.exports={getScore,findBestScore};
