/**
 * Linked list class
 * set head item to null
 */
 
function LinkedList(){
    this.head = null;
}
 
LinkedList.prototype = {
     
    /**
     * inserts an element at the tail of the linked list
     * @param {Object} val
     */
    insert:function(val){
        var item = {
            value:val,
            next:null
        }
         
        if (this.head == null){
            this.head = item;
            return;
        }else{
            current = this.head;
            while(current.next != null){
                current = current.next;         
            }// end of while
            current.next = item;        
        }          
    },
 
 
     
    /**
     * shows all elements of the linked list
     */
    showAllElements:function(){
        if (this.head == null) return;
        var current = this.head, i = 1;
        while(current.next != null){
            console.log(‘The element at position ’ + i + ’ has value ’ + current.value);
            current = current.next;
            i++;
        }
        // printing the last element
        console.log(‘The element at position ’ + i + ’ has value ’ + current.value);
     },
 
 
     
    /**
     * removes any element from the list
     * @param {Object} val
     */
    remove:function(val){
        var current, temp;
        if (this.head == null){
            throw new Error(‘there are no items to remove’);
        }else if (this.head.value == val){
            this.head = this.head.next;
        }else{
            current = this.head;
            while(current != null){
                if (current.next.value == val){
                    temp = current.next.next;
                    current.next = temp;
                    return;
                }
                current = current.next;
                 
            }
        }
    },
 
 
     
    /**
     * inserts an element n positions from head
     * @param {Object} n
     * @param {Object} val
     */
    insertItemNthPositionFromHead:function(n, val){
        var item = {
            value:val,
            next:null
        }, current = this.head, i = 1, temp;
         
        while(current.next != null){
            if (i == n-1){
                // insert new element at this position
                temp = current.next;
                current.next = item;
                item.next = temp;
                 
            }
            current = current.next;
            i++;            
        }       
    },
 
 
    reversePairWise:function(){
    },
    reversePairWiseRecursive:function(){
    },
    /** reverse link list recursively**/
    reverseRecursively:function(head){
        // 1-2-3-4-5-6-7-8 (8-7-6-5-4-3-2-1)
        this.prev = this.prev || null;
        var next;
        if(head == null){
            return this.prev;
        }
        next = head.next;
        head.next = this.prev;
        this.prev = head;
        return this.reverseRecursively(next);
    },
    /**
    * reverse a linked list
    */
    reverse:function(){
        var prev = null,current = this.head,next;
        while(current!=null){
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        this.head = prev;
        return this.head;
    },     
    /**
     * show all elements in reverse linked list
     */
    showElementsReverseLinkedList:function(){
        var firstElement = this.reverse(); 
        var i = 1, current;
        while(firstElement.next != null){           
            console.log(‘The element at position ’ + i + ’ has value ’ + firstElement.value);
            firstElement = firstElement.next;
            i++;
        }
        console.log(‘The element at position ’ + i + ’ has value ’ + firstElement.value);       
    }
}

var list = new LinkedList();
list.insert(‘tom’);
list.insert(‘harry’);
list.insert(‘paul’);
list.insert(‘tori’);
list.insert(‘susie’);   
 
console.log(‘After adding 5 elements ‘);
// list has - tom -> harry -> paul -> tori -> susie
list.showAllElements();                         
 
list.remove(‘tori’);            
console.log(‘After removing tori from the list ‘);  
// list is now - tom -> harry -> paul -> susie      
list.showAllElements();         
 
list.insertItemNthPositionFromHead(3, ‘bunty’);         
console.log(‘After adding bunty at position 3 ‘);     
// list is now - tom -> harry -> bunty -> paul -> susie      
list.showAllElements();
 
// reverse and show all elements of reversed list
console.log(‘reverse the linked list’);
// list is now - susie -> paul -> bunty -> harry -> tom
list.showElementsReverseLinkedList();  
