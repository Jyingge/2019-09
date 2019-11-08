let slideBox = document.querySelector("#slideBox");
function swiperInit() {
  var swiper = new Swiper('.swiper-container', {
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },
    loop: true,
    autoplay: true,
  });
}


function getData(url, cb) {
  var xhr = new XMLHttpRequest();
  xhr.open('get', url, true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && /200|304/.test(xhr.status)) {
      var data = JSON.parse(xhr.response);
      cb && cb(data);
    }
  }
  xhr.send();
}
// 获取banner数据
getData('./data/banner.json', function (data) {
  render(data);
  swiperInit();
});

function render(ary) {
  let str = '';
  ary.forEach(item => {
    let { img, title } = item;
    str += `
    <div class="swiper-slide">
        <img src="${img}" alt="">
        <p>${title}</p>
    </div>`;
  });
  slideBox.innerHTML = str;
}
// 获取列表数据
getData('./data/list.json', function (data) {
  console.log(data);
  renderList(data)
})
function renderList(data) {
  let str = '';
  data.forEach(item => {
    let { commentNum, img } = item;
    if (item.type == 0) {
      // 无图情况
      str += ` 
      <div class="list">
      <div class="textBox">
          <p>这是我的第二个标签</p>
          <div class="commentBox">
              <span class="icon_com"></span>
              <span>${commentNum}</span>
              <span>环球网</span>
          </div>
      </div>
  </div>`;
    }
    else {
      // 单图情况
      str += `
      <div class="list">
      <div class="textBox">
          <p>perfect介绍真的不想多说了</p>
          <div class="commentBox">
              <span class="icon_com"></span>
              <span>${commentNum}</span>
              <span>环球网</span>
          </div>
      </div>
      <div class="imgBox">
      ${img.map(a => {
        return `<img src="${a}" alt="">`
      }
      )}          
      </div>
  </div> `
    }
  });
  document.querySelector('.listBox').innerHTML += str;
}




window.ontouchmove = function () {
  let wH = document.documentElement.clientHeight || window.HTMLBodyElement.clientHeight;
  let srcH = document.documentElement.scrollTop;
  if (srcH > wH) {
    getData('./data/list.json', function (data) {
      console.log(data);
      renderList(data)
    })
  }
}