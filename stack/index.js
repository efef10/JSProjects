let curr = null;

function push(data){
    curr = curr? new Node(data,curr) : new Node(data,null);
}

function Node(data,prev){
    this.data = data;
    this.prev = prev;
}

function pop(){
    curr = curr.prev;
}

function print(){
    var tmp = curr;
    while(tmp){
        console.log(tmp.data);
        tmp = tmp.prev;
    }
}

push("efrat");
push("shira");
print();
pop();
print();
pop();
print();