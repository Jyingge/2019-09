var btn = document.getElementById('btn');
btn.onclick = function () {
    var h1 = document.getElementsByTagName('h1')[0];
    h1.style.background = 'blue';
    fetch('http://localhost:8080/add?type=pro', {
        method: 'post',
        credentials:'include',
        body:JSON.stringify({a:[100,200,900,559,66666]})
    }).then(data => data.json()).then(data => { 
        console.log(data) 
    })
    $.post('http://localhost:8080/add?type=pro',{
        a:12,b:13,c22:14
    })
    $.post('http://localhost:8080/add?type=pro',{
        a:12,b:13,c78:14
    })
    $.post('http://localhost:8080/add?type=pro',{
        a12:12,b11:13,c13:14
    })
    $.post('http://localhost:8080/add?type=pro',{
        a:12,b:13,c:14
    })
}
btn2.onclick = function () {
    fetch('http://localhost:8080/list?type=cookie',{
        method:'get'
    }).then(data => data.json()).then(data => { 
        console.log(data) 
    })
}