$(function () {
    //画爱心
    const COUNT = randomNumber(8, 20) //爱心个数 8-20之间
    removeHeart(COUNT)
    drawHeart(COUNT);
    $('.main .drop-down .switch').click(function () {
        removeHeart(COUNT / 2);
        drawHeart(COUNT / 2);
    })
    //控制搜索框 和搜索结果
    var toggle = true
    var drop = true
    $('.main .search button.for-search').click(function () {
        if (toggle) {
            $('.main .search').css('box-shadow', '0 0 10 grey');
            $('.main .search input').css({
                'flex': '1',
                'padding-left': '5%'
            })
            toggle = !toggle
        }
    })
    $('.main .mask').click(function () {
        console.log('mask click')
        if (!toggle) {
            $('.main .search').css('box-shadow', 'none');
            $('.main .search input').css({
                'flex': '0',
                'padding-left': '0'
            })
            toggle = !toggle
        }
        $('.main .result-list').css({
            'display': 'none'
        })
    })
    //控制 drop down 开关
    $('.main .search button.for-drop').click(function () {
        $('.main .drop-down').removeClass('animated fadeInDown fadeOutUp')
        if (drop) {
            $('.main .search button img').css({
                'transform': 'rotateZ(180deg)'
            })
            $('.main .drop-down').css({
                'display': 'flex'
            })
            // $('.main .drop-down').removeClass('animated fadeInUp')
            $('.main .drop-down').addClass('animated fadeInDown')
        }
        else {
            $('.main .search button img').css({
                'transform': 'rotateZ(0)'
            })
            // $('.main .drop-down').removeClass('animated fadeInDown')
            $('.main .drop-down').addClass('animated fadeOutUp')
            setTimeout(function () {
                $('.main .drop-down').css({
                    'display': 'none'
                })
            }, 1000)

        }
        drop = !drop
    })
    //控制下拉列表
    $('.main .search input').focus(function () {
        console.log("change")
        $('.main .result-list').css({
            'display': 'block'
        })
    })
//    跳转到活动详情
    $('.main .result-list .item').click(function (event) {
        event.stopPropagation();
        console.log("item click")
        tab('../map-detail/MapDetail.html')
    })
});


//❤ ❤ ❤ ❤ ❤ ❤
function drawHeart(COUNT) {
    const H = $('#bai-du-map').height();  //地图高度
    const DUR = 4; //动画周期
    const container = $('#map .main .mask'); //爱心父容器
    console.log(COUNT)
    const heart = '<img class="icon flash animatedinfinite" src="img/heart.png" >'; //爱心
//画爱心
    for (var i = 1; i < COUNT; i++) {
        container.append(heart)
    }
//定位置 动画延迟
    for (var i = 1; i < COUNT; i++) {
        //位置 动画延迟
        var rp = randomPostion(H);
        var rd = randomDelay(DUR);
        $('.mask img.flash:nth-child(' + i + ')').css({
            'top': rp.top,
            'left': rp.left,
            'animation-delay': rd,
            'animation-duration': DUR + 's'
        })

    }
//    添加事件监听
    $('.mask img.flash').click(function () {
        tab('../map-detail/MapDetail.html')
    })
}


function removeHeart() {
    $('.mask img.flash').remove()
}

//
function showList() {

}

//utils
function randomPostion(H) {
    var top = Math.random() * H + 'px';
    var left = Math.random() * H + 'px';
    return position = {
        top: top,
        left: left
    }
}

function randomDelay(DUR) {
    // console.log(Math.random() * DUR + 's')
    return delay = Math.random() * DUR + 's'
}

function randomNumber(less, most) {
    return less + Math.random() * (most - less)
}