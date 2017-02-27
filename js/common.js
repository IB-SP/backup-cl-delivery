var respo;
/*-Java-Void*/
//$.noConflict();
$(document).delegate(".myAnchor", "click", function(event) {
    event.preventDefault();
    $("a");
});
$("#cart-demo").owlCarousel({

    navigation : true, // Show next and prev buttons
    navigation: true,
    navigationText: [
        "<i class='fa fa-angle-left fa-3x'></i>",
        "<i class='fa fa-angle-right fa-3x'></i>"
    ],
    items: 1,
    itemsCustom: false,
    itemsDesktop: [1199, 1],
    itemsDesktopSmall: [980, 1],
    itemsTablet: [768, 2],
    itemsTabletSmall: [767, 1],
    itemsMobile: [479, 1],
    singleItem: false,
    itemsScaleUp: false,
    navigation: true,
    rewindNav: false,
    pagination: false


});
$(".similar_product_dropdown_link").click(function(){
  $(".crousel_similar_products").toggle(500);
});

$(".content_checkout_card.face.front").click(function(){
  $(this).css('z-index' , '0');
  $(".card").css('transform' , 'rotateY(180deg)');
});
$(".cancel").click(function(){
     $(".card").css('transform' , 'rotateY(0deg)');
});


/*End-Java-Void*/

$(".jan,.feb,.mar,.apr,.may,.jun,.jul,.aug,.sep,.oct,.nov,.dec").click(function() {
    $myClass = $(this).text();
    $("button span.select").text($myClass);
});
$(".year1,.year2,.year3,.year4,.year5").click(function() {
    $myClass = $(this).text();
    $("button span.select1").text($myClass);
	$(".change_year").text($myClass);
});

/*tool-tip-start*/
$('.tool_tip').click(function(){
  $('.tool_tip_vailue').toggle(500);
});
/*tool-tip-end*/
/*sign_up_validation*/
$(".user_name_signup").focus(function() {
    $('.user_name_signup').css('border-color', '#c5c5c5');
    $('.error_name').hide();
});
$(".user_name_signup").blur(function() {
  f_value= $('.user_name_signup').val().length;
  if ((f_value < 3) || ($.trim($(f_value).val()).length < 2)) {
      $('.user_name_signup').css('border-color', '#e80a0a');
      $('.error_name').show();
  }
  else {
    $('.user_name_signup').css('border-color', '#c5c5c5');
    $('.error_name').hide();
  }
});
$(".email_sign_up").focus(function() {
  $('.email_sign_up').css('border-color', '#c5c5c5');
  $('.error_email').hide();
});
$(".email_sign_up").blur(function() {
  var email = $('.email_sign_up').val();
  var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
  if (!emailReg.test(email) || email === '') {
      $('.email_sign_up').css('border-color', '#e80a0a');
      $('.email_signup').show();
  }
  else {
    $('.email_sign_up').css('border-color', '#c5c5c5');
    $('.email_signup').hide();
  }
});
$(".sign_up_password").focus(function() {
    $('.sign_up_password').css('border-color', '#c5c5c5');
    $('.valid_password').hide();
});
$(".sign_up_password").blur(function() {
  var password_sign = $('.sign_up_password').val();
  var password_signReg = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{6,20})/;
  if (!password_signReg.test(password_sign) || password_sign === '') {
      $('.sign_up_password').css('border-color', '#e80a0a');
      $('.valid_password').show();
  }
  else {
    $('.sign_up_password').css('border-color', '#c5c5c5');
    $('.valid_password').hide();
  }
});

function sign_up_error() {

    if (($('.user_name_signup').val().length < 3) || ($.trim($(".user_name_signup").val()).length < 2)) {
        $('.user_name_signup').css('border-color', '#e80a0a');
        $('.error_name').show();

    }
    var email = $('.email_sign_up').val();
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    if (!emailReg.test(email) || email === '') {
        $('.email_sign_up').css('border-color', '#e80a0a');
        $('.email_signup').show();
    }
    var password_sign = $('.sign_up_password').val();
    var password_signReg = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{6,20})/;
    if (!password_signReg.test(password_sign) || password_sign === '') {
        $('.sign_up_password').css('border-color', '#e80a0a');
        $('.valid_password').show();
    }
  }
/*login_validation_start*/
$(".email_phone_login").focus(function() {
    $('.email_phone_login').css('border-color', '#c5c5c5');
    $('.error_email_phone').hide();
});
$(".email_phone_login").blur(function() {
  f_value01= $('.email_phone_login').val().length;
  if ((f_value01 < 3) || ($.trim($(f_value01).val()).length < 2)) {
      $('.email_phone_login').css('border-color', '#e80a0a');
      $('.error_email_phone').show();
  }
});
$(".login_password").focus(function() {
    $('.login_password').css('border-color', '#c5c5c5');
    $('.login_password_error').hide();
});
$(".login_password").blur(function() {
  var password_login = $('.login_password').val();
  var password_loginReg = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{6,20})/;
  if (!password_loginReg.test(password_login) || password_login === '') {
      $('.login_password').css('border-color', '#e80a0a');
      $('.login_password_error').show();
  }
  else {
    $('.login_password').css('border-color', '#c5c5c5');
    $('.login_password_error').hide();
  }
});
/*login_validation_end*/
/*sign_up_validation*/

//form fill on click checkbox
function checkboxvalidation() {
    if ($(".check_input").is(':checked')) {
        $(".username02").val($(".username01").val());
        $(".useremail02").val($(".useremail01").val());
        $(".message02").val($(".message01").val());

    } else {
        $(".username02").val($('').val());
        $(".useremail02").val($('').val());
        $(".message02").val($('').val());


    }
}
$(".check_input").click(function() {
    checkboxvalidation();
});

//formvalidetion_end


/*space card number*/

if ($(".my_profile").length) {

    $m_profile = $(".bottom_content .my_profile").height();
    //console.log($m_profile);
    $("ul.payment_options").css("height", $m_profile);
    $("ul.order_list").css("height", $m_profile);
}


$('.amount_card .addfund_walet_add').keypress(function() {
    $(this).val(function(i, v) {
        var v = v.replace(/[^\d]/g, '').match(/.{1,4}/g);
        return v ? v.join(' ') : '';
    });
});
$('.card_no').keypress(function() {
    $(this).val(function(i, v) {
        var v = v.replace(/[^\d]/g, '').match(/.{1,4}/g);
        return v ? v.join(' ') : '';
    });
});
$('.card_no_payment').keypress(function() {
    $(this).val(function(i, v) {
        var v = v.replace(/[^\d]/g, '').match(/.{1,4}/g);
        return v ? v.join(' ') : '';
    });

});



/*space card number*/


/*Start-Open-Browse-Window-*/
function openFileOption() {
    document.getElementById("file1").click();
}

function openFileOption2() {
    document.getElementById("file2").click();
}
/*End-Open-Browse-Window-*/

