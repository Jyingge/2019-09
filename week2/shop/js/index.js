(function () {
  // 首先把数据从后台获取到  然后渲染到页面上
  let xhr = new XMLHttpRequest(); //创造实例
  xhr.open('get', './date.json', false);
  xhr.onreadystatechange = function () {     //监听请求数据  获取数据
    if (xhr.status == 200 && xhr.readyState == 4) {
      let data = JSON.parse(xhr.response)
      console.log(data);
      dataAry = data;
    }
  }
  xhr.send()               // 发送请求


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
      <div class="price">${price.toFixed(2)}</div>
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

  let flag = 1;
  timeBtn.onclick = function () {
    flag *= -1;
    dataAry.sort((a, b) => {
      return (a.time - b.time) * flag
    })
    renderHtml(dataAry);
  }


  priceBtn.onclick = function () {
    flag *= -1;
    dataAry.sort((a, b) => {
      return (a.price - b.price) * flag
    })
    renderHtml(dataAry);
  }

  commentBtn.onclick = function () {
    flag *= -1;
    dataAry.sort((a, b) => {
      return (a.num - b.num) * flag
    })
    renderHtml(dataAry);
  }
})()
