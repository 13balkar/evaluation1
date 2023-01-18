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
const getFrame= rolls =>{
  let finalFrames={};
  for(let iterator=0;iterator<10;iterator++){
    if(rolls[iterator*2]===10 || rolls[iterator*2]+rolls[iterator*2+1]===10){
      finalFrames[iterator+1]=[rolls[iterator*2],rolls[iterator*2+1],rolls[iterator*2+2]];
    }else {
      finalFrames[iterator+1]=[rolls[iterator*2],rolls[iterator*2+1]];
    }
  }
  return finalFrames;
}




let rolls1=[3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6];
let rolls2=[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10];
let rolls3=[6, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

console.log(getFrame(rolls1));


