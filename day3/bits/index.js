var optionMap = {
    "humus":1,
    "salat":2,
    "hamutzim":4,
    "chips":8
}

var choices = ["humus","salat","hamutzim","chips"]

function is(obj, option){
    if ((obj & optionMap[option]) == optionMap[option])
        {
            return true;
        }
        return false;
}
function set(obj,option){
    return obj|optionMap[option];
}

var pita = Math.floor(Math.random()*4 + 1);
var choice = choices[Math.floor(Math.random()*4)];

console.log("search " + choice +" in: " + pita);
console.log(is(pita,choice));
if(!is(pita,choice)) {
    console.log("after adding " + choice + ": " + set(pita, choice));
}