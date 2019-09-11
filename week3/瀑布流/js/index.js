var oLis = document.querySelectorAll('.box>li');
let flag = false;//数据已经请求完成 true代表正在请求
let { getCss, setCss, winH, offset } = utils;
/* function init() {
    [...oLis].forEach(item => item.innerHTML = '')
}
init(); */
// 首先要获取数据，
function getDate() {
    flag = true;
    // 获取数据的方法 阿贾克斯
    var xhr = new XMLHttpRequest();//创造实例
    xhr.open('get', './data.json', true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && /200|304/.test(xhr.status)) {
            // 这步代表请求成功
            flag = false
            console.log(xhr.response);
            let data = JSON.parse(xhr.response);
            // JSON.stringify();
            // console.log(data);
            renderHtml(data);//把后台给的数据渲染了
            loadAll();//这步为了能加载出首屏图片
        }
    }
    xhr.send();
}
getDate();

// 然后渲染数据
function renderHtml(ary) {
    // ary存储的是每一条数据，那么这些数据应该渲染到那五列中。
    ary.forEach((item, index) => {
        // item代表了每一条要去显示的数据
        console.log(item);
        let { pic, author, desc, height } = item;
        let str = `
        
        <div class="img">
            <img style="height: ${height}px" src="../瀑布流/img/default.jpg" realSrc="${pic}" alt="">
        </div>
        <p class="desc">${desc}</p>
        <div class="author">${author}</div>
      `;
        // 字符串凭借好了之后怎么向结构里增加 1.挨个添加
        // let n=index%5;// 0 1 2 3 4
        // oLis[n].innerHTML+=str;
        // 2.每一次都想那个最矮的li添加
        let temp = getMinLi();
        let div = document.createElement('div');
        div.className = 'pic_box';
        // temp.innerHTML += str;
        div.innerHTML = str;
         temp.appendChild(div);
    })
}

// 挑选最矮的li
function getMinLi() {
    // 怎么从五个li中挑选出最低的  clientHeight
    var ary = [...oLis].sort((a, b) => {
        return a.clientHeight - b.clientHeight
    })
    console.log(ary);
    return ary[0]
}

// 紧接着，滚动加载新数据
function loadMore() {
    if (flag) return;//flag 为true的时候，代表 数据正在加载，这是我们不应该再去加载新数据
    //什么时候加载新数据？（当最短的照片漏出来后加载新数据）怎么加载新数据？（） 
    let scrT = document.documentElement.scrollTop;//卷去的高度    
    let wH = winH();//一屏幕的高度
    let temp = getMinLi();//获取最低的li，怎么拿到底边的高度距离
    let tarT = offset(temp).t + temp.clientHeight;//元素到body的距离，加上元素本身的高度，就是元素底边到body的距离
    if (tarT < scrT + wH) {
        // 底边漏出来之后，加载新数据
        getDate();
    }
}
window.onscroll = function () {
    loadMore();
    loadAll();
}

function lodImg(ele) {
    if (ele.loaded) return;
    let scrT = document.documentElement.scrollTop;
    let wH = winH();
    let tarT = offset(ele).t;
    if (tarT < scrT + wH) {
        // 图片加载更换新图地址
        let realSrc = ele.getAttribute('realSrc');
        let temp = new Image();
        temp.src = realSrc;
        temp.onload = function () {
            ele.src = realSrc;
            temp = null;
            ele.loaded = true;//看看她是否加载过了
            fadeIn(ele);
        }
    }
}

function loadAll() {
    // 获取所有的Img，然后挨个执行loadImg();
    let imgs = document.querySelectorAll('.box img');
    [...imgs].forEach(item => lodImg(item));
}

function fadeIn(ele) {
    ele.style.opacity = 0;
    let a = 0;
    ele.timer = setInterval(() => {
        a += 0.1;
        if (a > 1) {
            a = 1;
            clearInterval(ele.timer)
        }
        ele.style.opacity = a;
    }, 20);
}