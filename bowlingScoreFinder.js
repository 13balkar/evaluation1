const getScore= rolls =>{
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
let rolls1=[3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6];
let rolls2=[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10];
let rolls3=[6, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];


