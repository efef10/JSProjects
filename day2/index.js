function randNum(min, max){
    return Math.floor(Math.random()* ((max - min) + 1) + min);
}

var letterArr = [ "a", "b", "c", "d", "e", "f"],
    minIndex = 0,
    maxIndex = letterArr.length - 1;

for (var i = 0; i<= maxIndex; i++){
    console.log(letterArr[randNum(minIndex,maxIndex)]);
}