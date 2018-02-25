const simple = [2,	3,	5,	7,	11,	13,	17,	19,	23,
  	29,	31,	37,	41,	43,	47,	53,	59,	61,	67,	71,
  73,	79,	83,	89,	97,	101,	103,	107,	109,	113,	127,
  	131,	137,	139,	149,	151,	157,	163,	167,	173,
  179,	181,	191,	193,	197,	199,	211,	223,	227,	229,	233,	239,	241,	251];


module.exports = function getZerosCount(number, base) {
  let count = Number.MAX_SAFE_INTEGER;
  let bas = [];

  for(let i = simple.length - 1; i >= 0; i--)
  if(base % simple[i] === 0){
    bas.push({
      value:simple[i],
      cof:0
    });
  }



for(let i = 0; i < bas.length; i++){  
      let temp = base;
      while(temp % bas[i].value === 0){ 
        bas[i].cof++;
        temp /= bas[i].value;
      }
  }


for(let j = 0; j < bas.length; j++){ 
  let temp = 0;
   for(let i = bas[j].value; i < number; i*=bas[j].value){
    temp+=Math.floor(number / i);
  }
    count = Math.min(count, Math.floor(temp / bas[j].cof));
}



return count;
}