/*======================for all sessions: scroll to navigation==========================*/
window.onload= function () {
    var scroll=document.getElementsByClassName("scroll")[0];
    var panel=document.getElementsByClassName("panel");

    var clientH=window.innerHeight;
    scroll.style.height=clientH+"px";
    for(var i=0;i<panel.length;i++){
        panel[i].style.height=clientH+"px";
    }
    /*scroll to navigation*/
    var inputC=document.getElementsByTagName("input");
    var wheel= function (event) {
        var delta=0;
        if(!event)//for ie
            event=window.event;
        if(event.wheelDelta){//ie,opera
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
    for(var i=0;i<arr.length;i++){//get the checked element index
        if(arr[i].checked){
            num=i;
        }
    }
    if(delta>0 && num>0){//scroll up
        num--;
        arr[num].checked=true;
    }else if(delta<0 && num<5){//scrool down
        num++;
        arr[num].checked=true;
    }
}


/*===================session 1: auto slide picutre=====================*/
$(function(){  
    var bn_alp;  
    var Time = 1234;//
    var num = 1234;//
    var page = 0; 
    var len = $( ".bn-alp .box li" ).length;// get the number of pictures  

    $( ".bn-alp .box li" ).each(function(){  
        $(this).css( "opacity", 0 );  
        $(this).css( "background-image","url(" + $(this).find('img.bg').attr('src') + ")");
        $( ".bn-alp .i" ).append('<i></i>');  
    });   // setup all picuters' transparency as 0  

    $( ".bn-alp .box li:first" ).css( "opacity", 1 ); // setup default first picture's transparency as 1  
    $( ".bn-alp .i i" ).eq(0).addClass("on");  

    function fun()  
    {  
        $( ".bn-alp .i i" ).eq(page).addClass("on").siblings('i').removeClass( "on" );     // change the small white point  
        $( ".bn-alp .box li" ).eq(page).addClass("on").animate({"opacity":1},num).siblings('li').removeClass( "on" ).animate({"opacity":0},num);// change picture  
    }  

    function run() 
    {  
        if( !$(".bn-alp .box li" ).is( ":animated" ))// check li if animated or not  
        {  
        if( page === len - 1 )// when transit to the last picture
        {  
            page = 0;  // set page = 0 and start play again from first  
            fun();  
        } else {// continue to the next  
            page++;  
            fun();  
        }  
        }  
    }  

    $(".bn-alp .i i").click( function()// click the small point to change picture 
    {  
        clearInterval( bn_alp );//when click the small point, old animation will be clear and start a new one。  
        //if( !$( ".bn-alp .box li" ).is( ":animated" ) )  
        //{  

        // get the position of small point
        page = $(".bn-alp .i i").index(this);// sync to page
        fun();  
        //}  
    }); 

    $( ".bn-alp" ).hover(function()// when put mouse on picture, clear animation  
    {  
        clearInterval( bn_alp );  
    },function()// when move out mouse, play animation again  
    {  
        bn_alp = setInterval( run, Time );  
    }).trigger( "mouseleave" );  
}); 




