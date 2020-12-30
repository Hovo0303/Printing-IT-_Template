$(window).resize(function(){
    if($(window).width() > 550){                  
        $(".dropping_menu").css("display","none")
    }
    $("#searching_input").hide();
    $(".language_drop_down").hide();
    $(".drop_down").hide();

})

// Click to scroll to top
$(".scroll_to_top").click(function(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
})
// Dasacucakner Drop Down
$(".dasyntacner").click(function(){
    $(".drop_down").toggle()
    $("#searching_input").hide()
    $(".language_drop_down").hide()
    $(".drop_down_arrow").toggle()
})


let dropped_down_dasyntac = 0
$(".dasyntacner_drop_menu").click(function(){
    if(!dropped_down_dasyntac){
        $(".drop_down_menu").slideDown("slow");
        $("#moving_arrow").css({transform:"rotate(180deg)"})
        dropped_down_dasyntac = 1
    }else{
        $(".drop_down_menu").slideUp("slow")
        $("#moving_arrow").css({transform:"rotate(360deg)"})
        dropped_down_dasyntac = 0
    }
})

// Search Input Apearing
$(".search_icon").click(function(){
     $("#searching_input").toggle()
    $(".language_drop_down").hide()
    $(".drop_down").hide()
    if($(".drop_down_arrow").css('display') != "block"){
        $(".drop_down_arrow").toggle()
    }

})
//Language Drop Down
$(".language_icon").click(function(){
    $(".language_drop_down").toggle()
    $(".drop_down").hide()
    $("#searching_input").hide()
    if($(".drop_down_arrow").css('display') != "block"){
        $(".drop_down_arrow").toggle()
    }
})
// Chosing Language
function changing_language(thisone){
    if($('.current_language').attr("src") != $(thisone).attr('src')){
        $('.current_language').attr("src",$(thisone).attr('src'))
    }
    $(".language_drop_down").toggle()
}


///////////////////////////////// QUESTION CHANGING ALGORITM//////////////////////////////
let count = 1
$(".answer_container").click(function(){
    $("#box" + (count - 1)).animate({
        left:"-100%"
    },"3s");
    // $("#dvd" + count).css("display","none");
    $("#box" + count).css("display","block");
    $("#box" + count).animate({
        top:"35%",
        opacity:"1"
    },"slow");
    count++;
})




$("#hajord_knopken").click(function(){
    $(".question_answer_container_laynakantuxt").show()
    $("#dvd").hide()
    $(".main_section").hide()
})

$("#div_klor").click(function(){
    $(".tpagrutyan_carayutyunner").show()
    $(".question_answer_container_laynakantuxt").hide()
    $("#dvd").hide()
    $(".main_section").hide()
})
$("#tvain_icon").click(function(){
    $(".main1").show()
    $(".tpagrutyan_carayutyunner").hide()
    $(".main_section").hide()
})
$(".laynakan_tuxt3").click(function(){
    $(".main_section").show()
    $("#box1").show()
    $(".question_answer_container_laynakantuxt").hide()
})



$("#ofset_icon").click(function(){
    $(".main2").show()
    $(".tpagrutyan_carayutyunner").hide()
})
$("#layna_icon").click(function(){
    $(".tpagrutyan_carayutyunner").hide()
    $(".main_section").hide()
    $(".main3").show()
})
$("#plastic_icon").click(function(){
    $(".tpagrutyan_carayutyunner").hide()
    $(".main_section").hide()
    $(".main4").show()
})
$("#govazd_icon").click(function(){ 
    $(".tpagrutyan_carayutyunner").hide()
    $(".main_section").hide()
    $(".main5").show()  
})
$("#uv_icon").click(function(){
    
    $(".tpagrutyan_carayutyunner").hide()
    $(".main_section").hide()  
    $(".main6").show() 
})
$("#artaqin_icon").click(function(){
    $(".tpagrutyan_carayutyunner").hide()
    $(".main_section").hide() 
    $(".main7").show() 
})
$("#dizayn_icon").click(function(){
    $(".tpagrutyan_carayutyunner").hide()
    $(".main_section").hide()
    $(".main8").show() 
})
$("#brend_icon").click(function(){
    $(".tpagrutyan_carayutyunner").hide()
    $(".main_section").hide()
    $(".main9").show() 
})

