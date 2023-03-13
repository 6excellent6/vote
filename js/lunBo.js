var index = 1;
function lunbo() {
    index++;
    //判断index是否大于3
    if (index > 3) {
        index = 1;
    }
    //获取img对象
    var img = document.getElementById("lunbo_img");
    img.src = "./images/banner-" + index + ".png";
}
//2.定义定时器
setInterval(lunbo, 3000);