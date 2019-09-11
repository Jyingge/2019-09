//utils 这个JS提供一些我们常用的方法
var utils={
    getCss:function(ele,attr){
        //getCss(box,'width')//获取box的width属性值
        //getCss(box,'background')获取box的 background 属性值
        //喷血 rem em pt 含有这些的字符串 我们用parseFloat处理
        var reg=/^[+-]?\d+(\.\d+)?(px|rem|pt)?$/
        var obj=getComputedStyle(ele,null);
        var res=obj[attr];//有可能是100px
        if(reg.test(res)){
            return parseFloat(res)
        }
        return res;
    }
}
