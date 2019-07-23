// 函数重载

function addMethod(object, name, f) {
    // 保存上一次object[name]方法
    var old = object[name];
    console.log('add -- ', old)
    object[name] = function() {
        console.log('find ---', f.name)
        // f.length为函数定义时的参数个数
        // arguments.length为函数调用时的参数个数
        if (f.length === arguments.length) {
            return f.apply(this, arguments);
        } else if (typeof old === "function") {
            return old.apply(this, arguments);
        }
    };
}

// 不传参数时，返回所有name
function find0() {
    return this.names;
}

// 传一个参数时，返回firstName匹配的name
function find1(firstName) {
    var result = [];
    for (var i = 0; i < this.names.length; i++) {
        if (this.names[i].indexOf(firstName) === 0) {
            result.push(this.names[i]);
        }
    }
    return result;
}

// 传两个参数时，返回firstName和lastName都匹配的name
function find2(firstName, lastName) {
    var result = [];
    for (var i = 0; i < this.names.length; i++) {
        if (this.names[i] === firstName + " " + lastName) {
            result.push(this.names[i]);
        }
    }
    return result;
}

var people = {
    names: ["Dean Edwards", "Alex Russell", "Dean Tom"]
};

addMethod(people, "find", find0);
addMethod(people, "find", find1);
addMethod(people, "find", find2);

// console.log(people.find("Dean", "Edwards"));
console.log(people.find("Dean"));
console.log(people.find());