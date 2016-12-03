var oBtn = document.getElementById('btn1');
var oNav = document.getElementById('nav');
var oClose = document.getElementById('close');
var oHeader2 = document.getElementById('header2');
var oHeader3 = document.getElementById('header3');
var oHeader4 = document.getElementById('header4');

oBtn.onclick = function () {
    oNav.style.display = 'block';
};
oClose.onclick = function () {
    oNav.style.display = 'none';
};
oHeader2.onclick = function () {
    oNav.style.display = 'none';
};
oHeader3.onclick = function () {
    oNav.style.display = 'none';
};
oHeader4.onclick = function () {
    oNav.style.display = 'none';
};
//
var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    slidesPerView: 6,
    centeredSlides: true,
    paginationClickable: true,
    spaceBetween: 30
});





