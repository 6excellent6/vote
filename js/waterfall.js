$(".f-cte").waterfall({
    itemClass: ".u-xs",
    minColCount: 2,
    spacingHeight: 10,
    resizeable: true,
    ajaxCallback: function (success, end) {
        var data = {
            "data": [
                { "src": "er1.png" }, { "src": "er1.png" },
            ]
        };
        var str = "";
        var templ = '<div class="u-xs"><div class="u-dw"><img src="./images/player/er1.png" id="xs"><img src="./images/ic/icon-bh.png" id="bh"></div><div class="f-mes"><p>李四一</p><p>排名2</p></div><div class="f-vote"><div class="f-vt-l"><div class="f-sum">202220人气</div></div><button class="f-vt-l f-xz">投人气</button></div></div>'

        for (var i = 0; i < data.data.length; i++) {
            str += templ.replace("{{src}}", data.data[i].src);
        }
        $(str).appendTo($(".f-cte"));
        success();
        end();
    }
});