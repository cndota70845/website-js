window.onload=function(){
    var wrap = document.getElementById('wrap'),
        pic = document.getElementById('pic').getElementsByTagName("li"),
        list = document.getElementById('list').getElementsByTagName('li'),
        imgs = document.getElementById("pic").getElementsByTagName("img"),
        part = document.getElementById("container").getElementsByTagName("div"),
        leftButton = document.getElementsByClassName('wrap_left'),
        rightButton = document.getElementsByClassName('wrap_right'),
        index=0,
        timer=null;
    changeMargin();
    partHeight();
    window.onresize = function(){
        changeMargin();
        partHeight();
    };
    //左移图片
    leftButton[0].onclick = function(){
        var index = 0;
        for (var i = 0; i < pic.length; ++i) {
            if(pic[i].style.display == 'block'){
                index = i;
            }
        }
        index = index == 0?pic.length - 1:index - 1;
        changePic(index);
    }
    //右移图片
    rightButton[0].onclick = function(curIndex){
        var index = 0;
        for (var i = 0; i < pic.length; ++i) {
            if(pic[i].style.display == 'block'){
                index = i;
            }
        }
        index = index == pic.length - 1?0:index + 1;
        changePic(index);
    }
    //图片根据屏幕大小缩放
    function changeMargin(){
        var width = (document.body.clientWidth)*(620/1920);
        wrap.style.height = String(width)+'px';
        for(let i = 0; i < imgs.length; i++){
            imgs[i].height = width;
        }
    }
    function partHeight(){
        var width = document.body.clientWidth;
        var pWidth = (width * 0.9) / 5;
        var pHeight = pWidth * (127/110);
        for(let i = 0; i < part.length; i++){
            part[i].style.height = String(pHeight) + 'px';
        }
        document.getElementById("container").style.height = String(pHeight*2 + 60) + 'px';
    }
    // 定义并调用自动播放函数
    timer = setInterval(autoPlay, 2000);
    
    // 鼠标划过整个容器时停止自动播放
    wrap.onmouseover = function () {
        clearInterval(timer);
    }
    
    // 鼠标离开整个容器时继续播放至下一张
    wrap.onmouseout = function () {
        timer = setInterval(autoPlay, 2000);
    }
    // 遍历所有数字导航实现划过切换至对应的图片
    for (var i = 0; i < list.length; i++) {
        list[i].onmouseover = function () {
            clearInterval(timer);
            index = this.innerText - 1;
            changePic(index);
        };
    };
    
    function autoPlay () {
        if (++index >= pic.length) index = 0;
        changePic(index);
    }
    
    // 定义图片切换函数
    function changePic (curIndex) {
        for (var i = 0; i < pic.length; ++i) {
            pic[i].style.display = "none";
            list[i].className = "";
        }
        pic[curIndex].style.display = "block";
        list[curIndex].className = "on";
    }
};