$(document).ready(function() {
    overlay = $('.overlay');

    /*function hidedropdowns(clsnam)
    	{
                if($(clsnam).parent().hasClass("open")){$(clsnam).parent().toggleClass('open');overlay.hide();}
                else{$('div.dropdown').removeClass("open");
    			overlay.show();
    			$('body').addClass('scrl');
    			$(clsnam).parent().toggleClass('open');
    			$(clsnam).siblings( ".my_dropdown" ).css('height',($(window).height()-$(".container_super").height()));}

    	}*/



    //tab_two_buy_gift_card


    $(".top_head").click(function() {
        $('.bottom_content').removeClass('activet');
        $(this).next().addClass('activet');
        $(".top_head").removeClass('active');
        $(this).addClass('active');
    });

    //top head_acordion
    var ready = function() {
        $(".panel-collapsable")
            .children(".panel-heading")
            .click(function() {
                var group = $(this).parent().parent();
                if (group.hasClass("panel-group one-at-a-time")) {
                   //group.children(".panel").children(".panel-body").collapse('hide');
                   // $('.panel-collapse.in').collapse('hide');
                   // if($(this).parent().children('.panel-body').is(":visible"))
                    if($(this).parent().children('.panel-body').hasClass("collapsing")){}else{
                    if($(this).parent().children('.panel-body').hasClass("in"))
                     {
                    //    console.log('visible');
                         group.children(".panel").children(".panel-body").collapse('hide');
                        group.children(".panel").children(".panel-heading").children(".arrow_left_accordion").removeClass("arrow_left_accordionrotate");
                         $(this).next('.panel-body').collapse('hide');
                     }
                    else
                    {
                      //  console.log('hidden');
                        group.children(".panel").children(".panel-body").collapse('hide');
                        group.children(".panel").children(".panel-heading").children(".arrow_left_accordion").removeClass("arrow_left_accordionrotate");
                        $(this).children(".arrow_left_accordion").addClass("arrow_left_accordionrotate");}
                        $(this).next('.panel-body').collapse('show');
                    }}
          //  console.log($(this).text())
           //

            });
    };
    $(document).ready(ready);
    $(document).on('page:load', ready);
    //make_payment checkbox_start
    $(function() {
        $("#header").load("header.html");

    });
    $(document).on('change', '.make_pay_input_three', function() {
        if (this.checked) {
            $(".payment_card_form").show(500);
            $(".add_payment_card").hide(500);
        } else {
            $(".payment_card_form").hide(500);
        }
    });
    $(document).on('change', '.make_pay_input_one', function() {
        if (this.checked) {
            $(".payment_card_form").hide(500);
            $(".add_payment_card").show(500);
        } else {
            $(".payment_card_form").show(500);
        }
    });
    $(document).on('change', '.make_pay_input', function() {
        if (this.checked) {
            $(".payment_card_form").hide(500);
            $(".add_payment_card").show(500);
        } else {
            $(".payment_card_form").show();
        }
    });
    //make_payment checkbox_start

    var url = window.location.href;
    var res = url.split("#");
    $('.tab_contents a[href="#' + res[1] + '"]').tab('show');

    // $("input:text:enabled:first").focus();
    $("form").submit(function() {
        //  alert($(this).serialize());
        return false;
    });
    //dropdown_start

    $('.dropdown').on('show.bs.dropdown', function(e) {
        $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
        $('#page-content-wrapper').toggleClass('blur');
    });

    $('.dropdown').on('hide.bs.dropdown', function(e) {
        $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
        $('#page-content-wrapper').removeClass('blur');
    });

    //dropdown_end

    //header_search_start
    $("select.special-flexselect").flexselect({
        hideDropdownOnEmptyInput: true
    });
    $("select.flexselect").flexselect();
    $(".flexselect_dropdown").wrap("<div class='trending_search'></div>");
    recent_search_C = 1;
    overlay = $('.overlay');
    if (jQuery.trim($('#president_flexselect').val()) === "") {
        $(".search_box").addClass("nselek");
        $(".search_box label").css("display", "block");
    } else {
        $(".search_box").removeClass("nselek");
        $(".search_box label").css("display", "none");
        $(".cross_and_go").css("display", "block");
    }

    function searchfun() {
        overlay.show();
        $('.sub_header').addClass('blur');
        $('.all_content_body').addClass("blur");
        //$(".nselek label").animate({left:20},5000)
        $(".search_box").removeClass("nselek");
        $(".products_list").css("display", "none");
        $(".flexselect_dropdown").css("display", "block");
        // $(this).css('text-align' , 'left');
        $('.cross_and_go').css('display', 'block');
        //$('.search_icon').css('left' , '10px');
        // $('.search_icon').css('right' , 'auto');
        $('.flexselect_dropdown').css('top', '72px');
        if (recent_search_C === 1) {
            $("<div class='recent_search_data'></div>").appendTo(".flexselect_dropdown");
            recent_search_C = recent_search_C + 1;
        }
        $(".recent_search_data").load("ajax/recent_search.html");
        if ($(window).width() < 767) {
             //console.log(jQuery.trim($('#president_flexselect').val()));
             $("#president_flexselect_dropdown").height($(window).height()/2);
         }
    }
    $(".flexselect").focus(function() {
        searchfun();
    });

    $('.search_box,#president_flexselect').click(function() {
		searchfun();
        $(".flexselect").focus();
    });

    $(".flexselect").change(function() {
        //console.log(jQuery.trim($('#president_flexselect').val()));
        if (jQuery.trim($('#president_flexselect').val()) === "") {
            $(".search_box").addClass("nselek");
            $(".search_box label").css("display", "block");
        } else {
            $(".search_box").removeClass("nselek");
            $(".search_box label").css("display", "none");
            $(".search_box label").css("display", "none");

        }
    });

    $('.flexselect').blur(function() {

        if (jQuery.trim($('#president_flexselect').val()) === "") {
            $(".search_box").addClass("nselek");
            $(".search_box label").css("display", "block");
        } else {
            $(".search_box").removeClass("nselek");
            $(".search_box label").css("display", "none");
        }

        //$(this).css('text-align' , 'center');
        $('.page-content-wrapper').css('filter', 'none');
        if ($('#president_flexselect').val() === "") {
            $('.cross_and_go').hide();
        }
        //$('.search_icon').css('left' , '-34%');
        // $('.search_icon').css('right' , '0');
        $(".flexselect_dropdown").removeClass('defoult_dropdown');
        overlay.hide();
        $('.all_content_body').removeClass("blur");
        $('.sub_header').removeClass("blur");
    });
    products_list_c = 1;
    $('.go_it').click(function() {$('.flexselect').trigger('blur'); $('.cross_and_go').hide();$(".flexselect_dropdown").css("display", "none");});

    $('.flexselect').keydown(function() {

         if ($(window).width() < 767) {
             //console.log(jQuery.trim($('#president_flexselect').val()));
             $("#president_flexselect_dropdown").height($(window).height());
         }
        $('.flexselect').on("input", function() {


            var dInput = this.value;
            console.log(dInput);
            if (dInput === "") {
             //   $(".search_box").addClass("nselek");
                $(".search_box label").css("display", "block");
                $(".trending").removeClass("notrend");
                $(".recent_search_data").css("display", "block");
                $(".flexselect_dropdown").removeClass('defoult_dropdown');
                $(".products_list").css("display", "none");

            } else {
                $(".search_box").removeClass("nselek");
                $(".search_box label").css("display", "none");
                $(".trending").addClass("notrend");
                $(".recent_search_data").css("display", "none");
                $(".flexselect_dropdown").addClass('defoult_dropdown');
                $(".products_list").css("display", "");
            }
        });

        $(".products_list").css("display", "block");
       // $(".flexselect_dropdown").addClass('defoult_dropdown');

        if (products_list_c === 1) {
            $("<div class='products_list'></div>").appendTo(".flexselect_dropdown");
        }
        $(".products_list").load("ajax/products_list.html");

        products_list_c = products_list_c + 1;
        $('.flexselect_dropdown').css('top', '78px');
    });
    //header_search_
    $(".link_text").click(function() {
        $(this).next().show();
        $(this).hide();
        $(".block_text").show();
    });
    $(".block_text").click(function() {
        $(this).hide();
        $(this).parents(".price").prev().show();
        $(this).parents(".price").hide();
    });
    $('#popup1 , #popup2 , #popup5, #remove_address, #edit_address').on('show.bs.modal', function() {
        $('.all_content_wrapper').addClass('blur');
        $(window).scroll(function() {
            return false;
        });
       // $('body').css('overflow', 'hidden');
       // $('body').css('position', 'fixed');
    });
    $('#popup1 , #popup2 , #popup5, #remove_address, #edit_address').on('hide.bs.modal', function() {
        $('.all_content_wrapper').removeClass('blur');
        $('body').css('overflow', 'auto');
        //$('body').css('position', 'relative');
    });
    //on click cross inputfield cross_clr
    $('.cross_clr').click(function() {
       // console.log(222);
        $('#president_flexselect').val('');
        $(".recent_search_data").css("display", "block");
        $('.cross_and_go').hide();
        $('.trending').removeClass("notrend");
        overlay.hide();
        $('.all_content_body').removeClass("blur");
        $('.sub_header').removeClass("blur");
       // $(".search_box").addClass("nselek");
        $(".search_box label").css("display", "block");
    });


    /*-js*/
    $('.next1').click(function(event) {
        if ($('.controls-btn').is(":visible")) {
            // alert("wrong");
            $('.gift_cards').addClass('hidden');
            $('.basic_info').removeClass('hidden');
            $('.gift_card_proces ul li:first-child .bordr_right').addClass('active-process');
            $('.gift_card_proces ul li:nth-child(2) .inactive').addClass('hidden');
            $('.gift_card_proces ul li:nth-child(2) .active').removeClass('hidden');

        } else {
            $('.gift_cards').removeClass('hidden');
            $('.basic_info').addClass('hidden');
            $('.gift_card_proces ul li:first-child .bordr_right').removeClass('active-process');
            $('.gift_card_proces ul li:nth-child(2) .inactive').removeClass('hidden');
            $('.gift_card_proces ul li:nth-child(2) .active').addClass('hidden');
            $('.card_customized  input').css('border-color', '#e80a0a');
            $('.amount_msg').show(500);
            event.preventDefault();
        }
        if (($gift_card.find(".customized_amount").val() === "undefined") || ($gift_card.find(".customized_amount").val() === 0)) {
            event.preventDefault();
        }

    });
    $('.back2').click(function() {
        $('.gift_cards').removeClass('hidden');
        $('.basic_info').addClass('hidden');
        $('.gift_card_proces ul li:first-child .bordr_right').removeClass('active-process');
        $('.gift_card_proces ul li:nth-child(2) .inactive').removeClass('hidden');
        $('.gift_card_proces ul li:nth-child(2) .active').addClass('hidden');
    });

    $('.next2').click(function(event) {
        $vname01 = validateName();
        $vemail01 = validateEmail();
        $vmessage01 = validatemessage();
        $vtnc = checkboxvalidationtandc();

        if (($vname01 == '') || ($vemail01 == '') || ($vmessage01 == '') || ($vemail01 == 'invalid') || ($vtnc==="undefined") || ($vtnc===false)) {


            errorsavepopup();checkboxvalidationtandc();


            event.preventDefault();
        } else {
                   $('.basic_info').addClass('hidden');
            $('.make-a-payment').removeClass('hidden');
            $('.gift_card_proces ul li:nth-child(2) .bordr_right').addClass('active-process');
            $('.gift_card_proces ul li:nth-child(3) .inactive').addClass('hidden');
            $('.gift_card_proces ul li:nth-child(3) .active').removeClass('hidden');
        }
    });
    $('.back3').click(function() {
        $('.basic_info').removeClass('hidden');
        $('.make-a-payment').addClass('hidden');
        $('.gift_card_proces ul li:nth-child(2) .bordr_right').removeClass('active-process');
        $('.gift_card_proces ul li:nth-child(3) .inactive').removeClass('hidden');
        $('.gift_card_proces ul li:nth-child(3) .active').addClass('hidden');
    });
    $('.debitcreditcard').click(function(event) {

        if ($('input.make_pay_input_one:radio:checked').length > 0) {

            var cvv_val = $('input.make_pay_input_one:radio:checked').parents('.make_pay_card').next().find('.cvv_text_field').val();
            var cvv = $('input.make_pay_input_one:radio:checked').parents('.make_pay_card').next().find('.cvv_text_field');

            if ((cvv.val() === '') || (cvv_val.length < 3)) {

                cvv.focus();
                event.preventDefault();
            } else {
                $('.confurm_card_order').removeClass('hidden');
                $('.make-a-payment').addClass('hidden');
                $('.gift_card_proces ul li:nth-child(3) .bordr_right').addClass('active-process');
                $('.gift_card_proces ul li:nth-child(4) .inactive').addClass('hidden');
                $('.gift_card_proces ul li:nth-child(4) .active').removeClass('hidden');
            }
            //alert(newthis.val());
        } else {
            $vnamecard01 = cardholdername();
            $vcardnumber = validatecardnumberpayment();
            $vcardcvvnumber = validatecvvnumber();
            $year_dropdown01 = $(".year_dropdown01 span").text();
            $month_dropdown01 = $(".month_dropdown01 span").text();
            if (($year_dropdown01 === "YYYY") || ($month_dropdown01 === "MM") || ($vnamecard01 === '') || ($vnamecard01 === 'undefined') || ($vcardnumber === '') || ($vcardnumber === 'undefined') || ($vcardcvvnumber === '') || ($vcardcvvnumber === 'undefined') || ($.isNumeric($cvv_val) === false)) {
                //alert("wrong");
                validatecardnumberpayment();
                validatecvvnumber();
                validatemonth01();
                validateyear01();
                event.preventDefault();
            } else {
                $('.confurm_card_order').removeClass('hidden');
                $('.make-a-payment').addClass('hidden');
                $('.gift_card_proces ul li:nth-child(3) .bordr_right').addClass('active-process');
                $('.gift_card_proces ul li:nth-child(4) .inactive').addClass('hidden');
                $('.gift_card_proces ul li:nth-child(4) .active').removeClass('hidden');
            }
        }
    });
    $('.wallet_add_card_fund').click(function(event) {
        if ($(".top_content_card.fixed_height.wllet_gift > input").is(':checked')) {
            $('.confurm_card_order').removeClass('hidden');
            $('.make-a-payment').addClass('hidden');
            $('.gift_card_proces ul li:nth-child(3) .bordr_right').addClass('active-process');
            $('.gift_card_proces ul li:nth-child(4) .inactive').addClass('hidden');
            $('.gift_card_proces ul li:nth-child(4) .active').removeClass('hidden');
            event.preventDefault();
        } else {
            $('.confurm_card_order').addClass('hidden');
            $('.make-a-payment').removeClass('hidden');
            $('.gift_card_proces ul li:nth-child(3) .bordr_right').removeClass('active-process');
            $('.gift_card_proces ul li:nth-child(4) .inactive').removeClass('hidden');
            $('.gift_card_proces ul li:nth-child(4) .active').addClass('hidden');
        }
    });
    $('.net_banking_payment_system').click(function(event) {
		 if (($(".banks_listings input").is(':checked')===false)) {
			if(($(".pbank_selected span.interval").html() === 'Select Other Bank')){

            event.preventDefault();
			}
			else{
				   $('.confurm_card_order').removeClass('hidden');
            $('.make-a-payment').addClass('hidden');
            $('.gift_card_proces ul li:nth-child(3) .bordr_right').addClass('active-process');
            $('.gift_card_proces ul li:nth-child(4) .inactive').addClass('hidden');
            $('.gift_card_proces ul li:nth-child(4) .active').removeClass('hidden');
			}
        }
        else {
           $('.confurm_card_order').removeClass('hidden');
            $('.make-a-payment').addClass('hidden');
            $('.gift_card_proces ul li:nth-child(3) .bordr_right').addClass('active-process');
            $('.gift_card_proces ul li:nth-child(4) .inactive').addClass('hidden');
            $('.gift_card_proces ul li:nth-child(4) .active').removeClass('hidden');
        }
    });
    $('.cashcard_payment').click(function(event) {
        if ($(".buttons_for_card  input").is(':checked')) {
            $('.confurm_card_order').removeClass('hidden');
            $('.make-a-payment').addClass('hidden');
            $('.gift_card_proces ul li:nth-child(3) .bordr_right').addClass('active-process');
            $('.gift_card_proces ul li:nth-child(4) .inactive').addClass('hidden');
            $('.gift_card_proces ul li:nth-child(4) .active').removeClass('hidden');
            event.preventDefault();
        } else {
            $('.confurm_card_order').addClass('hidden');
            $('.make-a-payment').removeClass('hidden');
            $('.gift_card_proces ul li:nth-child(3) .bordr_right').removeClass('active-process');
            $('.gift_card_proces ul li:nth-child(4) .inactive').removeClass('hidden');
            $('.gift_card_proces ul li:nth-child(4) .active').addClass('hidden');
        }
    });
    $('.back4').click(function() {
        $('.confurm_card_order').addClass('hidden');
        $('.make-a-payment').removeClass('hidden');
        $('.gift_card_proces ul li:nth-child(3) .bordr_right').removeClass('active-process');
        $('.gift_card_proces ul li:nth-child(4) .inactive').removeClass('hidden');
        $('.gift_card_proces ul li:nth-child(4) .active').addClass('hidden');
    });
    //blur_function
    /* blur on modal open, unblur on close */

    /*add_fund_validation_start*/
    $('.add_fund_debitcreditcard').click(function(event) {
        if ($('input.make_pay_input_one:radio:checked').length > 0) {
            var cvv_val = $('input.make_pay_input_one:radio:checked').parents('.make_pay_card').next().find('.cvv_text_field').val();
            var cvv = $('input.make_pay_input_one:radio:checked').parents('.make_pay_card').next().find('.cvv_text_field');

            if ((cvv.val() === '') || (cvv_val.length < 3)) {
                cvv.focus();
                event.preventDefault();
            }

            //alert(newthis.val());
        } else {
            $vnamecard01 = cardholdername();
            $vcardnumber = validatecardnumberpayment();
            $vcardcvvnumber = validatecvvnumber();
            $year_dropdown01 = $(".year_dropdown01 span").text();
            $month_dropdown01 = $(".month_dropdown01 span").text();
            if (($year_dropdown01 === "YYYY") || ($month_dropdown01 === "MM") || ($vnamecard01 === '') || ($vnamecard01 === 'undefined') || ($vcardnumber === '') || ($vcardnumber === 'undefined') || ($vcardcvvnumber === '') || ($vcardcvvnumber === 'undefined')) {
                //alert("wrong");
                validatecardnumberpayment();
                validatecvvnumber();
                validatemonth01();
                validateyear01();
                event.preventDefault();
            }




        }
    });

    $('.add_fund_wallet_add_card_fund').click(function(event) {
        if ($(".top_content_card.fixed_height.wllet_gift > input").is(':checked')) {
            return false();
        } else {
            event.preventDefault();
        }
    });
    $('.add_fund_net_banking_payment_system').click(function(event) {
        if (($(".banks_listings input").is(':checked')===false)) {
			if(($(".pbank_selected span.interval").html() === 'Select Other Bank')){
		   event.preventDefault();
			}
        }

    });
    $('.add_fund_cashcard_payment').click(function(event) {
        if ($(".buttons_for_card  input").is(':checked')==false) {
           event.preventDefault();
        }
    });
    /*add_fund_validation_end*/
});

