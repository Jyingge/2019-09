/* let str = "This is a world.";
let obj = {};
let ary = [];
str = str.replace(/(\w+)/g, (a, b, c) => {
    return obj[a] =a
});
for (let k in obj) {
    ary.push(k)
}
console.log(ary.reverse()) */

let str = 'this is a world.';
let ary = str.match(/\w+\b|\.$/g).reverse().join(' ').replace(/\.\s/,'.');
console.log(ary);
let ary1=str.split(' ').reverse().join(' ').replace(/(\w+)(\.)/,'.$1');
console.log(ary1);



