/**
 * Created by Administrator on 2017/12/4.
 */
window.onload = function() {
    var oMain = document.getElementById("main");
    var aBox = oMain.getElementsByClassName("box");
    var oBoxW = aBox[0].offsetWidth;
    var cols = Math.floor(document.documentElement.clientWidth / oBoxW);
    var harr = [];
    oMain.style.cssText = "width:" + cols * oBoxW + "px;margin : 0 auto";
    for (var i = 0; i < aBox.length; i++) {
        if (i < cols) {
            harr.push(aBox[i].offsetHeight);
        } else {
            var minH = Math.min.apply(null, harr);
            var minhIndex = getminhIndex(harr, minH);
            aBox[i].style.position = "absolute";
            aBox[i].style.left = minhIndex * oBoxW + "px";
            aBox[i].style.top = minH + "px";
            harr[minhIndex] += aBox[i].offsetHeight;

        }
    }
    function getminhIndex(arr, val) {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] == val) {
                return i;
            }
        }
    }


}