$(document).ready(function() {

    //Add
    $(".quantity-add").click(function(e) {
        //Vars
        var count = 1;
        var newcount = 0;

        //Wert holen + Rechnen
        var elemID = $(this).parent().attr("id");
        var countField = $("#" + elemID + 'inp');
        var count = $("#" + elemID + 'inp').val();
        var newcount = parseInt(count) + 1;

        //Neuen Wert setzen
        $("#" + elemID + 'inp').val(newcount);
    });

    //Remove
    $(".quantity-remove").click(function(e) {
        //Vars
        var count = 1;
        var newcount = 0;

        //Wert holen + Rechnen
        var elemID = $(this).parent().attr("id");
        var countField = $("#" + elemID + 'inp');
        var count = $("#" + elemID + 'inp').val();
        var newcount = parseInt(count) - 1;

        //Neuen Wert setzen
        $("#" + elemID + 'inp').val(newcount);

    });


    //Delete
    $(".quantity-delete").click(function(e) {
        //Vars
        var count = 1;
        var newcount = 0;

        //Wert holen + Rechnen
        var elemID = $(this).parent().attr("id");
        var countField = $("#" + elemID + 'inp');
        var count = $("#" + elemID + 'inp').val();
        var newcount = parseInt(count) - 1;

        //Neuen Wert setzen
        //$('.item').html('');

        var row = $(".row");
        $(event.target).closest(row).html('');
    });


});
//side menu  start
$(document).ready(function() {
    var trigger = $('.hamburger'),
        overlay = $('.overlay'),
        isClosed = false;





   function hidedropdowns(clsnam) {

        $('.wrapper').removeClass('toggled');
        $(".catg").removeClass("show_cros");$(".catg,.hamburger").removeClass("is-open");$(".catg,.hamburger").addClass("is-closed");

        isClosed = false;
        if ($(clsnam).parent().hasClass("open")) {

            overlay.hide();
            $('.all_content_body').removeClass("blur");$('.sub_header').removeClass("blur");
            //    $(clsnam).siblings(".my_dropdown").css('height', '0');
            $(clsnam).siblings(".my_dropdown").height(0);
            setTimeout(function() {
                $(clsnam).parent().toggleClass('open');
            }, 200);
            $('body').removeClass('scrl');


        } else {
            $(clsnam).siblings(".my_dropdown").css('height', '0');
            $('div.dropdown').removeClass("open");
            overlay.show();
            $('.sub_header').addClass('blur');
            $('.all_content_body').addClass("blur");
            $('body').addClass('scrl');
            $(clsnam).parent().toggleClass('open');
            $(clsnam).siblings(".my_dropdown").css('height', ($(window).height() - $(".container_super").height()));
       //   $('.innerscroll').css('height', ($(window).height() - $(".container_super").height()) - $(clsnam).siblings(".my_dropdown").find(".view_my_acount").height() - 50);
         //   console.log($(clsnam).siblings(".my_dropdown").children('h2:first').outerHeight(true));

            $(clsnam).parent().children('.dropdown-menu').children('.innerscroll').css('height', ($(window).height() - $(".container_super").height()) - $(clsnam).siblings(".my_dropdown").find(".view_my_acount").height() - $(clsnam).siblings(".my_dropdown").children('h2:first').outerHeight(true)-5);

        }


    }
    $(".profile_icon").click(function() {hidedropdowns(".profile_icon");});
    $(".profile_imag").click(function() {hidedropdowns(".profile_imag");});
    $(".track_icon").click(function() {hidedropdowns(".track_icon");});$(".more_icon").click(function() {hidedropdowns(".more_icon");});
    $(".cart_icon").click(function() {hidedropdowns(".cart_icon");});

    trigger.click(function(e) {
        hamburger_cross();
        e.stopPropagation();
    });

    $('.overlay').click(function(e) {
        e.stopPropagation();
        overlay.hide();
        $('.all_content_body').removeClass("blur");

        $('.sub_header').removeClass("blur");


        trigger.removeClass('is-open');
        trigger.addClass('is-closed');
        $('.wrapper').removeClass('toggled');
        $('#page-content-wrapper').removeClass('blur');

        $('body').removeClass('scrl');
        $('.dropdown').removeClass('open');
        $(".catg").removeClass("show_cros");
        $("#sidebar-wrapper").removeClass("nw1");
        $("#sidebar-wrapper").removeClass("nw2");
        $("#sidebar-wrapper").find('.open').removeClass('open');
        isClosed = false;


        //     $('.header_part').toggleClass('blur');

    });

    function hamburger_cross() {
       // console.log(isClosed)

        if (isClosed === true) {
            overlay.hide();
            $('.all_content_body').removeClass("blur");
            $('.sub_header').removeClass("blur");
            trigger.removeClass('is-open');
            trigger.addClass('is-closed');
            $("#sidebar-wrapper").removeClass("nw1");
            $("#sidebar-wrapper").removeClass("nw2");
            $(".catg").removeClass("show_cros");
            $('.sidebar-nav li').removeClass('open');
            isClosed = false;
            if ($(".catgeory_wrap").offset().left > 100) {
                $('#sidebar-wrapper').css('left', 0);

            }


        } else {
            overlay.show();

            $('.all_content_body').addClass("blur");
            trigger.removeClass('is-closed');
            trigger.addClass('is-open');
            $('#sidebar-wrapper').css('height', ($(window).height() - $(".acount_header").height()));



            $('#sidebar-wrapper').css('margin-top', 1);

            isClosed = true;



                if ($(".catgeory_wrap").offset().left > 100) {
                $('#sidebar-wrapper').css('left', ($(".catgeory_wrap").offset().left + 355));
            }

            $(".catg").addClass("show_cros");
            $('#sidebar-wrapper').css('top', $(".acount_header").height());

        }
    }
    $('#president_flexselect').focus(function() {
        $('.overlay').trigger('click');
        $('.overlay').show();
        $('.all_content_body').addClass("blur");
        $('body').addClass('scrl');

    });



    $('#president_flexselect').blur(function() {
        $('body').removeClass('scrl');
    });

    $('body').click(function() {
        $('#sidebar-wrapper').removeClass('nw1 nw2');
    });

    $('[data-toggle="offcanvas"]').click(function() {

	if($(".track_icon").parent().hasClass("open")){

			 $('div.dropdown').removeClass("open");$('.sub_header').removeClass('blur');
             $('.wrapper').toggleClass('toggled');
        $('#page-content-wrapper').toggleClass('blur');

        // $('.header_part').toggleClass('blur');
        //$('body').toggleClass('scrl');
		$('body').addClass('scrl');
        $("#sidebar-wrapper").removeClass("nw1");
        $("#sidebar-wrapper").removeClass("nw2");
			}
    else if($(".profile_icon").parent().hasClass("open")){
				 $('div.dropdown').removeClass("open");$('.sub_header').removeClass('blur');
        $('.wrapper').toggleClass('toggled');
        $('#page-content-wrapper').toggleClass('blur');
        // $('.header_part').toggleClass('blur');
        //$('body').toggleClass('scrl');
		$('body').addClass('scrl');
        $("#sidebar-wrapper").removeClass("nw1");
        $("#sidebar-wrapper").removeClass("nw2");
				}
	else if($(".more_icon").parent().hasClass("open")){
				 $('div.dropdown').removeClass("open");$('.sub_header').removeClass('blur');
        $('.wrapper').toggleClass('toggled');
        $('#page-content-wrapper').toggleClass('blur');
        // $('.header_part').toggleClass('blur');
        //$('body').toggleClass('scrl');
		$('body').addClass('scrl');
        $("#sidebar-wrapper").removeClass("nw1");
        $("#sidebar-wrapper").removeClass("nw2");
				}
	else if($(".cart_icon").parent().hasClass("open")){
		$('div.dropdown').removeClass("open");$('.sub_header').removeClass('blur');
        $('.wrapper').toggleClass('toggled');
        $('#page-content-wrapper').toggleClass('blur');
        // $('.header_part').toggleClass('blur');
        //$('body').toggleClass('scrl');
		$('body').addClass('scrl');
        $("#sidebar-wrapper").removeClass("nw1");
        $("#sidebar-wrapper").removeClass("nw2");
				}
	else{
        $('div.dropdown').removeClass("open");
        $('.wrapper').toggleClass('toggled');$('.sub_header').removeClass('blur');
        $('#page-content-wrapper').toggleClass('blur');
        // $('.header_part').toggleClass('blur');
        $('body').toggleClass('scrl');
        $("#sidebar-wrapper").removeClass("nw1");
        $("#sidebar-wrapper").removeClass("nw2");
			}
    });


    $('.navbar a.dropdown-toggle').on('click', function(e) {

        var $el = $(this);
        if($el.parent().parent().hasClass("nav")){$("#sidebar-wrapper").removeClass("nw2");if($el.parent().hasClass("open")){$("#sidebar-wrapper").removeClass("nw1");}}

        var $parent = $(this).offsetParent(".dropdown-menu");
         $el.next().css({
                   // "top": 0,
                    "left": -100
                });

        $(this).parent("li").toggleClass('open');
        var pageWidth = $('body').width();
        $top_submenu1 = $(this).offset().top;

        if (pageWidth > 319 && pageWidth < 460) {
            if (!$parent.parent().hasClass('nav')) {
                $el.next().css({
                   // "top": 0,
                    "left": 6
                });
            } else {
                $el.next().css({
                  //  "top": 0,
                    "left": 70
                });
            }
        } else {
            if (!$parent.parent().hasClass('nav')) {
                $el.next().css({
                    "left": 70
                });
            } else {
                $el.next().css({
                    "left": 70
                });
            }
        }
        $('.nav li.open').not($(this).parents("li")).removeClass("open");

        return false;
    });
    $('.closethis').click(function(e) {
    // console.log('there');
    al=$(this);
    al.parent().parent().animate({left:"-200px"},300, function() {
    if(al.hasClass("submenuback1")){
    $("#sidebar-wrapper").removeClass("nw1");
    $("#sidebar-wrapper").removeClass("nw2");
    $('.navbar li').removeClass('open');
    
        }
        else
        {$("#sidebar-wrapper").removeClass("nw2");al.parent().parent().parent().removeClass("open");}
    
                    })
        e.stopPropagation();
        //$(this).closest("ul").parent("li").toggleClass('open');
        // $(this).parent('dropdown-menu').hide();console.log($(this).parent('dropdown-menu'));
        // e.stopPropagation();
        // console.log('there');
    });

});

$('.sidebar-wrap,.submenu1,.submenu2').css({
   // "height": $(window).height(),
    "width": "100%"
});

$('.submenuback1, .hamburger').click(function() {
  //  $(this).parents(".submenu1").css("left", "0px");
    //	 $(".acount_header").css("position","relative");

});
/*--Start-Remove-Menu-Class--*/
$('.catg.hamburger').click(function(){
    $('.navbar li').removeClass('open');
});
/*--End-Remove-Menu-Class--*/
$('.submenuback1, .hamburger').click(function() {
    //$(".submenu0").css("background","rgb(255,255,255)");
 //   $(".new0").removeClass("new0");
  //  $("#sidebar-wrapper").removeClass("nw1");
  //  $("#sidebar-wrapper").removeClass("nw2");

});
$('.submenuback2, .hamburger').click(function() {
  //  $(this).parents(".submenu2").css("left", "0px");
  //  $(".submenu1 li a").css("color", "#000");
  //  $("#sidebar-wrapper").removeClass("nw2");
});
$('.level2').click(function() {

    $(".submenu1 li a").css("color", "#ccc");
    $(".submenu2 li a").css("color", "#000");
	 var w_submenu = $(window).width();
	  if(w_submenu > 319 && w_submenu < 767){
		  $(".submenu2").css("margin-left", 75);
	  } else {
	$(".submenu2").css("margin-left", 25);
	  }
    $("#sidebar-wrapper").addClass("nw2");
});
$('.level1').click(function() {

   $top_submenu1 = $(this).offset().top;
    $(".submenu1").css("top", $(".acount_header").height()- $top_submenu1-$("#sidebar-wrapper").scrollTop());
    $("#sidebar-wrapper").addClass("nw1");
    if($('.store_account').is(':visible'))
            {
                //$('#sidebar-wrapper .sidebar-wrap').css('height', ($(window).height() -$(".store_account").height()- $(".acount_header").height()));
                $('.submenu1,.submenu2').css('height', ($(".store_account").height()+ $(".sidebar-wrap").height()));
            }

            else

            {
            numbers_array = [$(".sidebar-wrap").height(), $(window).height()-$(".header_part").height()-10, $(this).parent().find(".submenu1").height()+10];
           // console.log(numbers_array)            
           // console.log(Math.max.apply( null, numbers_array ))
            $($(this).parent().find(".submenu1")).css('height', Math.max.apply( null, numbers_array ));
            $($(this).parent().find(".submenu2")).css('height', Math.max.apply( null, numbers_array )); 
            }
//    $('.submenu1,.submenu2').css('height', ( $("#sidebar-wrapper")[0].scrollHeight));
//	 var w_submenu = $(window).width();
//	 $(".submenu1").css("top", $(".acount_header").height()- $top_submenu1);

	/* 	  $(".submenu1").css("margin-top", -115);
		  $(".submenu1").css("margin-left", -27);
		    $(".submenu1").css("display", "block");
    $(".submenu0").children().addClass("new0");
    $(this).parent("li").removeClass("new0");

    $("#sidebar-wrapper").removeClass("nw2");
	  }
else{*/
//console.log($top_submenu1)
 //   $(this).parent("li").find(".submenu1").css("left", "37px");
 //   $(this).parent("li").find(".submenu1").css("display", "");
 //   $(".submenu0").children().addClass("new0");
//    $(this).parent("li").removeClass("new0");
//    $("#sidebar-wrapper").toggleClass("nw1");
//    $("#sidebar-wrapper").removeClass("nw2");
/*}*/

});

