$(function () {
    getActivity(53);
    getPlayer(53)
});

//活动详情接口：
//https://www.sezbds.top/applet.php?map=applet_activity_details&id=53&suid=gusrelmay3&token=56BahSd7k2pDrvNL%2FKbUzQq5z4vPdjLKBig5vSfwZG0%3D
function getActivity(id) {
    let data = {
        'map': 'applet_api_activity_details',
        'id': id,
        'suid': 'gusrelmay3',
        'token': '56BahSd7k2pDrvNL%2FKbUzQq5z4vPdjLKBig5vSfwZG0%3D'
    };
    $.ajax({
        'url': "https://www.sezbds.top/applet.php",
        'type': "post",
        'data': data,
        'dataType': "json",
        success: function (ret) {
            // console.log(111);
            // console.log(ret.data);
            let rule = ret['data']['rule'];
            let prize = ret['data']['prize'];
            $('#tab-3').html(prize);
            $('#tab-4').html(rule);
        }
    })
}

//选手列表数据
// https://www.sezbds.top/applet.php?map=applet_api_vote_contestant_list&id=53&suid=gusrelmay3&token=56BahSd7k2pDrvNL%2FKbUzQq5z4vPdjLKBig5vSfwZG0%3D

function getPlayer(id) {
    let data = {
        'map': 'applet_api_vote_contestant_list',
        'id': id,
        'suid': 'gusrelmay3',
        'token': '56BahSd7k2pDrvNL%2FKbUzQq5z4vPdjLKBig5vSfwZG0%3D'
    };
    $.ajax({
        'url': "https://www.sezbds.top/applet.php",
        'type': "post",
        'data': data,
        'dataType': "json",
        success: function (ret) {
            // console.log(222);
            // console.log(ret.data);
            let roleList = deal_roles_html(ret.data);
            $('#f-cte').prepend(roleList);
        }
    })
}

/**
 * 处理选手列表数据
 * @param data
 * @returns {string}
 */
function deal_roles_html(data) {
    let html = '';
    // console.log(333);
    for (var i = 0; i < data.length; i++) {
        let temp = data[i];
        console.log(temp);
        html += '<div class="u-xs">';
        html += '<div class="u-dw">';
        html += '<img src="' + temp.cover + '" id="xs">';
        html += '<img src="./images/ic/icon-bh.png" id="bh">';
        html+='<p class="idcard">'+temp.id+'</p>'
        html +='</div>';
        html +='<div class="f-mes">';
        html+='<p>'+temp.name+'</p>';
        html+='<p>'+'排名1</p>';
        html+='</div>';
        html+='<div class="f-vote"><div class="f-vt-l"><div class="f-sum">'+temp.number+'人气</div></div><button class="f-vt-l f-xz">投人气</button></div></div>';

	}
    return html;
}