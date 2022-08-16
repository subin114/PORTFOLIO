$(function(){
    function mobile1(){
        $(".mobile > .mobile_box > ul").stop().animate({marginTop:-522},function(){
        $(".mobile > .mobile_box > ul > li:first").appendTo(".mobile > .mobile_box > ul")
        $(".mobile > .mobile_box > ul").css({marginTop:0})
        })
    }
    setInterval(mobile1,3000);

    function mobile2(){
        $(".pofomobile > .pofomobile_box > ul").stop().animate({marginTop:-522},function(){
        $(".pofomobile > .pofomobile_box > ul > li:first").appendTo(".pofomobile > .pofomobile_box > ul")
        $(".pofomobile > .pofomobile_box > ul").css({marginTop:0})
        })
    }
    setInterval(mobile2,3000);
})