//dropdown start
function DropDown(el) {
    this.dd = el;
    this.placeholder = this.dd.children('span');
    this.opts = this.dd.find('div.dropdown li');
    this.val = '';
    this.index = -1;
    this.initEvents();
}
DropDown.prototype = {
    initEvents: function() {
        var obj = this;

        obj.dd.on('click', function() {
            $(this).toggleClass("active");
            $(this).removeClass('shake');
            var deID = $(this);
            if (deID[0].id === 'device') {
                $('html, body').animate({
                    scrollTop: 200
                }, 800);
            }
            return false;
        });

        obj.opts.on('click', function(e) {
            e.preventDefault();
            var opt = $(this);
            obj.val = opt.text();
            obj.index = opt.index();
            obj.placeholder.text(obj.val);
            var currentID = $(this).parents('div.wrapper-dropdown-3')[0].id;
            //$(this).parents('div.dropdown').prev().attr('data-val',this.children[0].dataset.val);
            if (currentID === 'device') {
                $('#device_top span').attr('data-val', this.children[0].dataset.val);
                $('#device_top span').html(opt.text());
                $('#deviceprice').trigger('click');
            }
            if (currentID === 'device_top') {
                $('#device span').attr('data-val', this.children[0].dataset.val);
                $('#device span').html(opt.text());
                $('#deviceprice_top').trigger('click');
            }
            if (currentID === 'deviceprice') {
                $('#deviceprice_top span').attr('data-val', this.children[0].dataset.val);
                $('#deviceprice_top span').html(opt.text());
            }
            if (currentID === 'deviceprice_top') {
                $('#deviceprice span').attr('data-val', this.children[0].dataset.val);
                $('#deviceprice span').html(opt.text());
            }
        });
    },
    getValue: function() {
        return this.val;
    },
    getIndex: function() {
        return this.index;
    }
};

$(function() {

    var dd = new DropDown($('#device'));

    $(document).click(function() {
        // all dropdowns
        $('.wrapper-dropdown-3').removeClass('active');
    });

    var dd = new DropDown($('#deviceprice'));

    $(document).click(function() {
        // all dropdowns
        $('.wrapper-dropdown-3').removeClass('active');
    });

    var dd = new DropDown($('#device_top'));

    $(document).click(function() {
        // all dropdowns
        $('.wrapper-dropdown-3').removeClass('active');
    });
	
	var dd = new DropDown($('#address_pincode'));

    $(document).click(function() {
        // all dropdowns
        $('.wrapper-dropdown-3').removeClass('active');
    });
var dd = new DropDown($('#address_state_list'));

    $(document).click(function() {
        // all dropdowns
        $('.wrapper-dropdown-3').removeClass('active');
    });
	var dd = new DropDown($('#address_type'));

    $(document).click(function() {
        // all dropdowns
        $('.wrapper-dropdown-3').removeClass('active');
    });
    var dd = new DropDown($('#deviceprice_top'));

    $(document).click(function() {
        // all dropdowns
        $('.wrapper-dropdown-3').removeClass('active');
    });
	
    $('.top_heading_location').click(function(e) {
        // all dropdowns
        $(this).next().toggle();
        $('.my_dropdown').toggleClass('open');

        e.stopPropagation();
    });

});
//side menu
//formvalidetion_start
$("ul.pbank_option li").click(function() {
    $("#radio01").prop('checked', false);
    $("#radio02").prop('checked', false);
    $("#radio03").prop('checked', false);
    $("#radio04").prop('checked', false);
    $("#radio05").prop('checked', false);
    $("#radio06").prop('checked', false);
});

$(".input_new_password").focus(function() {
    $('.input_new_password').css('border-color', '#c5c5c5');
    $(".msg_return").hide();
});
$(".confirm_new_password").focus(function() {
    $('.confirm_new_password').css('border-color', '#c5c5c5');
    $(".msg_return").hide();
});
$(".input_old_password").focus(function() {
    $('.input_old_password').css('border-color', '#c5c5c5');
    $(".msg_return").hide();
});
$(".showhide01").click(function() {
    if ($(".input_old_password").attr("type") === "password") {
        $(".input_old_password").attr("type", "text");
        $(this).text("Hide");

    } else {
        $(".input_old_password").attr("type", "password");
        $(this).text("Show");
    }
});
$(".showhide02").click(function() {
    if ($(".input_new_password").attr("type") === "password") {
        $(".input_new_password").attr("type", "text");
        $(this).text("Hide");

    } else {
        $(".input_new_password").attr("type", "password");
        $(this).text("Show");
    }
});
$(".showhide03").click(function() {
    if ($(".confirm_new_password").attr("type") === "password") {
        $(".confirm_new_password").attr("type", "text");
        $(this).text("Hide");

    } else {
        $(".confirm_new_password").attr("type", "password");
        $(this).text("Show");
    }
});
$(function(event) {
    $('#login1').on('click', function() {

        if ($('#password2').val() === '') {
            $(".msg_return").show();
            $('.input_old_password').css('border-color', '#e80a0a');

            event.preventDefault();
        }


    });
});
$(function() {
    $('#login1').on('click', function() {
        var pRE = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{6,20})/,
            p1 = $('#password').val();
        p2 = $('#password1').val();
        p3 = $('#password2').val();
        if (!pRE.test(p1) || !pRE.test(p2) || p1 !== p2) {
            $(".msg_return").show();
            $('.input_new_password').css('border-color', '#e80a0a');
            $('.confirm_new_password').css('border-color', '#e80a0a');
            return false;
        }

    });
});


//make-a-payment form validation_start
$(".card_name input").focus(function() {
    $('.card_name input').css('border-color', '#c5c5c5');
    $(".card_name span").hide();
});
$(".card_number input").focus(function() {
    $('.card_number input').css('border-color', '#c5c5c5');
    $(".card_number span").hide();
});
$("input.cvv_text_field").focus(function() {
    $('.cvv_number input').css('border-color', '#c5c5c5');
    $(".cvv_number span").hide();
});
$(".card_name input").blur(function() {
    cardholdername();
});
$(".card_number input").blur(function() {
    validatecardnumberpayment();
});
$("input.cvv_text_field").blur(function() {
    validatecvvnumber();
});

function cardholdername() {
    $card_hodlder_name_len = $('.payment_card_form input.card_name').val().length;
    $card_holder_val = $(".payment_card_form input.card_name").val();

    if (($card_hodlder_name_len < 3) || ($.trim($card_holder_val).length < 2)) {
        $('.card_name input').css('border-color', '#e80a0a');
        $('.card_name span').show();
        return false;
    }
    return $card_holder_val;
}

function validatecardnumberpayment() {
    $card_numb_len = $('.payment_card_form input.card_no_payment').val().length;
    $card_numb_val = $('.payment_card_form input.card_no_payment').val();
    if (($card_numb_len < 19) || ($card_numb_val === '')) {
        $('.card_number input').css('border-color', '#e80a0a');
        $('.card_number span').show();
        return false;
    }

    return $card_numb_val;
}

function validatecvvnumber() {
    $cvv_len = $('.payment_card_form input.cvv_text_field').val().length;
    $cvv_val = $('.payment_card_form input.cvv_text_field').val();
    if (($cvv_len < 3) || ($cvv_val === '') || ($.isNumeric($cvv_val) === false)) {
        $('.payment_card_form .cvv_number input').css('border-color', '#e80a0a');
        $('.payment_card_form .cvv_number span').css('display', 'block');
        return false;
    }
    return $cvv_val;
}

function validatemonth01() {
    if ($('.month_dropdown01 span').text('MM')) {
        $('.month_dropdown01').css('border-color', '#e80a0a');
        return false;
    }

}

function validateyear01() {
    if ($('.year_dropdown01 span').text('YYYY')) {
        $('.year_dropdown01').css('border-color', '#e80a0a');
        return false;
    }

}
$(".month_dropdown01 .cat-listing li").click(function() {
    $('.month_dropdown01').css('border-color', 'rgba(166, 170, 169, 0.5)');
});
$(".year_dropdown01 .cat-listing li").click(function() {
    $('.year_dropdown01').css('border-color', 'rgba(166, 170, 169, 0.5)');
});


//make-a-payment form validation_end
/*gift_card_start*/
$(".amount_card input").focus(function() {
    $('.amount_card input').css('border-color', '#c5c5c5');
    $(this).next().hide();
});
$(".amount_card input").blur(function() {
    if ($('.amount_card input').val() === '') {
        $('.amount_card input').css('border-color', '#e80a0a');
        $('.msg').show(500);
    }
});
$(".addfunds").click(function(event) {
    $amcardinput02 = $('.addfund_walet_add').val();
    $amcardinput02val = $amcardinput02.replace(/\s/g, "");
    //$amcardinputwa=$('.addfund_walet').val();
    //  alert($amcardinput02val);
    if (($amcardinput02val === "")) {
        $('.amount_card input').css('border-color', '#e80a0a');
        $('.msg').show(500);
        event.preventDefault();

    }
    if ($.isNumeric($amcardinput02val) === false) {
        $('.amount_card input').css('border-color', '#e80a0a');
        $('.msg').show(500);
        event.preventDefault();
    }
    if (($amcardinput02val.length > 19) || ($amcardinput02val.length < 10)) {

        $('.amount_card input').css('border-color', '#e80a0a');
        $('.msg').show(500);
        //  return false;
    } else {
        $('.addfund_walet_add').css('color', '#a09f9f');
    }
});



function validatemsg() {
    if (($('.message01').val().length > 101)) {
        $('.message01').css('border-color', '#e80a0a');
        //  return false;
    } else {
        $('.message01').css('color', '#a09f9f');
    }
    return $('.amount_card input').val();
}

/*gift_card_end*/
/*Spencer's Wallet_start*/
$(".amount_card_wallet input").focus(function() {
    $('.amount_card_wallet input').css('border-color', '#c5c5c5');
    $('.msg_amount').hide();
});
$(".amount_card_wallet input").blur(function() {
    if ($('.amount_card_wallet input').val() === '') {
        $('.amount_card_wallet input').css('border-color', '#e80a0a');
        $('.msg_amount').show(500);
    }
});
$(".addfunds_wallet").click(function(event) {
    $amcardinput = $('.addfund_walet').val();

    //$amcardinputwa=$('.addfund_walet').val();
    //  alert($amcardinput);
    if (($amcardinput === "") || ($amcardinput < 1)) {
        // alert("wrong");
        event.preventDefault();

    }
    if (($.isNumeric($('.addfund_walet').val()) === false) || (/^[a-zA-Z0-9- ]*$/.test($amcardinput) === false)) {
        event.preventDefault();
        $('.amount_card_wallet input').css('border-color', '#e80a0a');
        $('.msg_amount').show(500);
    }
});

$('.addfunds_wallet').click(function() {
    $vamountwallet = validateAmountwallet();
    if ($vamountwallet !== ''); {
        errordisplaywallet();
    }
});

function validateAmountwallet() {

    if (($('.amount_card_wallet input').val() === '') || ($('.addfund_walet').val() < 1)) {

        $('.amount_card_wallet input').css('border-color', '#e80a0a');
        $('.msg_amount').show();
    } else {
        $('.amount_card_wallet input').css('color', '#a09f9f');
    }
    return $('.amount_card_wallet input').val();
}

