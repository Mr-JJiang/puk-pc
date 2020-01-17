$(function () {

    $('.card').mouseenter(function () {
        // 鼠标移入时添加hover类
        $(this).addClass('active')
    }).mouseleave(function () {
        // 鼠标移出时移出hover类
        $(this).removeClass('active')
    })



    $("#main").scroll(function (e) {
        var oTop = document.body.scrollTop == 0 ? document.documentElement.scrollTop : document.body.scrollTop;
        console.log($("#banner").height())
        console.log($("#main").scrollTop())
        if ($("#main").scrollTop() >= $("#banner").height() - 1) {
            $(".jj_navbar").css({
                "background": "#d9bc6c",
                "transition": "all 2s",
            })
        } else {
            $(".jj_navbar").css({
                "background": "transparent"
            })

        }
    })



    $("#ios").mouseenter(function () {
        $(".ios").css({
            'display': 'block',
        })
    }).mouseleave(function () {
        $(".ios").css({
            'display': 'none',
        })
    })

    $("#anzhuo").mouseenter(function () {
        $(".anzhuo").css({
            'display': 'block',
        })
    }).mouseleave(function () {
        $(".anzhuo").css({
            'display': 'none',
        })
    })



})

// 设置参数方式
// new QRCode(document.getElementById("qrcode"), "https://nimdatest.jqk888.club/downloads/th.apk"); 


var qrcode = new QRCode("an_qrcode", {
    text: "https://nimdatest.jqk888.club/downloads/th.apk",
    width: 128,
    height: 128,
    colorDark : "#000000",
    colorLight : "#ffffff",
    correctLevel : QRCode.CorrectLevel.H
});


