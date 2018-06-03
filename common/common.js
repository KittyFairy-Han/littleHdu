function tab(n) {
    switch (n) {
        case 1 :
            window.location.href = "http://localhost:63342/littleHdu/circle/Circle.html";
            break;
        case 2 :
            window.location.href = "http://localhost:63342/littleHdu/map/Map.html";
            break;
        case 3 :
            window.location.href = "http://localhost:63342/littleHdu/mine/Mine.html";
            break;
    }
    $(".footer .tab").removeClass("active")
    $(".footer .tab:nth-child("+n+")").addClass("active")
}
const HEIGHT = this.outerHeight;