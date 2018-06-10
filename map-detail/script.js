$(function () {
    //点赞
    var toggle = true
    var good = $(".good img")
    $(".good").click(function () {
        good.removeClass('animated pulse')
        if (toggle) {
            good.attr('src', '../common/image/support-active.png');
            good.addClass('animated pulse')
        }
        else {
            good.attr('src', '../common/image/support.png');
        }
        toggle = !toggle
    })
})

$(window).scroll(function(){
    console.log($(window).scrollTop)
    if($(window).scrollTop()>50){
        $(".header").css('position','fixed')
    }
    else {
        $(".header").css('position','static')
    }
})