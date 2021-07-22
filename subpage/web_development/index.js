/*======================Global function for scrolling==========================*/
window.onload= function () {
    var scroll=document.getElementsByClassName("scroll")[0];
    var panel=document.getElementsByClassName("panel");

    var clientH=window.innerHeight;
    scroll.style.height=clientH+"px";
    for(var i=0;i<panel.length;i++){
        panel[i].style.height=clientH+"px";
    }
    /*navigation*/
    var inputC=document.getElementsByTagName("input");
    // For Browser
    var wheel= function (event) {
        var delta=0;
        if(!event)
            event=window.event;
        if(event.wheelDelta){
            delta=event.wheelDelta/120;
        }else if(event.detail){
            delta=-event.detail/3;
        }
        if(delta){
            handle(delta,inputC);
        }
        if(event.preventDefault)
            event.preventDefault();
            event.returnValue=false;
    };
    if(window.addEventListener){
        window.addEventListener('DOMMouseScroll',wheel,false);
    }
    window.onmousewheel=wheel;
};
function handle(delta,arr) {
    var num;
    for(var i=0;i<arr.length;i++){//get index
        if(arr[i].checked){
            num=i;
        }
    }
    //scroll up and down
    if(delta>0 && num>0){
        num--;
        arr[num].checked=true;
    }else if(delta<0 && num<5){
        num++;
        arr[num].checked=true;
    }
}


/*===================Page1: Slide Picutres Auto Display=====================*/
$(function(){  
    var bn_alp;  
    var Time = 10000;// set 10s ==10000ms
    var num = 1000;// it needs 1s to display next picture when click
    var page = 0; 
    var len = $( ".bn-alp .box li" ).length;// get all pictures

    $( ".bn-alp .box li" ).each(function(){  
        $(this).css( "opacity", 0 );  
        $(this).css( "background-image","url(" + $(this).find('img.bg').attr('src') + ")");  
        $( ".bn-alp .i" ).append('<i></i>');  
    });

    $( ".bn-alp .box li:first" ).css( "opacity", 1 ); // setup default first picture's transparency as 1  
    $( ".bn-alp .i i" ).eq(0).addClass("on");  

    function fun()  
    {  
        $( ".bn-alp .i i" ).eq(page).addClass("on").siblings('i').removeClass( "on" );     // change the small white point  
        $( ".bn-alp .box li" ).eq(page).addClass("on").animate({"opacity":1},num).siblings('li').removeClass( "on" ).animate({"opacity":0},num);// change picture  
    }  
/* define the animation*/
    function run() 
    {  
        if( !$(".bn-alp .box li" ).is( ":animated" ))// check li if animated or not  
        {  
        if( page == len - 1 )
        {  
            page = 0;
            fun();  
        } else {
            page++;  
            fun();  
        }  
        }  
    }  

    $(".bn-alp .i i").click( function()
    {  
        clearInterval( bn_alp );

        var index = $( ".bn-alp .i i" ).index( this );
        page = index;
        fun();  

    }); 

    $( ".bn-alp" ).hover(function()
    {  
        clearInterval( bn_alp );  
    },function()
    {  
        bn_alp = setInterval( run, Time );  
    }).trigger( "mouseleave" );  
});



