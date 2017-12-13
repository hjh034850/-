/**
 * Created by Administrator on 2017/12/10.
 */
requirejs.config({
    paths: {
        jquery: '../jquery-1.12.4'
    }
});
require(['jquery','dialog1'],function($,Dialog){
    $("#btn").on("click",function() {
        var dialog1 = new Dialog({
            width:800,

            title:"dwfwefw",
            content:"pianduan.html"
        });
        dialog1.open();
        $("body").on("click","#cancel",function(){
            dialog1.close();
        });

    });
    $("body").on("click","#confirm",function(){
        var dialog2 = new Dialog({
            width:200,
            height:100,
            title:"dawa",
            content:"piandaun2.html"
        });
        dialog2.open();
        $("body").on("click","#cancel2",function() {
            dialog2.close();
        });
    });
})