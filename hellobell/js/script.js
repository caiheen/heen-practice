$(document).ready(function(){

    //header 효과시작

    // $(".main_menu").mouseover(function(){
    //     $('header nav').css(
    //         "background", "#fff",
    //         "transition", "0.3s",
    //     );
    //     $('.main_menu li a').css(
    //         "color", "#000",
    //         "transition", "0.3s",
    //     );
    // });

    // $(".main_menu").mouseleave(function(){
    //     $('header nav').css(
    //         "background", "transparent",
    //         "transition", "0.3s",
    //     );
    //     $('.main_menu li a').css(
    //         "color", "#fff",
    //         "transition", "0.3s",
    //     );

    // });


    $(document).scroll(function(){
        st = $(this).scrollTop();
        console.log(st);

        if( st > 50){
            $('header nav').css({
                "background":"#fff",
                "transition":"0.3s",
            });
            $('.main_menu li a').css({
                "color":"#000",
            });
        }
        if( st < 49){
            $('header nav').css({
                "background":"transparent",
                "transition":"0.3s",
            });
            $('.main_menu li a').css({
                "color":"#fff",
            });
        }
        //header 효과시작 끝

        //sub_menu 효과시작
        if( st > 320){
            $(".sub_menu").addClass("fixd");
        }
        if( st < 320){
            $(".sub_menu").removeClass("fixd");
        }
        if( st > 400){
            $(".quick").addClass("fixd");
        }
        if( st < 400){
            $(".quick").removeClass("fixd");
        }

    });

    // 중요사업 효과
    $(".L_box").mouseover(function(){
        $(".L_box").addClass("long");
        $(".R_box").addClass("short");
    });
    $(".L_box").mouseleave(function(){
        $(".L_box").removeClass("long");
        $(".R_box").removeClass("short");
    });

    $(".R_box").mouseover(function(){
        $(".R_box").addClass("long");
        $(".L_box").addClass("short");
    });
    $(".R_box").mouseleave(function(){
        $(".R_box").removeClass("long");
        $(".L_box").removeClass("short");
    });

    

    $('#fullpage').fullpage({
        navigation: true,
        responsiveWidth: 700,
        anchors: ['home', 'about-us', 'contact', 'conserting', 'footer'],
        parallax: true,
        css3:false,
        onLeave: function(origin, destination, direction){
            console.log("Leaving section" + origin.index);
        },
    });

    

    
});
