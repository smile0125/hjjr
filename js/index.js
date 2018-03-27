var liList = document.querySelectorAll(".img-list li");
var imgList = document.querySelectorAll(".img-list li img");
var listOld = ['images/about-1.png', 'images/about-2.png', 'images/about-3.png', 'images/about-4.png'];
var listNew = ['images/about1-1.png', 'images/about2-1.png', 'images/about3-1.png', 'images/about4-1.png'];
var dtLiList = document.querySelectorAll(".news-ul-flex li");
var dtList = document.querySelectorAll(".news-ul-flex li img");
var dtImgOld = ['images/newdt-1.png', 'images/newdt-2.png', 'images/newdt-3.png', 'images/newdt-4.png'];
var dtImgNew = ['images/newdt-1-1.png', 'images/newdt-2-2.png', 'images/newdt-3-3.png', 'images/newdt-4-4.png'];

var item = document.querySelectorAll("nav .list_item");
for (var i = 0; i < item.length; i++) {
    item[i].onclick = function () {
        for (var j = 0; j < item.length; j++) {
            item[j].className="list_item";
            this.className="list_item active";
        }
    }
}

for (var i = 0; i < liList.length; i++) {
    (function (i) {
        liList[i].onmouseover = function () {
            imgList[i].src = listNew[i];
        };

        liList[i].onmouseout = function () {
            imgList[i].src = listOld[i];
        }

    })(i);
}

for (var i = 0; i < dtLiList.length; i++) {
    (function (i) {
        dtLiList[i].onmouseover = function () {
            dtList[i].src = dtImgNew[i];
        };

        dtLiList[i].onmouseout = function () {
            dtList[i].src = dtImgOld[i];
        }

    })(i);
}


