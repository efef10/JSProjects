var playerInTurn = 1;
var sum1 = 0;
var sum2 = 0;
var round = 1;
var score1 = 0;
var score2 = 0;
var originCards = [1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,
                   9,9,9,9,10,10,10,10,11,11,11,11,12,12,12,12,13,13,13,13,14,14,14,14];
var cards;

function start(){
    score1 = 0;
    score2 = 0;
    round = 1;
    document.getElementById("score1").innerHTML = "Score: "+score1;
    document.getElementById("score2").innerHTML = "Score: "+score2;
    initBoard();
}

function checkWinner(){
    var winner;
    if(sum1>21 || sum2===21){
        winner = "2";
        score2++;
        document.getElementById("score2").innerHTML = "Score: "+score2;
    }
    else if(sum2>21 || sum1 === 21){
        winner = "1";
        score1++;
        document.getElementById("score1").innerHTML = "Score: "+score1;
    }
    if(!!winner){
        document.getElementById("message").innerHTML =`player${winner} won!`;
        if(round == 3){
            var theWinner = score1>score2 ? 1 : 2;
            document.getElementById("message").innerHTML = "game over. player " + theWinner + " won";
            document.getElementById("btnAnother").disabled = true;
        }
        else {
            round += 1;
            playerInTurn = Number(winner);
            document.getElementById("btnAnother").removeAttribute("disabled");
        }
    }
}

function initBoard(){
    document.getElementById("btnAnother").disabled = true;
    document.getElementById("message").innerHTML = "";
    document.getElementById("round").innerHTML = "Round: "+ round;
    cards = originCards;
    sum1 = 0;
    sum2 = 0;
    var card;
    var initialCards1 = document.getElementsByClassName("initialCards1");
    for (var i = 0; i < initialCards1.length; i++) {
        card = randCard();
        initialCards1[i].innerHTML = card;
        sum1 += Number(card);
    }
    var initialCards2 = document.getElementsByClassName("initialCards2");
    for (var i = 0; i < initialCards2.length; i++) {
        card = randCard();
        initialCards2[i].innerHTML = card;
        sum2 += Number(card)
    }
    document.getElementById("sum1").innerHTML = sum1.toString();
    document.getElementById("sum2").innerHTML = sum2.toString();
    var addedLis = document.getElementsByClassName("added-li");
    var length = addedLis.length;
    for(var i=0 ; i<length ; i++){
        addedLis[i].innerHTML = "";
    }
    var btnDraw = document.getElementById("draw"+playerInTurn);
    var btnStay = document.getElementById("stay"+playerInTurn);
    btnDraw.removeAttribute("disabled");
    btnStay.removeAttribute("disabled");
    var otherPlayer;
    if(playerInTurn == 1){
        otherPlayer = 2;
    }
    else{
        otherPlayer = 1;
    }
    btnDraw = document.getElementById("draw"+otherPlayer);
    btnStay = document.getElementById("stay"+otherPlayer);
    btnDraw.disabled = true;
    btnStay.disabled = true;
    checkWinner();
}

function turnChange(){
    var btnDraw = document.getElementById("draw"+playerInTurn);
    var btnStay = document.getElementById("stay"+playerInTurn);
    btnDraw.disabled = true;
    btnStay.disabled = true;
    if(playerInTurn == 1){
        playerInTurn = 2;
    }
    else{
        playerInTurn = 1;
    }
    btnDraw = document.getElementById("draw"+playerInTurn);
    btnStay = document.getElementById("stay"+playerInTurn);
    btnDraw.removeAttribute("disabled");
    btnStay.removeAttribute("disabled");
}


function randCard(){
    var randIndex = Math.floor(Math.random()*cards.length);
    var card = (cards.splice(randIndex,1))[0];
    return card.toString();
}

function addNewListItem(ulName,card){
    var ul = document.getElementById(ulName);
    var li = document.createElement("li");
    li.style = "list-style-type:none;";
    li.classList.add("added-li");
    li.appendChild(document.createTextNode(card));
    ul.appendChild(li);
}

function draw(){
    var card = randCard();
    addNewListItem("cards"+playerInTurn, card);
    var sum = document.getElementById("sum"+playerInTurn);
    if(playerInTurn == 1){
        sum1 += Number(card);
        sum.innerHTML = sum1.toString();
    }
    else{
        sum2 += Number(card)
        sum.innerHTML = sum2.toString();
    }
    turnChange();
    checkWinner();
}

function stay(){
    turnChange();
}
