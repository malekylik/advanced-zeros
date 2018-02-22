var simple = [2,	3,	5,	7,	11,	13,	17,	19,	23,
  	29,	31,	37,	41,	43,	47,	53,	59,	61,	67,	71,
  73,	79,	83,	89,	97,	101,	103,	107,	109,	113,	127,
  	131,	137,	139,	149,	151,	157,	163,	167,	173,
  179,	181,	191,	193,	197,	199,	211,	223,	227,	229,	233,	239,	241,	251];


module.exports = function getZerosCount(number, base) {
  if (base === 2) return 0;
  let count = 0;
  let bas;

  for(let i = simple.length - 1; i >= 0; i--)
    if(base % simple[i] === 0){
      bas = simple[i];
      break;
    }

  for(let i = bas; i < number; i*=bas){
    count+=Math.floor(number / i);
  }
  return count;
}

