/**
 * Created by Administrator on 2017/12/10.
 */
requirejs.config({
    paths: {
        jquery: '../jquery-1.12.4'
    }
});
define(['jquery'],function($){
    return {
        open:function(arg){
            this.defaultValue = {
                width:300,
                height:200
            }
            /*var html = '<div class="mask">'
            +'<div class="container">'
                +'<div class="title">'
                  +'<h2>aaaaa</h2>'
                  +'<span class="close">×</span>'
                +'</div>'
                +'<div class="content">fwfwfwfw </div>'
                +'</div>'
                +'</div>';*/
            var value = $.extend(this.defaultValue,arg);
            var $mask = $( '<div class="mask"></div>');
            var $container = $('<div class="container"></div>');
            var $title = $('<div class="title"></div>');
            var $H2 = $('<h2></h2>');
            var $close = $('<span class="close"></span>');
            var $content = $('<div class="content"></div>');
            $(".container").appendTo($mask).append($title).append($content).css({
                width:value.width,
                height:value.height,
                marginLeft:-value.width/2,
                marginTop:-value.height/2
            });
            $title.append($H2).append($close).html(value.title);
            $content.load(value.content);
            $("body").append($mask);


            /*$(".title h2").html(arg.title);
            $(".content").html(arg.content)*/
        }
    }
})