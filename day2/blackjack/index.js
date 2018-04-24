const readline = require('readline');
var log = console.log;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


 function recursiveAsyncReadLine () {
    rl.question('your sum is: ' + sum + ', Do you want to continue? ', function (answer) {
        if (answer == 'quit'){ //we need some base case, for recursion
            return rl.close();} //closing RL and returning from function.
        if(answer == 'hit')
        {
            var newNum = randNum(1,14);
            player.push(newNum);
            sum += newNum;
            if (sum > 21)
            {
                console.log('you lost!');
                player = [];
                sum = 0;
                rl.close();
            }
            if (sum == 21)
                console.log("congratulation! you did it!");
            recursiveAsyncReadLine(); //Calling this function again to ask new question
        }
    });
};

function randNum(min, max){
    return Math.floor(Math.random()* ((max - min) + 1) + min);
}

 // var letterArr = [ "a", "b", "c", "d", "e", "f"],
//     minIndex = 0,
//     maxIndex = letterArr.length - 1;
//
// for (var i = 0; i<= maxIndex; i++){
//     console.log(letterArr[randNum(minIndex,maxIndex)]);
// }

 var player = [];
 for (var i=0 ; i<2 ; i++){
     player.push(randNum(1,14));
 }
var sum = player[0]+player[1];
console.log(player);
 recursiveAsyncReadLine();