function errordisplaywallet() {
    if ($('.amount_card_wallet input').val() === '') {

        $('.amount_card_wallet input').css('border-color', '#e80a0a');
        $('.msg_amount').show();

    } else {
        $('.amount_card_wallet input').css('color', '#a09f9f');
    }
    return $('.amount_card_wallet input').val();
}
/*Spencer's Wallet_end*/
/*buy_gift_card_validation_start*/
$(".card_customized input").focus(function(event) {
    $('.card_customized input').css('border-color', '#c5c5c5');
    $('.amount_msg').hide();
    $('.last_gift_card_add .last_card_button').show();
    $('.last_card').hide();
    event.preventDefault();

});
$(".card_customized input").blur(function() {
    if ($('.card_customized input').val() === '') {
        $('.card_customized  input').css('border-color', '#e80a0a');
        $('.amount_msg').show(500);
        $('.last_gift_card_add .last_card_button').hide();
        $('.last_card').show();
    }
});




//change color back to normal
$(".username input").focus(function() {
    $('.username input').css('border-color', '#c5c5c5');
    $(".username span").hide();
    $(".otp_name").hide();
});
$(document).delegate(".emailid input", "focus", function() {
    $('.emailid input').css('border-color', '#c5c5c5');
    $(".otp").hide();

});

$(".message textarea").focus(function() {
    $('.message textarea').css('border-color', '#c5c5c5');
    $(".msg_error").hide();
    $(this).css('height', '100px');

});
$(".phonenumber input").focus(function() {
    $('.phonenumber input').css('border-color', '#c5c5c5');

});
$(".number input").focus(function() {
    $('.number input').css('border-color', '#c5c5c5');
    $(".number span").hide();
});
$(".message textarea").focus(function() {
    $('.message textarea').css('border-color', '#c5c5c5');

});
//validate name,email,phonenumber
$('.username input').blur(function() {
    validateName();
});
$('.number input').blur(function() {
    validatecardnumber();
});
$(document).delegate(".emailid input", "blur", function() {
    validateEmail();
});

$('.message textarea').focus(function() {

    $(this).css('height', '100px');
});
$('.message textarea').blur(function() {
    validatemessage();
    $(this).css('height', '37px');
});
$('.phonenumber input').blur(function() {
    validatePhonenumber();
    $('.otp01').show();
});

$('.number input').blur(function() {
    validatePhonenumber();
    $('.otp01').show();
});
$('.amount_card input').blur(function() {
    validateAmount();
});

//--Start----//
$(".title_input input").focus(function() {

    {
        $('.title_input input').css('border-bottom', '1px solid #d2d4d4');
        $(this).parent().find(".title_name").hide();
    }
});
$(".title_input input").blur(function(event) {
    if (($('.title_input input').val().length < 3) || ($.trim($(".title_input input").val()).length < 2)) {
        $('.title_input input').css('border-color', '#e80a0a');
        $('.title_name').show();
        event.preventDefault();
    }

});
$('.title_writereview input').blur(function() {
    validatereview();
});
$('.title_writecomment input').blur(function() {
    validatecomment();
});
//--End----//
//show +91 onfocus
$(".phonenumber input").focus(function() {
    $('.nineone').css('z-index', '0');
    $('.phonenumber .nineone').css('display', 'block');
});
$(".phonenumber input").blur(function() {
    if ($(".phonenumber input").val() === '') {
        $('.nineone').css('z-index', '-1');
        $('.phonenumber .nineone').css('display', 'none');
    }
});
if ($(".phonenumber input").val() !== '') {
    $('.nineone').css('z-index', '0');
}
//---Start--validation---//
$(".title_input input").focus(function() {
    $('.title_input input').css('border-color', '#c5c5c5');
    $(".title_input span").hide();
});
$(".title_writereview input").focus(function() {
    $('.title_writereview input').css('border-color', '#c5c5c5');
    $(".title_writereview span").hide();
});
$(".title_writecomment input").focus(function() {
    $('.title_writecomment input').css('border-color', '#c5c5c5');
    $(".title_writecomment span").hide();
});
//---End--validation---//

//capitalize name on the go
$('.username input').bind('input propertychange', function() {
    $('.username input[type="text"]').css('text-transform', 'capitalize');
});



$(".phonenumber input").bind("keypress", function() {
    if ($(this).val().length >= $(this).attr("size")) {
        return false;
    }
});
//lower case the email on the go
$('.emailid input').bind('input propertychange', function() {
    //$('.emailid input[type="text"]').css('text-transform','lowercase');
});
$(".number input").bind("keypress", function() {
    if ($(this).val().length >= $(this).attr("size")) {
        return false;
    }
});
//check if all fields are filled while continuing
$('.save_card').click(function(event) {
    $vname = validateName();
    $vcardnumber = validatecardnumber();
    $vmonth = validatemonth();
    $vyear = validateyear();
    if ($vname !== '' && $vcardnumber !== '' && $vmonth !== '' && $vyear !== '') {
        errorsavepopup();
        event.preventDefault();
    }
});

function errorsavepopup() {

    if (($('.username input').val().length < 3) || ($.trim($(".username input").val()).length < 2)) {
        $('.username input').css('border-color', '#e80a0a');
        $('.username span').show();
        $(".otp_name").show();

    }
    var email = $('.emailid input').val();
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    if (!emailReg.test(email) || email === '') {
        $('.emailid input').css('border-color', '#e80a0a');
        $('.otp').show();
    }



    var message = $(".message textarea").val();
    if (message === "") {
        $(".message textarea").css('border-color', '#e80a0a');
        $(".msg_error").show();
        return false;
    }

    if (($('input.card_no').val()==="undefined")||($('input.card_no').val().length < 19)) {
        $('.number  input').css('border-color', '#e80a0a');
        $('.number  input').addClass('shake');
    } else {
        $('.number  input').css('color', '#a09f9f');
    }
    if ($('.month_dropdown').find().text('MM')) {
        $('.month_dropdown').css('border-color', '#e80a0a');
        return false;
    }
    if ($('.year_dropdown').find().text('YYYY')) {
        $('.year_dropdown').css('border-color', '#e80a0a');
        return false;
    }

}

function validateName() {
    if (($('.username input').val().length < 3) || ($.trim($(".username input").val()).length < 2)) {
        $('.username input').css('border-color', '#e80a0a');
        $('.username span').show();
        $(".otp_name").show();
        return false;
    }

    return $('.username input').val();
}
//-Start---//
$('.btn-publish ').click(function(event) {
    if (($('.title_input input').val().length < 3) || ($.trim($(".title_input input").val()).length < 2)) {
        $('.title_input input').css('border-color', '#e80a0a');
        $('.title_name').show();
        event.preventDefault();
    }

});




function validatereview() {
    if (($('.title_writereview input').val().length < 3) || ($.trim($(".title_writereview input").val()).length < 2)) {
        $('.title_writereview input').css('border-color', '#e80a0a');
        $('.title_name').show();
    } else {
        $('.username label').css('color', '#a09f9f');
    }
    return $('.username input').val();
}
$('.btn-review').click(function() {
    $vtitle = validatereview();
    if ($vtitle !== '') {
        validatereview();
    }
});

function validatecomment() {
    if (($('.title_writecomment input').val().length < 3) || ($.trim($(".title_writecomment input").val()).length < 2)) {
        $('.title_writecomment input').css('border-color', '#e80a0a');
        $('.title_name_1').show();
    } else {
        $('.username label').css('color', '#a09f9f');
    }
    return $('.username input').val();
}
$('.btn-review').click(function() {
    $vtitle = validatecomment();
    if ($vtitle !== '') {
        validatecomment();
    }
});
$(document).delegate(".subscribe_button", "click", function() {
    $vtitle = validateEmail();
    if ($vtitle !== '') {
        validateEmail();
    }

});

//-End---//

function validatecardnumber() {
    if ($('.number input').val().length < 16 || $('.number input').val() === '') {
        $('.number input').css('border-color', '#e80a0a');
        $('.number span').show();
    }

    return $('.number input').val();
}

function validatemonth() {
    if ($('.month_dropdown span').text('MM')) {
        $('.month_dropdown').css('border-color', '#e80a0a');
    }
}

function validateyear() {
    if ($('.year_dropdown span').text('YYYY')) {
        $('.year_dropdown').css('border-color', '#e80a0a');
    }
}
$(".month_dropdown .cat-listing li").click(function() {
    $('.month_dropdown').css('border-color', 'rgba(166, 170, 169, 0.5)');
});
$(".year_dropdown .cat-listing li").click(function() {
    $('.year_dropdown').css('border-color', 'rgba(166, 170, 169, 0.5)');
});

function validateEmail() {
    var email = $('.emailid input').val();
    var invalid = 'invalid';
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    if (!emailReg.test(email) || email === '') {
        $('.emailid input').css('border-color', '#e80a0a');
        $('.otp').show();
        return invalid;
    }

    return $('.emailid input').val();

}

function validatePhonenumber() {
    if ($('.phonenumber input').val().length !== 10) {
        $('.phonenumber input').css('border-color', '#e80a0a');
        $('.phonenumber').addClass('shake');
    }

    return $('.phonenumber input').val();
}

function validatemessage() {
    var message = $(".message textarea").val();
    if (message === "") {
        $(".message textarea").css('border-color', '#e80a0a');
        $(".msg_error").show();
        return false;
    }
	return message;
}

$(".save_card").click(function(event) {
    $amcardinput01 = $('.card_no').val();
    //$amcardinputwa=$('.addfund_walet').val();

    if (($amcardinput01 === "") || ($amcardinput01.length < 17)) {

        event.preventDefault();

    }
    if ($.isNumeric($('.card_no').val()) === false) {
        event.preventDefault();
        $('.number input').css('border-color', '#e80a0a');
        $('.group.number > span').show(500);
    }
});

// $(".next2").click(function(event){
//   checkboxvalidationtandc();
//   checkboxvalidation();
//   event.preventDefault();
// });
function checkboxvalidationtandc() {
    if ($(".check_input_tandc").is(':checked')) {
        $(".checkbox.tarms_and_condition_checkbox label").css('color', '#53585f');
		return true;
    } else {
        $(".checkbox.tarms_and_condition_checkbox label").css('color', '#e80a0a');
       return false;
    }
}
//minus_button


/*Start-Carousel-Kitchen-Landing*/
$(document).ready(function() {
    //Sort random function
    function random(owlSelector) {
        owlSelector.children().sort(function() {
            return Math.round(Math.random()) - 0.5;
        }).each(function() {
            $(this).appendTo(owlSelector);
        });
    }

    $("#owl-demo").owlCarousel({
        navigation: true,
        navigationText: [
            "<i class='fa fa-angle-left fa-4x icon-white'></i>",
            "<i class='fa fa-angle-right fa-4x icon-white'></i>"
        ],
        //Call beforeInit callback, elem parameter point to $("#owl-demo")
        beforeInit: function(elem) {
            random(elem);
        }

    });


});
/*End-Carousel-Kitchen-Landing*/

/*Start-Add-button-Code-Kitchen-landing*/
$(document).ready(function() {
    $gift_card = $(".last_gift_card_add");
    $(".last_gift_card_add").find(".add-but").css("pointer-events", "none");
    if ($gift_card.find(".customized_amount").val() === "undefined") {
        $(".last_gift_card_add").find(".add-but").css("pointer-events", "none");
    }
    $(document).delegate(".show-controls", "click", function() {

        $(this).hide();
        $(this).parent('.add-but').children('.controls-btn').show();
        $(this).parent('.add-but').children('.controls-btn1').show();
        $(this).parents(".prhighlight").addClass("pr1select");


    });

    $(".customized_amount").on("keydown", function() {
        $(this).parents(".last_gift_card_add").find(".add-but").css("pointer-events", "inherit");
    });

    $(document).delegate(".btn-number", "click", function(e) {

        e.preventDefault();

        fieldName = $(this).attr('data-field');
        type = $(this).attr('data-type');
        var input = $("input[name='" + fieldName + "']");
        var currentVal = parseInt(input.val());
        if (!isNaN(currentVal)) {
            if (type === 'minus') {

                if ((currentVal - 1) < 1) {
                    $(this).parents('.add-but').children('.controls-btn').hide();
                    $(this).parents('.add-but').children('.show-controls').show();
                    $(".last_gift_card_add .add-but").css('pointer-events', 'none');
                    $gift_card.find(".customized_amount").val("");



                }
                if (currentVal > input.attr('data-min')) {
                    input.val(currentVal - 1).change();
                }
                if (parseInt(input.val()) === input.attr('data-min')) {
                    //$(this).attr('disabled', true);
                }

            } else if (type === 'plus') {

                if (currentVal < input.attr('data-max')) {
                    input.val(currentVal + 1).change();
                }
                if (parseInt(input.val()) === input.attr('data-max')) {
                    $(this).attr('disabled', true);
                }

            }
        } else {
            input.val(0);
        }
    });
    $('.input-number').focusin(function() {
        $(this).data('oldValue', $(this).val());
    });
    $('.input-number').change(function() {

        minValue = parseInt($(this).attr('data-min'));
        maxValue = parseInt($(this).attr('data-max'));
        valueCurrent = parseInt($(this).val());

        name = $(this).attr('name');
        if (valueCurrent >= minValue) {
            $(".btn-number[data-type='minus'][data-field='" + name + "']").removeAttr('disabled');
        } else {
            alert('Sorry, the minimum value was reached');
            $(this).val($(this).data('oldValue'));
        }
        if (valueCurrent <= maxValue) {
            $(".btn-number[data-type='plus'][data-field='" + name + "']").removeAttr('disabled');
        } else {
            alert('Sorry, the maximum value was reached');
            $(this).val($(this).data('oldValue'));
        }


    });

    $(".input-number").keydown(function(e) {
        // Allow: backspace, delete, tab, escape, enter and .
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 190]) !== -1 ||
            // Allow: Ctrl+A
            (e.keyCode === 65 && e.ctrlKey === true) ||
            // Allow: home, end, left, right
            (e.keyCode >= 35 && e.keyCode <= 39)) {
            // let it happen, don't do anything
            return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
    });

});
/*End-Add-button-Code-Kitchen-landing*/

