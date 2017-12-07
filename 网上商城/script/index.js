/**
 * Created by Administrator on 2017/12/3.
 */

/*文本框*/
$("#inputSearch").on("focus",function () {
    if(this.value == this.defaultValue){
        this.value = "";
    }
}).on("blur",function(){
    if(this.value == ""){
        this.value = this.defaultValue;
    }
})
/*文本框结束*/


//换肤
$("#skin li").on("click",function(){
    $(this).addClass("selected").siblings().removeClass("selected");
    $("#cssfile").attr("href","styles/skin/"+ this.id +".css");
})
//换肤结束

//首页列表
$(".nav li").on("mouseover",function(){
    $(this).find(".jnNav").show().end().siblings().find(".jnNav").hide();
}).on("mouseout",function(){
    $(this).find(".jnNav").hide();
})
//首页列表结束


//轮播图
var nextIdx = 0;
var timer
$("#lunbo-box a").on("mouseover",function(){
    $(this).addClass("chos").siblings().removeClass("chos");
    $("#jnImageroll img").eq($(this).index()).fadeIn().siblings().fadeOut();
    nextIdx = $(this).index();
})
$("#lunbo-box a").eq(0).trigger("mouseover");

run();
function run(){
    timer = setInterval(function(){
        nextIdx++;
        if(nextIdx == $("#jnImageroll img").length){
            nextIdx = 0;
        }
        $("#lunbo-box a").eq(nextIdx).triggerHandler("mouseover");
    },1500);
}
$("#jnImageroll").on("mouseover",function(){
    clearInterval(timer);
}).on("mouseout",function(){
    run();
})
//轮播图结束

//a标签title
var x = 10,y =20;
$("#jnNoticeInfo a").on("mouseover",function(e){
    this.myTitle = this.title;
    this.title = "";
    var tooTip = "<div id='aText'>"+ this.myTitle +"</div>"
    $("body").append(tooTip);
    $("#aText").css({
        "position":"absolute",
        "border":"1px solid black",
        "background":"#ccc",
        "left":(e.pageX + x) + "px",
        "top":(e.pageY + y) + "px",
        "width":0 ,
        "height":0
    }).animate({
        width:100,
        height:20,
    });
}).on("mouseout",function(){
    this.title = this.myTitle;
    $("#aText").remove();
}).on("mousemove",function(e){
    $("#aText").css({
        "position":"absolute",
        "left":(e.pageX + x) + "px",
        "top":(e.pageY + y) + "px"
    });
})


//a标签title结束

//滑动广告
$("#jnBrandTab li").on("click",function(){
    $(this).addClass("chos").siblings().removeClass("chos");
    var $index = $(this).index();
    $("#jnBrandList").animate({left:-$index * 780});
})
$("#jnBrandTab li").eq(0).trigger("click");
//滑动广告结束




