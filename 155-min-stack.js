/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.minIndex=0;
    this.list=[];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.list.push(x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.list.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    let len=this.list.length;
    return this.list[len-1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    this.minIndex=0; // reset
    
    this.list.forEach((item,n)=>{
        let min=this.list[this.minIndex];
        if (item<min) {
            this.minIndex=n;
        }
    });
    return this.list[this.minIndex];
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = Object.create(MinStack).createNew()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */