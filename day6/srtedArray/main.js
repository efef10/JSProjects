var SortedList = require('./SortedList').SortedList;
var sortedListAdd = require('./SortedList').sortedListAdd;
var sortedListSearch = require('./SortedList').sortedListSearch;
var sortedListGetRawArray = require('./SortedList').sortedListGetRawArray;
var sortedListGetCount = require('./SortedList').sortedListGetCount;

var list = new SortedList();

for (var i = 0 ; i < 1000 ; i++){
    var value = Math.floor(Math.random()*10000);
    while(sortedListSearch(list,value)>=0){
        value = Math.floor(Math.random()*10000);
    }
    sortedListAdd(list,value);
}

assert("validating collection count",sortedListGetCount(list),1000);

var valueToFind = 999;//Math.floor(Math.random()*10000);
var actualIndex = sortedListSearch(list,valueToFind);

var arr = sortedListGetRawArray(list);
var expectedIndex = arr.indexOf(valueToFind);

assert("validating search", actualIndex, expectedIndex);

function assert(message, actual, expected){
    if(actual != expected){
        throw new Error(message);
    }
}