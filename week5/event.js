function on(ele, type, f) {
    if (/^my/.test(type)) {
        // 如果不是原生事件，就自己创造一个事件池，
        ele[type] = ele[type] || [];
        ele[type].push(f);
    } else {
        type = type.replace(/^on/, '');
        ele.addEventListener(type, f, false);
        //addEventListener自带事件池 (原生事件自带事件池)
    }
}

function fire(ele, type, ...arg) {
    if (/^my/.test(type)) {
        // 如果不是原生事件，就自己创造一个事件池，然后还要吧事件池里的事件执行
        ele[type] = ele[type] || [];
        ele[type].forEach(item => {
            item.call(this, ...arg)
        });
    }
}

function off(ele, type, f) {
    if (/^my/.test(type)) {
        ele[type] = ele[type] || [];
        let n = ele[type].indexOf(f);
        if (n != -1) {
            ele[type].splice(n, 1);
        }
    } else {
        type = type.replace(/^on/, ''); //防止传入的参数带on
        ele.removeEventListener(type, f, false);
        //addEventListener自带事件池 (原生事件自带事件池)
    }
}