/*----Start--Create-Recipe-Add-Step-Add-Ingredient----*/

$(".prep_time li a").click(function() {
    $myClass = $(this).text();
    $(".time_prep span.interval").text($myClass);
});
$(".cook_time li a").click(function() {
    $myClass = $(this).text();
    $(".time_cook span.interval").text($myClass);
});
$(".veg_nonveg_option li a").click(function() {
    $myClass = $(this).text();
    $(".veg_nonveg_selected span.interval").text($myClass);
});
$(".cuisine_option li a").click(function() {
    $myClass = $(this).text();
    $(".cuisine_selected span.interval").text($myClass);
});
$(".pbank_option li a").click(function() {
    $myClass = $(this).text();
    $(".pbank_selected span.interval").text($myClass);
});
$(document).delegate(".ingred_drop_items li a", "click", function() {
    $myClass = $(this).text();
    $(this).parents(".ingredient_qty").find(".interval").text($myClass);
});

$("input.recipe_title").focus(function() {
    $('input.recipe_title').css('border-color', '#d2d4d4');
    $(".title_name_create").hide();
});
$("input.recipe_title").blur(function() {
    if (($('input.recipe_title').val() === '') || ($('input.recipe_title').val().length < 3) || ($.trim($("input.recipe_title").val()).length < 2)) {
        $('input.recipe_title').css('border-color', '#e80a0a');
        $(".title_name_create").show().css("color", "#e80a0a");
    }



});
$("input.serves").focus(function() {
    $('input.serves').css('border-color', '#d2d4d4');
    $(this).parent().find(".valid_input").hide();

});
$("input.serves").blur(function() {
    if (($('input.serves').val() === '') || ($.isNumeric($('input.serves').val()) === false)) {
        $('input.serves').css('border-color', '#e80a0a');
        $(this).parent().find(".valid_input").show().css("color", "#e80a0a");
    }


});
$("input.prep_time").focus(function() {
    $('input.prep_time,.duration_prep').css('border-bottom', '1px solid #d2d4d4');
    $(this).parent().find(".valid_input").hide();

});
$("input.prep_time").blur(function() {

    if (($('input.prep_time').val() < 1) || ($.isNumeric($('input.prep_time').val()) === false))

    {
        $('input.prep_time, .duration_prep').css('border-bottom', '1px solid #e80a0a');
        $(this).parent().find(".valid_input").show().css("color", "#e80a0a");
    }

    if ((($("input.prep_time").val()).charAt(0) === "-") || ((($("input.prep_time").val()).charAt(0)) === "+")) {
        $('input.prep_time, .duration_prep').css('border-bottom', '1px solid #e80a0a');
        $(this).parent().find(".valid_input").show().css("color", "#e80a0a");
    }

});
$("input.cook_time").focus(function() {

    {
        $('input.cook_time, .duration_cook').css('border-bottom', '1px solid #d2d4d4');
        $(this).parent().find(".valid_input").hide();
    }
});
$("input.cook_time").blur(function() {
    if (($('input.cook_time').val() < 1) || ($.isNumeric($('input.cook_time').val()) === false)) {
        $('input.cook_time, .duration_cook').css('border-bottom', '1px solid #e80a0a');


        $(this).parent().find(".valid_input").show().css("color", "#e80a0a");



    }
    if ((($("input.cook_time").val()).charAt(0) === "-") || ((($("input.cook_time").val()).charAt(0)) === "+")) {
        $('input.cook_time, .duration_cook').css('border-bottom', '1px solid #e80a0a');


        $(this).parent().find(".valid_input").show().css("color", "#e80a0a");
    }
});
$(document).delegate("input.qunatity_ingredient", "focus", function() {

    $(this).css("border-bottom", "1px solid #d2d4d4");
    $(this).parent().find(".valid_input").hide().css("color", "#d2d4d4");

});
$(document).delegate("input.qunatity_ingredient", "blur", function() {

    if (($(this).val() === '') || ($.isNumeric($(this).val()) === false) || ($.trim($(this).val()).length < 1) || (/^[a-zA-Z0-9- ]*$/.test($(this).val()) === false)) {
        $(this).css("border-bottom", "1px solid #e80a0a");
        $(this).parent().find(".valid_input").show().css("color", "#e80a0a");

    }

    if ((($(this).val()).charAt(0) === "-") || (($(this).val()).charAt(0) === "+")) {
        $(this).css("border-bottom", "1px solid #e80a0a");
        $(this).parent().find(".valid_input").show().css("color", "#e80a0a");
    }



});
$(document).delegate("input.add_step", "focus", function() {

    $(this).css("border-bottom", "1px solid #d2d4d4");
    $(this).parents(".add_step_form_left").find(".valid_input").hide().css("color", "#d2d4d4");

});
$(document).delegate("input.add_step", "blur", function() {

    if (($(this).val() === '')) {
        $(this).css("border-bottom", "1px solid #e80a0a");
        $(this).parents(".add_step_form_left").find(".valid_input").show().css("color", "#e80a0a");

    }



});
$('select[name="veg-nonveg"]').change(function() {
    if (($('select[name="veg-nonveg"]').val() === "Select")) {
        $('.veg-nonveg').css('border-bottom', '1px solid #e80a0a');
    } else {
        $('.veg-nonveg').css('border-bottom', '1px solid #d2d4d4');

    }
});
$("select[name='cuisine']").change(function() {
    if (($('select[name="cuisine"]').val() === "Select")) {
        $('.cuisine').css('border-bottom', '1px solid #e80a0a');
    } else {
        $('.cuisine').css('border-bottom', '1px solid #d2d4d4');

    }
});
$(document).delegate(".add_ingre_val", "blur", function() {
    if (($('input.add_ingre_val').val() === '')) {
        $('.add_ingre_val').css('border-bottom', '1px solid #e80a0a');
        $(this).parent().find(".valid_input").show().css("color", "#e80a0a");
    }
});
$(document).delegate(".add_ingre_val", "focus", function() {
    $(this).parents('.add_ingredient').find(".add_ingre_val").css('border-bottom', '1px solid #d2d4d4');
    $(this).parent().find(".valid_input").hide().css("color", "#d2d4d4");

});
$(".btn-publish-button").click(function(event) {

    if (($('input.recipe_title').val() === '') || ($('input.recipe_title').val().length < 3) || ($.trim($("input.recipe_title").val()).length < 2)) {
        $('input.recipe_title').css('border-color', '#e80a0a');
        $(".title_name_create").show().css("color", "#e80a0a");
        window.scrollTo(500, 500);
        event.preventDefault();

    }
    if (($('input.serves').val() === '') || ($.isNumeric($('input.serves').val()) === false)) {
        $('input.serves').css('border-color', '#e80a0a');
        $(".serves").next().show().css("color", "#e80a0a");
        window.scrollTo(500, 500);
        event.preventDefault();

    }
    if (($('input.prep_time').val() === '') || ($.isNumeric($('input.prep_time').val()) === false)) {
        $('input.prep_time, .duration_prep').css('border-bottom', '1px solid #e80a0a');
        $("ul.prep_time").next().show().css("color", "#e80a0a");
        window.scrollTo(500, 500);
        event.preventDefault();

    }
    if (($('input.cook_time').val() === '') || ($.isNumeric($('input.cook_time').val()) === false)) {
        $('input.cook_time, .duration_cook').css('border-bottom', '1px solid #e80a0a');
        $("ul.cook_time").next().show().css("color", "#e80a0a");
        window.scrollTo(500, 500);
        event.preventDefault();

    }

    if (($('select[name="veg-nonveg"]').val() === "Select")) {
        $('.veg-nonveg').css('border-bottom', '1px solid #e80a0a');
        window.scrollTo(500, 500);
        event.preventDefault();

    }
    if (($('select[name="cuisine"]').val() === "Select")) {
        $('.cuisine').css('border-bottom', '1px solid #e80a0a');
        window.scrollTo(500, 500);
        event.preventDefault();


    }
    if (($('input.qunatity_ingredient').val() === '') || ($.isNumeric($('input.qunatity_ingredient').val()) === false) || (/^[a-zA-Z0-9- ]*$/.test($('input.qunatity_ingredient').val()) === false)) {
        $('.qunatity_ingredient').css('border-bottom', '1px solid #e80a0a');
        $(".ingred_drop_items").next().show().css("color", "#e80a0a");
        window.scrollTo(500, 500);
        event.preventDefault();
    }
    if (($('input.add_ingre_val').val() === '')) {
        $('.add_ingre_val').css('border-bottom', '1px solid #e80a0a');
        $(".add_ingre_val").next().show().css("color", "#e80a0a");
        window.scrollTo(500, 500);
        event.preventDefault();

    }
    if (($('input.add_step').val() === '')) {
        $('.add_step').css('border-bottom', '1px solid #e80a0a');
        $(".add_step_form_input").next().show().css({
            "color": "#e80a0a"
        });
        window.scrollTo(500, 500);
        event.preventDefault();

    }


});


$(function() {

    $('.start-creating').click(function() {
        $(this).parent().hide();
        $('.add_ingredient_form_main').show();
    });

    /*----Start-Add-More-Ingredient----*/
    var i = 1;
    $('.add_row').click(function() {
        $('.addr' + i).html("<div class='col-lg-6 col-md-6 col-sm-6 col-xs-6 ingredient_input'><input type='text' placeholder='Add Ingredient' class='add_ingre_val'><p class='valid_input'>Enter an ingredient name</p></div>" + "<div class='col-lg-4 col-md-4 col-sm-4 col-xs-5 ingredient_qty no_padding_right'><div class='create_recipe_input_drop_down'><input name='ingredient_amount" + (i) + "' class='qunatity_ingredient' type='text' maxlength='4' placeholder='0'> <button type='button' class='btn btn-default dropdown-toggle ingred_drop' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'><span class='interval'>g</span> <span class='caret'></span></button>  <ul class='dropdown-menu dropdown-menu-right ingred_drop_items'><li><a class='myAnchor' href='#'>g</a></li><li><a class='myAnchor' href='#'>l</a></li><li><a class='myAnchor' href='#'>ml</a></li><li><a class='myAnchor' href='#'>tbsp</a></li></ul><p class='valid_input'>Please enter a valid input</p></div></div>" + "<div class='col-lg-2 col-md-2 col-sm-2 col-xs-1 ingredient_remove addIng-lastdiv no_padding '><span class='cross0 create_cross_icon create_close_btn'></span></div>");
        $('.tab_logic').append('<div class="add_ingredient addr' + (i + 1) + ' "></div>');
        i++;
    });
    $('.input-addIng').delegate('.cross0', 'click', function(e) {
        $(this).parents(".add_ingredient").remove();
    });
});

/*------Start-Add-More-Step-------*/
$(function() {
    $('.add').click(function() {
        $('.block:last').before('<div class="block add_step_form"><div class="add_step_form_left"><span class="add_step_form_heading">Step</span><span class="add_step_form_input"><input type="text" placeholder="Add Step" class="add_step"></span><p class="valid_input">Please enter a valid input</p></div><span class="remove"><span class="create_cross_icon create_close_btn"></span></span><span class="add_step_form_add_photo" onclick="openFileOption2();return;"><input type="file" id="file2" style="display:none"></span></div>');
    });
    $('.optionBox').on('click', '.remove', function() {
        $(this).parent().remove();
    });
});
/*----End--Create-Recipe-Add-Step-Add-Ingredient----*/

/*--Start--Share-Tip-Tags--*/
$(function() {
    $('#tags_3').tagsInput({
        width: 'auto',
    });
});

/*--End--Share-Tip-Tags--*/



/**-----Start-Rating-Function-Video-Detail-Page-----*/
if ($('#rateYo')) {
    $(function() {
        $("#rateYo").rateYo({
            starWidth: "20px"
        });
    });
}

/**-----End-Rating-Function-Video-Detail-Page-----*/

