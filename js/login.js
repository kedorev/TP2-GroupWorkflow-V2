/**
 * Created by apprenant on 16/11/16.
 */
jQuery(document).ready(function(){
    if(localStorage.getItem('user') == null)
    {
        show_login()
    }
    else
    {
        show_logout()
    }


    $( "#login" ).click(function(e) {
        var person = $("#user-name").val();
        localStorage.setItem('user',person);
        show_logout()
    });


    $( "#logout" ).click(function(e) {
        localStorage.removeItem('user');
        show_login();
    });
});

function show_login()
{
    $('#overlay').show();
    $("#logout").hide();
    $("#login").show();
    $("#user_info").hide();
}

function show_logout()
{
    $("#user").text("Welcome "+localStorage.getItem('user'));
    $("#login").hide();
    $("#logout").show();
    $("#user_info").show();
    $("#overlay").hide();
}



$('.signin').hover(function() {}, function() {
    $(this).addClass('animateout');
    setTimeout(function() {
        $('.signin').removeClass('animateout');
    }, 750);
});

$('.signin').on('click', function() {
    $('.overlay').toggleClass('active');
    $('signinform-field').removeClass('focus');
    $('input').val('');
});

$('input').focus(function() {
    $(this).parent().addClass('focus');
});

$('#btSubmit').on('click', function() {
    var person = $("#user-name").val();
    localStorage.setItem('user',person);
    show_logout();
});