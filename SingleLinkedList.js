class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}

class SingleLinkedList{
    constructor(){
        this.head=null;
        this.tail=null;
        this.length=0;
    }

    push(value){
        let newVal= new Node(value);
        if(this.head === null){
            this.head=newVal;
            this.tail=newVal;
        }
        else{
            this.tail.next = newVal;
            this.tail=newVal;
        }
            this.length +=1;
            return this;
    }

    pop(){
        if(!this.head) return undefined;

        let currentNode= this.head;
        let temp;
        while(currentNode.next){
            temp=currentNode;
            currentNode=currentNode.next;
        }
        this.tail=temp;
        this.tail.next=null;
        this.length -= 1;
        if(this.length==0){
            this.head=null;
            this.tail=null;
        }
        return currentNode;
    }

    shift(){
        if(!this.head) return undefined;

        let currentHead= this.head;
        this.head=this.head.next;
        this.length -= 1
        if(this.length == 0){
            this.head =null;
            this.tail=null;
        }
        return currentHead;
    }

    unshift(value){
        let newNode= new Node(value);
        if(!this.head){
            this.head=newNode;
            this.tail=newNode;
        }else{
            newNode.next=this.head;
            this.head=newNode;
        }
        this.length += 1;
        return this;

    }

    get(index){
        if(index < 0 || index >= this.length) return undefined;
        
            let count=0;
            let current=this.head;
            while(count<index){
            current = current.next;
            count += 1;

            }
            return current;
    }

    set(index, value){
        let node = this.get(index);
        if(node){
            node.value=value;
            return true;
        }
        return false;
    }

    insert(index, value){
        if(index < 0 || index > this.length) return false;
        else if(index === this.length){
            this.push(value);
        }else if(index === 0){
            this.unshift(value);
        }else{
            let newNode= new Node(value);
            let node= this.get(index-1);
            let nextNode= node.next;
            node.next= newNode;
            newNode.next= nextNode;
        }
        this.length += 1;
        return true;
    }

}

let data = new SingleLinkedList();
data.push("hii");
data.push("Binod");
data.push("!");