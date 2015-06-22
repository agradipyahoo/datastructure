# datastructure
Linked Link using javascript
<pre>
var list = new LinkedList();
list.insert('tom');
list.insert('harry');
list.insert('paul');
list.insert('tori');
list.insert('susie');   
 
console.log('After adding 5 elements ');
// list has - tom -> harry -> paul -> tori -> susie
list.showAllElements();                         
 
list.remove('tori');            
console.log('After removing tori from the list ');  
// list is now - tom -> harry -> paul -> susie      
list.showAllElements();         
 
list.insertItemNthPositionFromHead(3, 'bunty');         
console.log('After adding bunty at position 3 ');     
// list is now - tom -> harry -> bunty -> paul -> susie      
list.showAllElements();

// reverse and show all elements of reversed list
console.log('reverse the linked list');
// list is now - susie -> paul -> bunty -> harry -> tom
list.showElementsReverseLinkedList();  
console.log('reverse the linked list recursively');
var newhead = list.reverseRecursively(list.head);
list.head = newhead;
var nodes = [];
while(newhead != null){           
    nodes.push(newhead.value);
    newhead = newhead.next;
    
}
console.log(nodes.join('->'));


list.reversePairWise(list.head);
newhead =  list.head;
var nodes = [];
while(newhead != null){           
    nodes.push(newhead.value);
    newhead = newhead.next;
   
}
console.log('PairWise Reverse');
console.log(nodes.join('->'));


list.reversePairWiseRecursive(list.head);
newhead =  list.head;
var nodes = [];
while(newhead != null){           
    nodes.push(newhead.value);
    newhead = newhead.next;
   
}
console.log('PairWise Reverse Recursive');
console.log(nodes.join('->'));

var numbeList = new LinkedList(); 
numbeList.insert(1);
numbeList.insert(2);
numbeList.insert(3);
numbeList.insert(4);
numbeList.insert(5);

newhead =  numbeList.head;
var nodes = [];
while(newhead != null){           
    nodes.push(newhead.value);
    newhead = newhead.next;
   
}

console.log('number link list');
console.log(nodes.join('->'));


newhead = numbeList.reverseWithGivenSize(numbeList.head,3);
var nodes = [];
while(newhead != null){           
    nodes.push(newhead.value);
    newhead = newhead.next;
   
}

console.log('Reverse after thrid number');
console.log(nodes.join('->'));



var numbeList = new LinkedList(); 
numbeList.insert(1);
numbeList.insert(2);
numbeList.insert(3);
numbeList.insert(4);
numbeList.insert(5);
numbeList.swapKth(numbeList.head,2);
var newhead = numbeList.head;
var nodes = [];
while(newhead != null){           
    nodes.push(newhead.value);
    newhead = newhead.next;
   
}

console.log('Swap 2nd node from beginning and end');
console.log(nodes.join('->'));




var big = {value:1,next:{value:2,next:{value:3,next:{value:-2,next:null}}}};
big.toString = function(){
    var node = this;
    var nodes = [];
    while(node != null){           
        nodes.push(node.value);
        node = node.next;
       
    }
    
    return nodes.join('->');
}
var small = {value:1,next:{value:2,next:{value:3,next:null}}};
small.toString = function(){
    var node = this;
    var nodes = [];
    while(node != null){           
        nodes.push(node.value);
        node = node.next;
       
    }
    
    return nodes.join('->');
}

var result = {}
var list = new LinkedList(); 
var new_result = list.addList(big,small,result);

newhead = new_result;
var nodes = [];
while(newhead != null){           
    nodes.push(newhead.value);
    newhead = newhead.next;
   
}
console.log('Adding of two list:=>' +big.toString() + ',' +small.toString());
console.log(nodes.join('->'));


console.log('Sort a linked list of 0s, 1s and 2s') ;
</pre>
