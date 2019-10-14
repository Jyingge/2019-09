let date;
let xhr = new XMLHttpRequest();
xhr.open('get', './date.json', false);
xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
        date = JSON.parse(xhr.response);
    }
}
xhr.send();

let mainbox=document.querySelector('main');
function renderHtml(ary) {
    let str = '';
    ary.forEach(item => {
    let { num, price, title, img } = item;
        str += `<div class="mainbox">
    <div class="imgbox">
        <img src="${img}" alt="">
    </div>
    <div class="titilebox">${title}</div>
    <div class="pricebox">￥${price}</div>
    <div class="buy">
        <div class="left">购买</div>
        <div class="right">${num}人评价</div>
    </div>
</div>`;
    });
    mainbox.innerHTML=str;
}
renderHtml(date);

let priceBox=document.querySelector('.price');
let timeBox=document.querySelector('.time');
let authorBox=document.querySelector('.author');

timeBox.flag=1;
timeBox.onclick=function () {
    this.flag *=-1;
    date.sort((a,b)=>{
        return (a.time-b.time)*this.flag;
    })
    renderHtml(date)
}

priceBox.flag=1;
priceBox.onclick=function () {
    this.flag *=-1;
    date.sort((a,b)=>{
        return (a.price-b.price)*this.flag;
    })
    renderHtml(date)
}

authorBox.flag=1;
authorBox.onclick=function () {
    this.flag *=-1;
    date.sort((a,b)=>{
        return (a.num-b.num)*this.flag;
    })
    renderHtml(date)
}



