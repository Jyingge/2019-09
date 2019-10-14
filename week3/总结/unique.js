// indexOf实现
var array = [1, 1, '1'];

function unique(array) {
    var res = [];
    for (var i = 0, len = array.length; i < len; i++) {
        var current = array[i];
        if (res.indexOf(current) === -1) {
            res.push(current)
        }
    }
    return res;
}

console.log(unique(array));

// 排序后去重
var array = [1, 1, '1'];

function unique(array) {
    var res = [];
    var sortedArray = array.concat().sort();
    var seen;
    for (var i = 0, len = sortedArray.length; i < len; i++) {
        // 如果是第一个元素或者相邻的元素不相同
        if (!i || seen !== sortedArray[i]) {
            res.push(sortedArray[i])
        }
        seen = sortedArray[i];
    }
    return res;
}

console.log(unique(array));

// filter实现
var array = [1, 2, 1, 1, '1'];
function unique(array) {
    var res = array.filter(function(item, index, array){
        return array.indexOf(item) === index;
    })
    return res;
}
console.log(unique(array));

// 排序去重
var array = [1, 2, 1, 1, '1'];
function unique(array) {
    return array.concat().sort().filter(function(item, index, array){
        return !index || item !== array[index - 1]
    })
}
console.log(unique(array));

// Object键值对
var array = [{value: 1}, {value: 1}, {value: 2}];

function unique(array) {
    var obj = {};
    return array.filter(function(item, index, array){
        console.log(typeof item + JSON.stringify(item))
        return obj.hasOwnProperty(typeof item + JSON.stringify(item)) ? false : (obj[typeof item + JSON.stringify(item)] = true)
    })
}

console.log(unique(array)); // [{value: 1}, {value: 2}]

// ES6 Set实现
var unique = (a) => [...new Set(a)]