$("#metaqs_icon").click(function(){ 
    $(".tpagrutyan_carayutyunner").hide()
    $(".main_section").hide() 
    $(".main10").show() 
})
$("#photo_icon").click(function(){
    $(".tpagrutyan_carayutyunner").hide()
    $(".main_section").hide()
    $(".main11").show()   
})
$("#photo1").click(function(){
    $(".tpagrutyan_carayutyunner").hide()
    $(".main_section").hide()
    $(".main11").show()   
})
$("#krcqanshan_icon").click(function(){
    $(".tpagrutyan_carayutyunner").hide()
    $(".main_section").hide()
    $(".main12").show() 
})
$("#krcqanshan1").click(function(){
    $(".tpagrutyan_carayutyunner").hide()
    $(".main_section").hide() 
    $(".main12").show() 
})
$("#hush_icon").click(function(){
    $(".tpagrutyan_carayutyunner").hide()
    $(".main_section").hide()
    $(".main13").show() 
})
$("#hush1").click(function(){
    $(".tpagrutyan_carayutyunner").hide()
    $(".main_section").hide()
    $(".main13").show() 
})
$("#lazer_icon").click(function(){
    $(".tpagrutyan_carayutyunner").hide()
    $(".main_section").hide()
    $(".main14").show() 
})
$("#lazer1").click(function(){
    $(".tpagrutyan_carayutyunner").hide()
    $(".main_section").hide() 
    $(".main14").show() 
})
$("#avto_icon").click(function(){
    $(".tpagrutyan_carayutyunner").hide()
    $(".main_section").hide()
    $(".main15").show() 
})

//------------------------------------------------------
//                   patvirelu knopken
//------------------------------------------------------ -->

$('div[title="tit1"]').click(function(){
    $('.patvirel_div1').show()   
})
$('.fa-times').click(function(){ 
    $('.patvirel_div1').hide()  
})
//------------------------------------------------------
//                   Arxiv
//------------------------------------------------------ -->
$('.my').change(function() {
    if ($(this).val() != '') $(this).prev().text('Выбрано файлов: ' + $(this)[0].files.length);
    else $(this).prev().text('Выберите файлы');
});

//------------------------------------------------------
//                    Anhat ev kazmakerputyun
//------------------------------------------------------ -->
$(".anhat_div").click(function(){
    $(".question_answer_container_laynakantuxt").show()
    $(".main_section").hide()  
})

$(".kazmakerputyun_div").click(function(){
    $(".question_answer_container_laynakantuxt").show()
    $(".main_section").hide()    
})






if($(window).width() > 600){
    let count = 1
    $("#hajord_knopken").click(function(){
        $("#box" + (count - 1)).animate({
            left:"-50%"
        },"3s");
         $("#box" + count).css("display","block");
        $("#box" + count).animate({
            top:"35%",
            opacity:"1"
        },"slow");
        count++;
    })
}else{
    let count = 1
    $("#hajord_knopken").click(function(){
        $("#box" + (count - 1)).animate({
            left:"-100%"
        },"3s");
         $("#box" + count).css("display","block");
        $("#box" + count).animate({
            top:"20%",
            opacity:"1"
        },"slow");
        count++;
    })
}



if($(window).width() > 600){
    $(".answer_containe1").click(function(){
        $("#box" + (count - 2)).animate({
            left:"0%"
        },"3s");
        $("#box" + (count - 1)).animate({top:"55%",},"3s");
        $("#box" + (count - 1)).css("display","none");
        count--;
    })
}else{
    $(".answer_containe1").click(function(){
        $("#box" + (count - 2)).animate({
            left:"7%"
        },"3s");
        $("#box" + (count - 1)).animate({top:"55%",},"3s");
         $("#box" + (count - 1)).css("display","none");
        count--;
    })
}



