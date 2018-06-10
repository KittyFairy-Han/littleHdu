function tab(n) {
    switch (n) {
        case 1 :
            window.location.href = "https://kittyfairy-han.github.io/littleHdu/circle/Circle.html";
            break;
        case 2 :
            window.location.href = "https://kittyfairy-han.github.io/littleHdu/map/Map.html";
            break;
        case 3 :
            window.location.href = "https://kittyfairy-han.github.io/littleHdu/mine/Mine.html";
            break;
        default :
            window.location.href = n;
    }
    $(".footer .tab").removeClass("active")
    $(".footer .tab:nth-child("+n+")").addClass("active")
}
// $(function () {
//     $('button').click(function () {
//         $('button').toggleClass('circle-wave')
//     })
// })
