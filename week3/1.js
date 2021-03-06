var reg = /^[0-9a-z]$/;//中间只能有0-9或者a-z中的一位，以数字或者小写字母开头，还必须以这个为结尾。
console.log(reg.test('1a'));//f
console.log(reg.test('1'));//t
console.log(reg.test('a'));//t
console.log(reg.test('a1a'));//f

var reg2=/[11-99]/ ;// 1或 1-9 或9 
var reg2=/^18|19$/;    // 以18开头，或者以19结尾
var reg2=/^18|19/;    //以18开头或者存在19就可以
var reg2=/18|19$/;    //有18或者以19结尾就可以
var reg2=/^(18|19)$/;    //以18开头以19结尾
var reg2=/^1[89]$/;    //以18开头以19结尾



//var reg2=/[a-Z]/;  这个会报错，因为Z 在a的前面 根据ASCII码值计算的 
var reg5=/\d?/;
console.log(reg5.test(''));


console.log('------------------------------------------------')
var reg4 = /\d/; // 有数字
console.log(reg4.test(''))//false
console.log(reg4.test('1'))//true
console.log(reg4.test('123'))//true
console.log(reg4.test('q'))//false
console.log(reg4.test('q1'))//true
var reg4_1 = /\d?/;// 有0到1个数字
console.log(reg4_1.test(''))//true
console.log(reg4_1.test('1'))//true
console.log(reg4_1.test('123'))//true
console.log(reg4_1.test('q'))//true
console.log(reg4_1.test('q1'))//true

var reg4_2 = /\d*/;// 有0到多个数字
console.log(reg4_2.test(''))//true
console.log(reg4_2.test('1'))//true
console.log(reg4_2.test('123'))//true
console.log(reg4_2.test('q'))//true
console.log(reg4_2.test('q1'))//true

var reg4_2 = /\d+/;// 有1到多个数字
console.log(reg4_2.test(''))//false
console.log(reg4_2.test('1'))//t
console.log(reg4_2.test('123'))//t
console.log(reg4_2.test('q'))//false
console.log(reg4_2.test('q1'))//t

var reg5 = /^\d$/ //只能有一个数字
console.log(reg5.test('11'))// false


var reg5_1 = /^\d+$/;  //以数字开头，以数字结尾，中间1到多个数字
console.log(reg5_1.test('11')) // true
console.log(reg5_1.test('12')) // t
console.log(reg5_1.test('113')) // t
console.log(reg5_1.test('11qw3')) // f

var reg5_2 = /^6*$/
console.log(reg5_2.test('616')) //f
console.log(reg5_2.test('6666')) // t
console.log(reg5_2.test('66')) //t

var reg9=/^[1.2]$/;//中括号的点就是点本身，不是代表任意字符
console.log(reg9.test('1.2'));//f
console.log(reg9.test('1q2'));//f
console.log(reg9.test('1'));//t
console.log(reg9.test('12'));//f
console.log(reg9.test('.'));//t
console.log(reg9.test('2'));//t
console.log(reg9.test('q'));//f






