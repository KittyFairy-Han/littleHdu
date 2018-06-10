$(function () {
    setTimeout(function () {
        init();
        initNew()
    }, 1000)


    //收藏
    var toggle = true
    $(".item .good").click(function () {
        // console.log($(this).parents('.item'))
        var k = $(this).parents('.item').index();
        // console.log(k)
        $("section .item:nth-child(" + (k + 1) + ") .part4 .good .icon").removeClass('animated pulse')
        if (toggle) {
            $("section .item:nth-child(" + (k + 1) + ") .part4 .good .icon").attr('src', '../common/image/support-active.png');
            $("section .item:nth-child(" + (k + 1) + ") .part4 .good .icon").addClass('animated pulse')
        }
        else {
            $("section .item:nth-child(" + (k + 1) + ") .part4 .good .icon").attr('src', '../common/image/support.png');
        }
        toggle = !toggle
    })

    //点击图片
    // $('.item .pic').click(function () {
    //     var k = $(this).parents('.item').index();
    //     $(".item:nth-child(" + (k + 1) + ") .pic").removeClass('animated pulse')
    //     $(".item:nth-child(" + (k + 1) + ") .pic").addClass('animated pulse')
    // })

});

//瀑布流
function init() {
    const item = $(".hot  .item")
    var count_all = item.length;
    for (var i = 0; i < count_all; i++) {

        var COLS = 2;
        var cu_item = item.eq(i);
        var top_item = item.eq(i - COLS);


        //瀑布流
        var per_left = parseInt(item.outerWidth(true));
        if (i >= COLS) {
            var top_base = parseInt(item.outerWidth(true) - item.innerWidth());
            var top = parseInt(top_item.outerHeight(true)) + parseInt(top_item.css("top")) + top_base;
        }
        else {
            top_base = parseInt($(".hot ").css("padding-top")) + parseInt($(".hot ").css("margin-top"));
            top = top_base;
        }
        cu_item.css({
            "position": "absolute",
            "top": top + "px",
            "left": i % COLS * per_left + "px",
            'opacity': 1
        });


        //背景颜色
        switch (i % 4) {
            // case 0:
            //     cu_item.css({"background-image": "url('./image/bg1.png')"});
            //     break;
            // case 1:
            //     cu_item.css({"background-image": "url('./image/bg2.png')"});
            //     break;
            // case 2:
            //     cu_item.css({"background-image": "url('./image/bg3.png')"});
            //     break;
            // case 3:
            //     cu_item.css({"background-image": "url('./image/bg4.png')"});
            //     break;
            /*red 1 #ffa5a4 */
            /*red 2 #f9d8d8 */
            /*green 1 #2fd6ab */
            /*green 2 #b5f3e9 */
            /*yellow 1 #ffe246 */
            /*yellow 2 #fff899 */
            /*blue 1 #67bcff */
            /*blue 2 #c5e3fc */
            case 0:
                cu_item.css({"background-color": "#f9d8d8"});
                break;
            case 1:
                cu_item.css({"background-color": "#b5f3e9"});
                break;
            case 2:
                cu_item.css({"background-color": "#fff899"});
                break;
            case 3:
                cu_item.css({"background-color": "#c5e3fc"});
                break;
        }

    }

}

function initNew() {
    const container = $(".new")
    container.css('z-index', '100')
    const item = $(".new  .item")
    var count_all = item.length;
    for (var i = 0; i < count_all; i++) {

        var COLS = 2;
        var cu_item = item.eq(i);
        var top_item = item.eq(i - COLS);


        //瀑布流
        var per_left = parseInt(item.outerWidth(true));
        if (i >= COLS) {
            var top_base = parseInt(item.outerWidth(true) - item.innerWidth());
            var top = parseInt(top_item.outerHeight(true)) + parseInt(top_item.css("top")) + top_base;
        }
        else {
            top_base = parseInt($(".new ").css("padding-top")) + parseInt($(".new ").css("margin-top"));
            top = top_base;
        }
        cu_item.css({
            "position": "absolute",
            "top": top + "px",
            "left": i % COLS * per_left + "px",
            'opacity': 1
        });


        //背景颜色
        switch (i % 4) {
            // case 0:
            //     cu_item.css({"background-image": "url('./image/bg1.png')"});
            //     break;
            // case 1:
            //     cu_item.css({"background-image": "url('./image/bg2.png')"});
            //     break;
            // case 2:
            //     cu_item.css({"background-image": "url('./image/bg3.png')"});
            //     break;
            // case 3:
            //     cu_item.css({"background-image": "url('./image/bg4.png')"});
            //     break;
            case 0:
                cu_item.css({"background-color": "#f9d8d8"});
                break;
            case 1:
                cu_item.css({"background-color": "#b5f3e9"});
                break;
            case 2:
                cu_item.css({"background-color": "#fff899"});
                break;
            case 3:
                cu_item.css({"background-color": "#c5e3fc"});
                break;
        }

    }

}

// 切换菜单

function toggleSwitch(k) {
    var navbar = $(".header button")
    navbar.removeClass("active ");
    $(".header button:nth-child(" + (k + 1) + ")").addClass("active");

    $(".main section").removeClass('animated fadeInDown fadeInRight')
    if (k === 2) {
        $(".main section:nth-child(" + (k + 1) + ")").addClass('animated fadeInRight')
    } else {
        $(".main section:nth-child(" + (k + 1) + ")").addClass('animated fadeInDown')
    }

    setTimeout(function () {
        for (var i = 0; i < 3; i++) {
            var item = $(".main section:nth-child(" + (i + 1) + ")");
            if (i !== k) {
                item.css({
                    'display': 'none'
                })
            }
        }
    }, 1000)
    for (var i = 0; i < 3; i++) {
        var item = $(".main section:nth-child(" + (i + 1) + ")");
        if (i !== k) {
            item.css({
                'opacity': 0,
                'z-index': 0
            })
        }
        else {
            // console.log("oooook")
            item.css({
                'display': 'block',
                'opacity': 1,
                'z-index': 100
            })
        }
    }
}