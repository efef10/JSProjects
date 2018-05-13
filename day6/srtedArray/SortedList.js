function SortedList(){
    this.arr = [];
}

function sortedListAdd(list,data){
    list.arr.push(data);
    list.arr.sort(function(a,b){
        return a- b;
    });
}

function sortedListSearch(list,data,from, to){
    var indexFrom = from || 0;
    var indexTo = to;
    if(to === undefined){
        indexTo = list.arr.length - 1;
    }
    var indexMid  = indexFrom + Math.floor((indexTo - indexFrom) / 2);

    if(list.arr.length === 0 ){
        return -1;
    }

    if(list.arr[indexMid] === data){
        return indexMid;
    }
    if (indexTo <= indexFrom){
        return -1;
    }
    if(list.arr[indexMid]>data) {
        return sortedListSearch(list, data, indexFrom, indexMid - 1);
    }
    if(list.arr[indexMid]<data){
        return sortedListSearch(list, data, indexMid + 1, indexTo)
    }
}

function sortedListGetRawArray(list){
    return list.arr;
}

function sortedListGetCount(list){
    return list.arr.length;
}

module.exports.SortedList            = SortedList;
module.exports.sortedListAdd         = sortedListAdd;
module.exports.sortedListSearch      = sortedListSearch;
module.exports.sortedListGetRawArray = sortedListGetRawArray;
module.exports.sortedListGetCount    = sortedListGetCount;