/*---Start--Review-Comments-Readmore-Finction----*/
jQuery(function() {

    var minimized_elements = $('span.minimize');

    minimized_elements.each(function() {
        var t = $(this).text();
        if (t.length < 100) return;

        $(this).html(
            t.slice(0, 100) + '<span>... </span><a href="#" class="more">More</a>' +
            '<span style="display:none;">' + t.slice(120, t.length) + ' <a href="#" class="less">Less</a></span>'
        );

    });

    $('a.more', minimized_elements).click(function(event) {
        event.preventDefault();
        $(this).hide().prev().hide();
        $(this).next().show();
    });

    $('a.less', minimized_elements).click(function(event) {
        event.preventDefault();
        $(this).parent().hide().prev().show().prev().show();
    });

});

jQuery(function() {

    var minimized_elements = $('.view_all_review');

    minimized_elements.each(function() {
        var t = $(this).text();
        if (t.length < 120) return;

        $(this).html(
            t.slice(0, 120) + '<span>... </span><a href="#" class="more">View All Reviews</a>' +
            '<span style="display:none;">' + t.slice(120, t.length) + ' <a href="#" class="less">Less</a></span>'
        );

    });

    $('a.more', minimized_elements).click(function(event) {
        event.preventDefault();
        $(this).hide().prev().hide();
        $(this).next().show();
    });

    $('a.less', minimized_elements).click(function(event) {
        event.preventDefault();
        $(this).parent().hide().prev().show().prev().show();
    });

});
/*---End--Review-Comments-Readmore-Finction----*/

/*---Start--Recipe-Detail-Circles---*/
$(document).ready(function() {
    $(".slide-toggle").click(function() {
        $(".box").animate({
            width: "toggle"
        });
    });
});
$(document).ready(function() {
    $('#select_checkbox_n').on('click', function() {
        $('#select_checkbox_nb').prop('checked', false);
        if (this.checked) {
            $('.check_input_recipe').each(function() {
                this.checked = true;
            });
        } else {
            $('.check_input_recipe').each(function() {
                this.checked = false;
            });
        }
    });
    $('#select_checkbox_nb').on('click', function() {
        $('#select_checkbox_n').prop('checked', false);
        if (this.checked) {
            $('.check_input_recipe').each(function() {
                this.checked = true;
            });
        } else {
            $('.check_input_recipe').each(function() {
                this.checked = false;
            });
        }
    });
    $('.check_input_recipe').on('click', function() {
        if ($('.check_input_recipe:checked').length === $('.check_input_recipe').length) {
            $('#select_checkbox_n').prop('checked', true);
            $('#select_checkbox_nb').prop('checked', true);
        } else {
            $('#select_checkbox_n').prop('checked', false);
            $('#select_checkbox_nb').prop('checked', false);
        }
    });

});
$(document).ready(function() {
    $(".similar_product_dropdown_link").click(function() {
        //alert("heello");
        $simprd = $(this).offset().top;
		$similar_left_pos=$(this).offset().left;
		$(".recipe-detail_show_similar_products_arrow-up, .recipe-detail_show_similar_products_arrow-up_2").css({"left":$similar_left_pos, "position":"relative"});
        if ($(window).width() > 767) {

            $(this).parents(".similar_product_dropdown").find(".similar_product_link").css({
                "top": $simprd + 40,
                "position": "initial"
            });
        } else {
            $(this).parents(".similar_product_dropdown").find(".similar_product_link").css({
                "top": $simprd + 40,
                "position": "absolute"
            });
        }
    });


    $("#type").roundSlider({
        value: 45
    });
    $("#shape1").roundSlider({
        value: 80,
        sliderType: "min-range",
        startAngle: "90"
    });
    $("#shape2").roundSlider({
        value: "50",
        sliderType: "min-range",
        startAngle: "90"
    });
    $("#shape3").roundSlider({
        value: "60",
        sliderType: "min-range",
        startAngle: "90"
    });
    $("#shape4").roundSlider({
        value: "70",
        sliderType: "min-range",
        startAngle: "90"
    });
    $shape1value = "<div class='recipe_detail_shape'>" + "Cal<span style='color:#eeb865;display:block;font-size:15px;'>6.2kg</span>" + "</div>";
    $("#shape1 .rs-inner").html($shape1value);
    $shape2value = "<div class='recipe_detail_shape'>" + "Protein<span style='color:#f38f1e;display:block;font-size:15px;'>24g</span>" + "</div>";
    $("#shape2 .rs-inner").html($shape2value);
    $shape3value = "<div class='recipe_detail_shape'>" + "Fat<span style='color:#83d7c0;display:block;font-size:15px;'>50g</span>" + "</div>";
    $("#shape3 .rs-inner").html($shape3value);
    $shape4value = "<div class='recipe_detail_shape'>" + "Carb<span style='color:#a5d2e7;display:block;font-size:15px;'>70g</span>" + "</div>";
    $("#shape4 .rs-inner").html($shape4value);
    $("#shape1, #shape2,#shape3, #shape4").roundSlider("disable");
    //	$("	.rs-bar").unbind('mouseenter');
    //$('.rs-move').prop('disabled', true);

});

function sliderTypeChanged(e) {
    $("#type").roundSlider({
        sliderType: e.value
    });
}

function sliderShapeChanged(e) {
    var options = {
        circleShape: e.value
    };
    if (e.value === "pie") options["startAngle"] = 0;
    else if (e.value === "custom-quarter" || e.value === "custom-half") options["startAngle"] = 45;
    $("#shape").roundSlider(options);
}
/*---End--Recipe-Detail-Circle-Shapes---*/

/*---Start--Recipe-Detail-Similar-products-Carosal---*/
$(document).ready(function($) {

    $("#owl-demo-similar-products1").owlCarousel({
        navigation: true,
        navigationText: [
            "<i class='fa fa-angle-left fa-4x'></i>",
            "<i class='fa fa-angle-right fa-4x'></i>"
        ],
        items: 2,
        itemsCustom: false,
        itemsDesktop: [1199, 2],
        itemsDesktopSmall: [980, 2],
        itemsTablet: [768, 2],
        itemsTabletSmall: [767, 2],
        itemsMobile: [479, 1],
        singleItem: false,
        itemsScaleUp: false,
        navigation: true,
        rewindNav: false,
        pagination: false

    });
});

$(document).ready(function($) {
    $("#owl-demo-similar-products2").owlCarousel({
        navigation: true,
        navigationText: [
            "<i class='fa fa-angle-left fa-3x'></i>",
            "<i class='fa fa-angle-right fa-3x'></i>"
        ],
        items: 2,
        itemsCustom: false,
        itemsDesktop: [1199, 2],
        itemsDesktopSmall: [980, 2],
        itemsTablet: [768, 2],
        itemsTabletSmall: [767, 2],
        itemsMobile: [479, 1],
        singleItem: false,
        itemsScaleUp: false,
        navigation: true,
        rewindNav: false,
        pagination: false

    });
});
$(document).ready(function($) {
    $("#owl-demo-home").owlCarousel({
        navigation: true,
        navigationText: [
            "<i class='fa fa-angle-left fa-3x'></i>",
            "<i class='fa fa-angle-right fa-3x'></i>"
        ],
        items: 5,
        itemsCustom: false,
    });
});
$(document).ready(function($) {
    $("#owl-demo-similar-products3").owlCarousel({
        navigation: true,
        navigationText: [
            "<i class='fa fa-angle-left fa-3x'></i>",
            "<i class='fa fa-angle-right fa-3x'></i>"
        ],
        items: 2,
        itemsCustom: false,
        itemsDesktop: [1199, 2],
        itemsDesktopSmall: [980, 2],
        itemsTablet: [768, 2],
        itemsTabletSmall: [767, 2],
        itemsMobile: [479, 1],
        singleItem: false,
        itemsScaleUp: false,
        navigation: true,
        rewindNav: false,
        pagination: false

    });
});

$(document).ready(function($) {
    $("#owl-demo-similar-products4").owlCarousel({
        navigation: true,
        navigationText: [
            "<i class='fa fa-angle-left fa-3x'></i>",
            "<i class='fa fa-angle-right fa-3x'></i>"
        ],
        items: 2,
        itemsCustom: false,
        itemsDesktop: [1199, 2],
        itemsDesktopSmall: [980, 2],
        itemsTablet: [768, 2],
        itemsTabletSmall: [767, 2],
        itemsMobile: [479, 1],
        singleItem: false,
        itemsScaleUp: false,
        navigation: true,
        rewindNav: false,
        pagination: false

    });
});
/*---End--Recipe-Detail-Similar-products-Carosal---*/

/*---Start--Recipe-Detail-Select-All-Checkbox---*/
$(function() {
    $('.select_all_checkbox').click(function() {
        $(this).toggleClass('class_checkbox_all');
        $(this).toggleClass('class_checkbox_2');
        $('.select_all_checkbox').find("class_checkbox").addClass("1");
        if ($(this).hasClass('class_checkbox_2')) {
            $('.must_have_list').find(".class_checkbox").addClass("class_checkbox_2").removeClass('class_checkbox');
        } else {
            $('.must_have_list').find(".class_checkbox_2").addClass("class_checkbox").removeClass('class_checkbox_2');
        }
    });
    $('.class_checkbox').click(function() {
        $(this).toggleClass('class_checkbox');
        $(this).toggleClass('class_checkbox_2');
    });
});
/*---End--Recipe-Detail-Select-All-Checkbox---*/

/*---Start-Code-by-Upendra---
$(document).ready(function() {
    $('.panel-heading').click(function() {
        $('.dropdown .dropdown-menu.my_dropdown .accordion-outer-box').parent().addClass('accordian-block');
        $('.arrow_left_accordion').toggleClass('arrow_left_accordionrotate');
    })
});*/
/*---End-Code-by-Upendra---*/

/*--Start--Share-Tip-Preview-Code---*/
$(function() {
    $("#change_text").click(function() {
        $("a.btn-publish").hide();
        $('#toaste_message').fadeIn(1000);
        setTimeout("$('#toaste_message').fadeOut(1000);", 5000);
    });
});
/*--End--Share-Tip-Preview-Code---*/

/*--Start--Share-Tip-Textarea-Expand-Collapse---*/
$(function() {
    $('textarea.expand').focus(function() {
        $(this).animate({
            height: "100px"
        }, 500);
    });
    $('textarea.expand').blur(function() {
        $(this).animate({
            height: "37px"
        }, 500);
    });
});
/*--End--Share-Tip-Textarea-Expand-Collapse---*/
/*--Start-View-All-Review-Text-Change---*/
$(function() {
    $('#hide_reviews').click(function() {
        if ($(this).text() === "View All Reviews") {
            $(this).text("Hide Reviews");
        } else {
            $(this).text("View All Reviews");
        }
    });
});
/*--End-View-All-Review-Text-Change---*/
/*nirdesh_start*/
$(document).ready(function() {
    /*  $('.panel-heading').click(function() {
          $('.dropdown .dropdown-menu.my_dropdown .accordion-outer-box').parent().addClass('accordian-block');
      })*/
    var mywindow = $(window);
    var mypos = mywindow.scrollTop();
    var up = false;
    var newscroll;
    mywindow.scroll(function() {
        newscroll = mywindow.scrollTop();
        if (newscroll > 100 && !up) {
            if (respo === 1) {
                sb = parseInt($(".acount_header").innerHeight() + $(".search_box").height());
                $('.search_box').css('display', "none");

            }
            $('.sub_header').stop().slideToggle();
            $('.header_part').addClass('c_up');
            $('.homepage').css('margin-top', '71px');
            up = !up;
            //console.log(up);
            sh1 = $('.search_box').innerHeight();
            sh2 = $('.container_super .container').innerHeight();

            if (sh1 > sh2) {
                stic_h = sh1;
            } else {
                stic_h = sh2;
            }

            $('.search_box.col-sm-5').css({
                "margin-top": "0",
                "padding": "8px 0 0"
            });
            $('.header_part').css({
                "height": stic_h,
                "margin-top": "0",
                "box-shadow": "0 5px 20px 1px rgba(95, 95, 95, 0.15)"
            });
			 $('.breadcrumb').css({
               "margin": "0px 0 20px 0",
            });
            $('.header_logo img').css({
                "margin-top": "8px",
                "width": "43%"
            });
            $('.right_header.col-sm-4').css({
                "margin-top": "17px"
            });
            $('.sidebar-brand .hamburger').css({
                "margin-top": "2px"
            });
            $('.dropdown-menu.my_dropdown').css({
                "top": "43px"
            });

            //  $('.search_icon').css({ "top": "26px"});
        } else if (newscroll < 100 && up) {

            if (respo === 1) {

                if (parseInt($('.expert_corner_banner_row').css('margin-top')) === sb) {
                    $('.search_box').css('display', "block");
                }
            }

            $('.sub_header').stop().slideToggle();
            $('.header_part').removeClass('c_up');
            up = !up;
            $('.homepage').css('margin-top', '140px');
            $('.header_part').css({
                "height": "auto",
                "margin-top": "8px",
                "box-shadow": "none"
            });
			 $('.breadcrumb').css({
               "margin": "0 0 20px 0",
            });
            $('.search_box.col-sm-5').css({
                "margin-top": "8px",
                "padding": "18px 0 0"
            });
            $('.header_logo img').css({
                "margin-top": "13px",
                "width": "50%"
            });
            $('.right_header.col-sm-4').css({
                "margin-top": "20px"
            });
            $('.sidebar-brand .hamburger').css({
                "margin-top": "9px"
            });
            $('.dropdown-menu.my_dropdown').css({
                "top": "55px"
            });
            //  $('.search_icon').css({ "top": "26px"});
            $('#sidebar-wrapper').css('top', $(".acount_header").height());

        }
        mypos = newscroll;
    });
});
/*nirdesh_end*/

