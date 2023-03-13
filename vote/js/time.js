window.onload = function() {
    setInterval(function() {
        var nowTime = new Date();//获取当前时间
        //创建日期对象
        var endTime = new Date("2023-3-11 00:00:00");
        var seconds = parseInt((endTime.getTime() - nowTime.getTime()) / 1000);//两个时间点的时间差(秒)
        var d = parseInt(seconds / 3600 / 24);//天数
        var h = parseInt(seconds / 3600 % 24);//小时
        var m = parseInt(seconds / 60 % 60);//分钟
        var s = parseInt(seconds % 60);//秒
        document.querySelector(".time .tian").innerHTML = d;
        document.querySelector(".time .shi").innerHTML = h;
        document.querySelector(".time .fen").innerHTML = m;
        document.querySelector(".time .miao").innerHTML = s;
    }, 1000);
}