
$(function () {
    $('.pub').css({
        'display':'none'
    })
})
function pub() {

    $(".header button").removeClass('active')
    //--------
    $(".header button:first-child").addClass('active')
    //--------
    $('.main .list').removeClass('animated fadeOutRight fadeOutLeft fadeInRight fadeInLeft')
    //--------
    setTimeout(function () {
        $('.main .coll').css({
            'display':'none'
        })
    },1000)
    $('.main .coll').addClass('animated fadeOutRight')
    //--------
    $('.main .pub').css({
        'display':'block'
    }).addClass('animated fadeInLeft')

}
function coll() {
    $(".header button").removeClass('active')
    //--------
    $(".header button:last-child").addClass('active')
    //--------
    $('.main .list').removeClass('animated fadeOutRight fadeOutLeft fadeInRight fadeInLeft')
    //--------
    setTimeout(function () {
        $('.main .pub').css({
            'display':'none'
        })
    },1000)
    $('.main .pub').addClass('animated fadeOutLeft')
    //--------
    $('.main .coll').css({
        'display':'block'
    }).addClass('fadeInRight')
}