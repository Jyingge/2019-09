var oLis = document.getElementsByTagName('li');
Object.prototype.trans = function () {
    //this就是我们要转化的类数组
    return [...this];
    // return Array.from(this);
    // return [].slice.call(this,0)
}
var lis = oLis.trans();

/*************** 从数组中或者类数组中 随机删除几项 ,返回一个由删除像组成的新数组* ************/
Object.prototype.rm = function (n) {
    // this.length 和  n的情况

    if (n > this.length) {
        throw new Error('长度删除个数不合法');
    }
    //随机删除n项。splice
    let ary=[];
    let temp=[...this];
    for (var i = 0; i < n; i++) {
        let m = Math.round(Math.random() * (temp.length - 1));
        ary=ary.concat(temp.splice(m,1));
    }
    return ary
}
console.log([1,2,3,4,5,6,4].rm(2)); //随机删除了两项，返回值是删除的项组成的新数组



  /*****************************************************************************
   * 双for去重：每一轮用当前项和后变项进行对比，相等就把后面的项删除即可，会出现数组塌陷
   * 对象去重：利用对象的属性名不能重复的特点
   * indexOf..lastIndexOf：看当前的indexOf he lastIndexof 是否相等，相等说明不重复，
   **/
  Array.prototype.unique=function () {
      var temp=new Set(this);
      return [...temp];
  }


  /***** *********************    URL  地址上的参数   ************************************/
  String.prototype.getParame=function (key) {
        var str=this.split('?')[1];
        var ary=str.split('&');
        var obj={};
        ary.forEach((item)=>{
            var arr=item.split('=');
            obj[arr[0]]=arr[1];
        })
        if(key){
            return obj[key]
        }
        return obj;
  }
  var str= 'https://www.souyidai.com/p2p?id=3964660765015&a=12&b=23';
  console.log(str.getParame());
  console.log(str.getParame('id'));
  console.log(str.getParame('a'));
  console.log(str.getParame('b'));