/*--Start--Video-Read-More-Text--*/

$(document).ready(function() {
    $("a.video_square_read_more").click(function() {
        $("#video_square_read_more_text").toggle();
    });
});
$(function() {
    $('#video_square_readmore_text_change').click(function() {
        if ($(this).text() === "More") {
            $(this).text("Less");
        } else {
            $(this).text("More");
        }
    });
});
/*--Start--Video-Read-More-Text--*/

/*---Start-Call-footer-Dynamic---*/
$(function() {
    $(".footer_ajax").load("footer.php");
    $(".what_new_product").load("what_new_product.php");
});
/*---End-Call-footer-Dynamic---*/
/*on_page_load_popup*/
  $(document).ready(function(){
  		$("#popup5").modal('show');
  	});
/*on_page_load_popup_end*/


/*---Start--Toggle-Wishlist-Icon---*/
$(function() {
    $('.whats_new_wishlist_icon').click(function() {
        $(this).toggleClass('whats_new_wishlist_icon_active');
    });
    $('.trending_recipes_inner_wishlist_icon').click(function() {
        $(this).toggleClass('trending_recipes_inner_wishlist_icon_active');
    });
    $('.whats_new_video_wishlist_icon').click(function() {
        $(this).toggleClass('whats_new_video_wishlist_icon_active');
    });
    $('.whats_new_video_wishlist_icon_2').click(function() {
        $(this).toggleClass('whats_new_video_wishlist_icon_2_active');
    });
    $('.tip_text_center_pic1').click(function() {
        $(this).toggleClass('tip_text_center_pic1_active');
    });
    $('.cookbook-icon').click(function() {
        $(this).toggleClass('cookbook-icon_active');
    });
});
/*---End--Toggle-Wishlist-Icon---*/
/*--Start--Tooltip--*/
$("body").tooltip({
    selector: '[data-toggle="tooltip"]'
});
/*--End--Tooltip--*/


$('.customized_amount').keyup(AllowOnlyNumber).blur(OnlyNumber);

function AllowOnlyNumber() {

    var $gift_val = $(this).val();
    var no_nonnumerals = $gift_val.replace(/[^0-9]/g, '');
    $(this).val(no_nonnumerals);
}

function OnlyNumber() {
    var $gift_val = $(this).val();
    if (($gift_val === "") || ($gift_val === "undefined") || ($gift_val === 0)) {
        $(this).parents('.last_gift_card_add').find(".add-but").css('pointer-events', 'none');
    }

}

function isNumber(evt) {

    evt = (evt) ? evt : window.event;
    var $charCodeVal = String.fromCharCode(evt.which); //alert($charCodeVal);
    //  $( ".customized_amount" ).attr( "value", $charCodeVal );
    var charCode = (evt.which) ? evt.which : evt.keyCode;

    if (charCode !== 8 &&
        charCode !== 9 &&
        charCode !== 35 &&
        charCode !== 36 &&
        charCode !== 46 &&
        charCode !== 37 &&
        charCode !== 39 &&
        charCode !== 97 &&
        charCode !== 99 &&
        charCode !== 118 &&
        charCode !== 120 &&
        (charCode < 48 || charCode > 57)) {

        return false;
    }

    if ($charCodeVal !== '') {
        $('.last_gift_card_add .show-controls').show();
        $('.last_gift_card_add .controls-btn').hide();
        $('.last_gift_card_add .myAnchor.show-controls').css('pointer-events', 'inherit');
    } else {

        $('.last_gift_card_add .show-controls').hide();
        $('.last_gift_card_add .controls-btn').show();
    }
    if (charCode === 8) {
        $('.last_gift_card_add .myAnchor.show-controls').css('pointer-events', 'inherit');
    }


}

function isNumberCvv(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode !== 8 &&
        charCode !== 9 &&
        charCode !== 35 &&
        charCode !== 36 &&
        charCode !== 46 &&
        charCode !== 37 &&
        charCode !== 39 &&
        charCode !== 97 &&
        charCode !== 99 &&
        charCode !== 118 &&
        charCode !== 120 &&
        (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}
$('.banks_listings li').click(function() {
    //$('#select_box_netbanking').val('');

    $(".pbank_selected span.interval").text("Select Other Bank");
});




/*--Start--Sticky-Footer--*/
$(function() {
    var prev = 0;
    var $window = $(window);
    var nav = $('.nav');

    $window.on('scroll', function() {
        var scrollTop = $window.scrollTop();
        nav.toggleClass('hidden', scrollTop > prev);
        prev = scrollTop;
    });
});

/*--Start--Sticky-Footer--*/

/*--Start--Recipe-Detail-Toaste-Message---*/
$(function() {
    $(".add_shopping_list").click(function() {
        $('.toaste_message_recipe').fadeIn(1000);
        setTimeout("$('.toaste_message_recipe').fadeOut(1000);", 5000);
    });
});
/*--End--Recipe-Detail-Toaste-Message---*/

/*--Start--Recipe-Detail-Print-Function--*/
function print_page() {
    window.print();
}
/*--End--Recipe-Detail-Print-Function--*/
/*--Start--Recipe-Detail-Similar-Products--*/
$(document).ready(function() {
    $('div.similar_product_dropdown').each(function() {
        var $dropdown = $(this);
        $("a.similar_product_dropdown_link", $dropdown).click(function(e) {
            e.preventDefault();
            var visibleTest = $("div.similar_product_link", $dropdown).is(':visible');
            $("div.similar_product_link").hide();
            if (!visibleTest) $("div.similar_product_link", $dropdown).toggle();
            return false;
        });
    });
    $('span.similar_product_close').click(function() {
        $("div.similar_product_link").hide();
    });
});

/*--End--Recipe-Detail-Similar-Products--*/
/*--Start--Header-Reaponsive-Search--*/
$(document).ready(function() {
    $(".resp_search_icon").click(function() {
        respo = 1;
        $(".search_box.col-sm-6").toggle();
        if ($(".search_box.col-sm-6").is(":visible")) {
            $('.search_box').css('top', ($(".acount_header").height()));
            $('.expert_corner_banner_row').css('margin-top', $(".acount_header").height() + $(".search_box").height());
        } else {
            $('.search_box').css('top', ($(".acount_header").height()));
            $('.expert_corner_banner_row').css('margin-top', $(".acount_header").innerHeight());
        }

    });
    $("html").keydown(function(event) {
        if ($('body').hasClass('scrl')) {
            switch (event.keyCode) {
                //case 32: //space
                case 33: //pgup
                case 34: //pgdn
                case 35: //end
                case 36: //home
                case 37: //left
                case 38: //up
                case 39: //right
                case 40: //down
                    return false;
            }
        }
    });
});
/*--End--Header-Reaponsive-Search--*/

/*--Header-Page-jQuery to collapse the navbar on scroll--*/
$(window).scroll(function() {
    if ($(".navbar").length > 0) {
        if ($(".navbar").offset().top > 50) {
            $(".navbar-fixed-top").addClass("top-nav-collapse");
        } else {
            $(".navbar-fixed-top").removeClass("top-nav-collapse");
        }
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

/*--Faq-Collapse-Menu--*/
$(".accordionGroup .accordion-toggle").click(function(){
	$(this).closest(".accordionGroup .accordion-toggle").toggleClass('open');
});

$('a.forgetPass').on('click', function(){
    $('#loginview').addClass('hidelogin');
});

$(".RetrieveBtn").click(function(){
        $("p.PasswordSent").show();
});

$(".loginBtn").click(function(){
        $(".loginWelShow").show();
		$('#loginview').addClass('hidelogin1');
		$('.leftloginMenu').addClass('hideleftmenu');
});

$(".sendotpBtn").click(function(){
        $("#OtpView").show();
		$("#SignUpView").hide();
});

$(function(){
	if ($('#s_timer'))
	{
		$('#s_timer').countdowntimer({
	seconds :25,
	size : "lg"
	});
	}
});

$(document).ready(function(){
        $("a.locateIcon").click(function(event){
            event.preventDefault();
            $("input#locateme").val("122022");
        });
		});

$("#delivery_location_popup").click(function(){
        $(".deliveryLocation").show();
		$(".leftloginMenu").hide();
		$(".midloginImg").hide();
		$(".loginForm").hide();
});

function toggleIcon(e) {
    $(e.target)
        .prev('.panel-heading')
        .find(".more-less")
        .toggleClass('arrowPlus arrowMinus');
}
$('.panel-group').on('hidden.bs.collapse', toggleIcon);
$('.panel-group').on('shown.bs.collapse', toggleIcon);


$(".loginLink").click(function(){
        $(".mainloginPopup").show();
		$(".deliveryLocation").hide();
});

$("#SelectDeliveryLocation").click(function(){
        $(".SelectDeliveryError").show();
		$(".SelectDelivery").hide();
});



/*---Bhuvnesh-Hide-Show-Order-History----*/
$(document).ready(function () {
    $(".down_arrow").on("click", function (e) {
        $(this).toggleClass("expanded");
        $('.home_order_hide').toggle();

    });
});

jQuery('.numbersOnly').keyup(function () {
    this.value = this.value.replace(/[^0-9\.]/g,'');
});

/*$(".loginLink").click(function(){
        $(".mainloginPopup").addClass("loginShow1");

});*/

(function () {
  var count = 0;

  $('.loginLink').click(function () {
    count += 1;

    if (count >= 2) {
      // come code
      $('.mainloginPopup').toggleClass('loginShow1');
	  $(".loginShow1 .nav li:even").removeClass("active");
	  $(".loginShow1 .nav li:odd").addClass("active");
	  $(".loginForm .tab-content > div:even").removeClass("active");
	  $(".loginForm .tab-content > div:odd").addClass("active");

    }
  });
})();

(function () {
  var count1 = 0;

  $('#delivery_location_popup').click(function () {
    count1 += 1;

    if (count1 >= 2) {
      // come code
      $('.mainloginPopup').removeClass('loginShow1');
    }
  });
})();

$(".loginLink").click(function(){
  $(".login_modal_dialog").removeClass("login_modal_dialog_delivery");
});

$("#delivery_location_popup").click(function(){
  $(".login_modal_dialog").addClass("login_modal_dialog_delivery");
});

/*Address popup validation */

$(".address_fullame").focus(function() {
    $('.address_fullame').css('border-color', '#c5c5c5');
    $('.error_email_phone').hide();
});
$(".address_fullame").blur(function() {
	
  if ($('.address_fullame').val().length == 0) {
      $('.address_fullame').css('border-color', '#e80a0a');
      $('.error_email_phone').show();
  }
});

$(".address_validation").focus(function() {
    $('.address_validation').css('border-color', '#c5c5c5');
    $('.error_address_phone').hide();
});
$(".address_validation").blur(function() {
	
  if ($('.address_validation').val().length == 0) {
      $('.address_validation').css('border-color', '#e80a0a');
      $('.error_address_phone').show();
  }
});
$(".address_street").focus(function() {
    $('.address_street').css('border-color', '#c5c5c5');
    $('.error_address_street').hide();
});
$(".address_street").blur(function() {
	
  if ($('.address_street').val().length == 0) {
      $('.address_street').css('border-color', '#e80a0a');
      $('.error_address_street').show();
  }
});

$(".address_city").focus(function() {
    $('.address_city').css('border-color', '#c5c5c5');
    $('.error_address_city').hide();
});
$(".address_city").blur(function() {
	
  if ($('.address_city').val().length == 0) {
      $('.address_city').css('border-color', '#e80a0a');
      $('.error_address_city').show();
  }
});

$(".address_phone").focus(function() {
    $('.address_phone').css('border-color', '#c5c5c5');
    $('.error_address_phonenumber').hide();
});
$(".address_phone").blur(function() {
	
  if ($('.address_phone').val().length == 0) {
      $('.address_phone').css('border-color', '#e80a0a');
      $('.error_address_phonenumber').show();
  }
});

/*Address popup validation */

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 100) {
        $("body").css("margin-top", 100);
    } else {
        $("body").removeClass("headerScroll");
    }
});

$(".resp_search_icon").click(function(){
  $(".expert_corner_banner_row").toggleClass("mobileMargin");
});


jQuery(document).ready(function($) {
    //$(".test").addClass("mobile");
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll >= 50) {
        $(".expert_corner_banner_row").removeClass("mobileMargin");
        } else if (scroll <= 50) {
        $(".expert_corner_banner_row").removeClass("mobileMargin");
        }
    });
});