if($(window).width() > 600){
    $(".laynakan_tuxt3").click(function(){
        $("#dvd").show()
        $("#box" + (count - 2)).animate({
            left:"0%"
        },"3s");
        $("#box" + (count - 1)).animate({top:"55%",},"3s");
        $("#box" + (count - 1)).css("display","none");
        count--;
    })
}else{
    $(".laynakan_tuxt3").click(function(){
        $("#box" + (count - 2)).animate({
            left:"7%"
        },"3s");
        $("#box" + (count - 1)).animate({top:"55%",},"3s");
         $("#box" + (count - 1)).css("display","none");
        
        count--;
    })
}




 //------------------------------------------------------
//                     hetadarci_knopkeq
//------------------------------------------------------ -->

 $(".tpagrutyan_carayutyunner_tesak4").click(function(){
   $(".tpagrutyan_carayutyunner").hide()
   $(".question_answer_container_laynakantuxt").show()
 })
 $("#naxord_knopka").click(function(){
    $(".main1").hide()
    $(".tpagrutyan_carayutyunner").show()
    $(".question_answer_container_laynakantuxt").hide()
  })
   $("#ofset_knopka").click(function(){
     $(".main2").hide()
     $(".tpagrutyan_carayutyunner").show()
     $(".question_answer_container_laynakantuxt").hide()
  })
  $("#layna_knopka").click(function(){
    $(".main3").hide()
    $(".tpagrutyan_carayutyunner").show()
    $(".question_answer_container_laynakantuxt").hide()
 })
 $("#plastik_knopka").click(function(){
    $(".main4").hide()
    $(".tpagrutyan_carayutyunner").show()
    $(".question_answer_container_laynakantuxt").hide()
 })
 $("#govazd_knopka_hetadarc").click(function(){
    $(".main5").hide()
    $(".tpagrutyan_carayutyunner").show()
    $(".question_answer_container_laynakantuxt").hide()
 })
 $("#uv_knopka_hetadarc").click(function(){
    $(".main6").hide()
    $(".tpagrutyan_carayutyunner").show()
    $(".question_answer_container_laynakantuxt").hide()
 })
 $("#artaqin_govazd_knopka_hetadarc").click(function(){
    $(".main7").hide()
    $(".tpagrutyan_carayutyunner").show()
    $(".question_answer_container_laynakantuxt").hide()
 })
 $("#dizayn_hetadarc_knopka").click(function(){
    $(".main8").hide()
    $(".tpagrutyan_carayutyunner").show()
    $(".question_answer_container_laynakantuxt").hide()
 })
 $("#brend_hetadarc_knopka").click(function(){
    $(".main9").hide()
    $(".tpagrutyan_carayutyunner").show()
    $(".question_answer_container_laynakantuxt").hide()
 })
 $("#metaqs_hetadarc_knopka").click(function(){
    $(".main10").hide()
    $(".tpagrutyan_carayutyunner").show()
    $(".question_answer_container_laynakantuxt").hide()
 })
 $("#photo_hetadarc_knopka").click(function(){
    $(".main11").hide()
    $(".tpagrutyan_carayutyunner").show()
    $(".question_answer_container_laynakantuxt").hide()
 })
 $("#krcqanshani_hetadarc_knopka").click(function(){
    $(".main12").hide()
    $(".tpagrutyan_carayutyunner").show()
    $(".question_answer_container_laynakantuxt").hide()
 })
 $("#hushanveri_hetadarc_knopka").click(function(){
    $(".main13").hide()
    $(".tpagrutyan_carayutyunner").show()
    $(".question_answer_container_laynakantuxt").hide()
 })
 $("#lazeri_hetadarc_knopka").click(function(){
    $(".main14").hide()
    $(".tpagrutyan_carayutyunner").show()
    $(".question_answer_container_laynakantuxt").hide()
 })
 $("#meqenaneri_hetadarc_knopka").click(function(){
    $(".main15").hide()
    $(".tpagrutyan_carayutyunner").show()
    $(".question_answer_container_laynakantuxt").hide()
 })



//Droping Hambourger div
let menu_droped = 0
$(".mobile_menu").click(function(){
    if(!menu_droped){
        $(".dropping_menu").slideDown("slow")
        menu_droped = 1
    }else{
        $(".dropping_menu").slideUp("slow")
        menu_droped = 0

    }
})








