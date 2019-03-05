/**
 * initialize your data structure here.
 */
var MinStack = function () {
    this.stack = [];
    this.min = Infinity;
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
    if (x <= this.min) {
        this.stack.push(this.min); // record last minium value
        this.min = x; // set new minimum value
    }
    this.stack.push(x); // push stack
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    if (this.stack.pop() === this.min) { // remove last value
        this.min = this.stack.pop(); // reset second last for minimum value
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    return this.min;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = Object.create(MinStack).createNew()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */