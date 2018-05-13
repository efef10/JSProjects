function BTree(){
    this.start = null;
}

function Node (data,right,left,parent){
    this.data = data;
    this.right = right;
    this.left = left;
    this.parent = parent;
}

Node.prototype = {
    value:function(){
        return this.data;
    },
    next:function(){
        var node1 = this;
        var node;
        if(this.right){
            node = this.right;
            while(node.left){
                node = node.left;
            }
            return node;
        }
        var son = this;
        var parent = son.parent;
        while(parent && parent.left !== son){
            son = son.parent;
            parent = son.parent;
        }
        return parent;

    }
}

BTree.prototype = {
    add:function(data, node1){
        var node = node1 || this.start ;
        if(this.start === null){
            this.start = new Node(data,null,null,null);
            return;
        }
        if(data <= node.data && node.left === null){
            node.left = new Node(data,null,null,node);
        }
        else if(data <= node.data && node.left !== null){
            this.add(data,node.left);
        }
        else if(data > node.data && node.right === null){
            node.right = new Node(data,null,null,node);
        }
        else{
            this.add(data,node.right);
        }

    },
    search(data, node1){
        var node = node1 || this.start;
        if(node === null){
            return -1;
        }
        if(node.data === data){
            return node;
        }
        if(data < node.data && node.left !== null){
            return this.search(data,node.left);
        }
        if(data > node.data && node.right !== null){
            return this.search(data,node.right);
        }
        return -1;
    },print :function(node1){
        var node;
        node = node1;
        if(node1 === undefined){
            node = this.root;
        }
        if(node == null){
            return;
        }
        if(node.left){
            this.print(node.left);
        }
        console.log(node.data);
        if(node.right){
            this.print(node.right);
        }
    }
}

module.exports.BTree = BTree;