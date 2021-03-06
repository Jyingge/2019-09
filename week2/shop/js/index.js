(function () {
  let dataAry;
  // 首先把数据从后台获取到  然后渲染到页面上
  let xhr = new XMLHttpRequest(); //创造实例
  xhr.open('get', './date.json', false);
  xhr.onreadystatechange = function () {     //监听请求数据  获取数据
    if (xhr.status == 200 && xhr.readyState == 4) {
      dataAry = JSON.parse(xhr.response)
    }
  }
  xhr.send();              // 发送请求 
  console.log(dataAry);

  let mianBox = document.querySelector('main');
  // dateAry 就是从后台获取到的数据
  function renderHtml(ary) {
    let str = '';
    ary.forEach(item => {
      let { img, title, num, price } = item;
      str += `<div class="good_box">
              <div class="img_box">
                  <img src="${img}">
              </div>
              <div class="desc">${title}</div>
              <div class="price">￥${(price / 100).toFixed(2)}</div>
              <div class="bot_box">
                  <div class="left_box">选购</div>
                  <div class="right_box">${num}</div>
              </div>
              </div>`;
    });

    // str 就是拼接好的字符串

    mianBox.innerHTML = str;
  }
  renderHtml(dataAry);

  let timeBtn = document.querySelector('.timeBtn'),
    priceBtn = document.querySelector('.priceBtn'),
    commentBtn = document.querySelector('.commentBtn');

  timeBtn.flag = 1;
  timeBtn.onclick = function () {
    this.flag *= -1;
    dataAry.sort((a, b) => {
      return (a.time - b.time) * this.flag
    })
    renderHtml(dataAry);
  }

  priceBtn.flag = 1;
  priceBtn.onclick = function () {
    this.flag *= -1;
    dataAry.sort((a, b) => {
      return (a.price - b.price) * this.flag
    })
    renderHtml(dataAry);
  }
  commentBtn.flag = 1;
  commentBtn.onclick = function () {
    this.flag *= -1;
    dataAry.sort((a, b) => {
      return (a.num - b.num) * this.flag
    })
    renderHtml(dataAry);
  }
})();



/**************************   下面是用dom获取   **********************************
//getElement 系列获取到的元素集合是有映射关系的，当页面上曾江或者减少了对应的元素，该变量会跟着默认改变
// query系列获取到的元素没有这种映射关系，获取的时候是那些元素，那么对应的变量就永远是那些变量。
// let olis=[...document.getElementsByTagName('li')];


let dataAry ;
// 1、通过ajax获取数据
let xhr = new XMLHttpRequest();
xhr.open('get','./data.json',false);
xhr.onreadystatechange = function(){
    if(xhr.readyState==4 && xhr.status == 200){
        // 代表请求成功
        //xhr.response 是从后台获取到的 JSON 字符串；
        dataAry = JSON.parse(xhr.response)
    }
}
xhr.send();
console.log(dataAry);

//2、把获取到的数据渲染到页面上
let box = document.querySelector('main');
function renderHtml(dataAry) {
    let str = '';//用来拼接DOM结构字符串的；
    dataAry.forEach(item=>{
        let {img,num,price,title,time} = item;
        str += `<div class="good_box" data-time=${time}>
            <div class="img_box">
                <img src="${img}"
                    alt="">
            </div>
            <div class="desc">${title}</div>
            <div class="price" data-price=${price}>￥${(price/100).toFixed(2)}</div>
            <div class="bot_box">
                <div class="left_box">选购</div>
                <div class="right_box" data-num=${num}>评价数${num}</div>
            </div>
        </div>`
    })
    box.innerHTML = str;
}
renderHtml(dataAry);

// 3、操作DOM排序
let timeBtn = document.querySelector('.timeBtn'),
    priceBtn = document.querySelector('.priceBtn'),
    commentBtn = document.querySelector('.commentBtn');

let goodBox = document.getElementsByClassName('good_box');

// 元素.getAttribute('行内属性名')   获取行内属性用的
// 元素.setAttribute('行内属性名','对应的属性值')  设置行内属性用的

timeBtn.flag = 1;
timeBtn.onclick = function(){
    // 按照时间进行排序
    // 怎么获取时间？ 或每一个good_box 在这个元素上有一个 dataset的属性
    // dataset属性值里边只有 行内属性是 data-开头的键值对；
    this.flag *= -1;
    let ary = [...goodBox].sort((a,b)=>{
        return (a.dataset.time - b.dataset.time)*this.flag
    })
    // ary 是排好序的数组
    // 文档碎片
    // document.createDocumentFragment
    ary.forEach(item=>{
        box.appendChild(item);//把第一行的li元素添加到body的末尾
        // 若添加的页面上已经存在元素，那么只相当于改变一下元素的位置，不会增加新元素
    })
}
// price  和  num 排序自己实现； */
