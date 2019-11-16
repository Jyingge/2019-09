

function loadBox() {
    let loadingBox = document.querySelector('.loadingBox');
    let progress = document.querySelector('.progress');//获取进度条
    let ary = ['phone-bg.jpg',
        'phone-listen.png', 'phone-key.png', 'phone-logo.png', 'phone-name.png', 'message-head1.png', 'message-head2.png', 'message-keyboard.png', 'cube-bg.jpg', 'cube-img1.png', 'cube-img2.png', 'cube-img3.png', 'cube-img4.png', 'cube-img5.png', 'cube-img6.png', 'cube-tip.png', 'menu-icon.png', 'concat-address.png', 'concat-icon1.png', 'concat-icon2.png', 'course-icon1.png', 'course-icon2.png', 'course-icon3.png', 'course-icon4.png', 'course-icon5.png', 'course-icon6.png', 'course-icon7.png', 'course-pocket.png', 'school-bot1.png', 'school-bot2.png', 'school-img1.jpg', 'school-img2.jpg', 'school-img3.jpg', 'teacher-title.png', 'zf-detailsReturn.png', 'zf-jobTable.png', 'zf-teacher1.png', 'zf-teacher2.png', 'zf-teacher3.jpg', 'zf-teacher4.png', 'zf-teacher5.png', 'zf-teacher6.png'];
    let n = 0;//记录已经加载过的图片张数
    ary.forEach((item) => {
        let img = new Image();//创造图片
        img.src = `./images/${item}`; //图片地址
        img.onload = function () {
            n++;
            let per = n / ary.length; //加载张数的百分比
            progress.style.width = per * 100 + '%';
            if (n === ary.length) {
                // 所有图片都加载完成，第一屏慢慢消失就行
                loadingBox.style.opacity = 0;
                loadingBox.addEventListener('transitionend', function (e) {
                    console.log(e);
                    if (e.propertyName === 'opacity') {
                        loadingBox.classList.add('hide');
                        console.log(11);
                        phoneBoxFn();//第一屏完成之后，第二屏才能执行显示
                        bell.play();
                    }
                }, false)
                // progress.addEventListener('transitionend',function (e) {
                //     // 阻止progress动效完成之后的冒泡(防止儿子的宽度变化，让父级一起跟着变化)
                //     e.stopPropagation();
                // },false)
            }

        }
    })
}
loadBox();

function phoneBoxFn() {
    let circle = document.querySelector('.phoneBox footer .circle'),
        phoneBox = document.querySelector('.phoneBox'),
        timeBox = document.querySelector('.phoneBox header h3'),
        footer = document.querySelector('.phoneBox footer'),
        overBox = document.querySelector('.phoneBox .overBox'),
        overBtn = overBox.querySelector('.overBtn');
    let clearFn=null; //为了清除时间定时器

    circle.addEventListener('touchend', function () {
        timeBox.classList.remove('hide'); //显示时间
        footer.classList.add('hide');
        overBox.classList.remove('bot');
        bell.pause();
        say.play();
        clearFn=changeTime();
    }, false)

    overBtn.ontouchend = function () {
        phoneBox.style.transform = 'translateY(110%)';
        chatBoxFn();
        say.pause();
        clearFn();
        bgm.play();
       /*  // 按照正常情况下，chatBoxFn 不应该加载这里，因为后面有个1000秒定时器，才感觉流畅
        phoneBox.addEventListener('transitionend', function (e) {
            console.log(e);
            //    上一屏幕完全消失之后，让他执行就可以了
            chatBoxFn();

        }, false) */
    }
    // 重置时间
    function changeTime() {
        let timer = setInterval(() => {
            // say.currentTime//当前播放的时间
            let t = parseInt(say.currentTime);
            timeBox.innerHTML = `00:${t < 10 ? '0' + t : t}`;
            if (say.ended) {
                clearInterval(timer);
                // 自动播放完成 也就是说完话的时候，我得点击挂机键
                phoneBox.style.transform = 'translateY(110%)'; 
                chatBoxFn(); //第三屏幕出现
                bgm.play();
            }
        }, 1000);
        return function () {
            clearTimeout(timer);
        }
    }


}

function chatBoxFn() {
    let olis = document.querySelectorAll('.chatBox ul li'),
        keyboard = document.querySelector('.chatBox .keyboard'),
        p = keyboard.querySelector('.keyboard p'),
        chatBtn = keyboard.querySelector('.chatBtn'),
        chatMsgBox = document.querySelector('.chatBox .chatMsgBox');
    let timer = null, n = 0;
    timer = setInterval(() => {
        olis[n].classList.remove('opa');
        n++;
        if (n == 3) {
            clearInterval(timer);
            setTimeout(() => {
                keyboard.classList.remove('bot');//让他出来带动画的那个小键盘

            }, 1000);
            setTimeout(() => {
                input();
            }, 1400);
        }
    }, 1000);

    function input() {
        var str = '现在的程序员发量都挺少的...';
        let n = 0, timer = null;
        timer = setInterval(() => {
            p.innerHTML += str[n];
            n++;
            if (n >= str.length) {
                clearInterval(timer);                 
                // 字输入完成之后，让button亮
                chatBtn.classList.remove('hide')
            }
        }, 100);
    }
    chatBtn.ontouchend = function () {
        p.innerHTML = '';//吧输入框清空
        keyboard.classList.add('bot');//让键盘滚下去
        olis[n].classList.remove('opa');
        n++;
        timer = setInterval(() => {
            olis[n].FFHUclassList.remove('opa');
            move();
            n++;
            if (n === olis.length) {
                // 所有对话都已经结束了的时候，要清空定时器
                clearInterval(timer);
            }
        }, 1000);
    }
    let t = 0;
    function move() {
        // 负责让整个盒子向上移动，每次移动出现的盒子的高度
        // 移动ul
        let h = olis[n].clientHeight;
        t += h;
        chatMsgBox.style.transform = `translateY(${-t}px)`;
    }
}
