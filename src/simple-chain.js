const chainMaker = {
  chain: [],

  getLength() {
    this.chain.length;
    return this;
  },
  addLink(value) {
    this.chain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (position < 1 || typeof position !== 'number' || position > this.chain.length) {
      this.chain = [];
      throw new Error();
    } else {
     this.chain.splice(position-1,1);
    return this; 
    }
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let string = this.chain;
    this.chain = [];
    return string.join('~~')
  }
};

module.exports = chainMaker;
