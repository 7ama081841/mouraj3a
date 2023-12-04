let mainObj = {
    hasDecount: false,
    Message: function () {
        return `you${mainObj.hasDecount ? "" : " don't"} hav Decount`; // nejem na3mel condition el mo5tasra
    },
    thisMessage: function () {
        return `you${this.hasDecount ? "" : " don't"} hav Decount`; // yelzemni n7ot this
    },
};

console.log(mainObj.hasDecount);
console.log(mainObj.thisMessage());

let obj1 = Object.create(mainObj); // nejem na3mel object mn object e5er

obj1.hasDecount = true; // w nejem na3malou set value 5asa bih

console.log(obj1.hasDecount);
console.log(obj1.thisMessage());
