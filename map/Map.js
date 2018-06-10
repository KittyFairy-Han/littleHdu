/**
 * Created by Ming on 2018/6/4.
 */


var map = new BMap.Map("bai-du-map");
// 创建地图实例
var point = new BMap.Point(120.35017542, 30.32054446);
// 创建点坐标
map.centerAndZoom(point, 14);
setTimeout(function () {
    map.setZoom(18);
}, 1000);  //2秒后放大到14级
map.enableScrollWheelZoom(true);
$("#bai-du-map").css({
    'position': 'fixed'
});



