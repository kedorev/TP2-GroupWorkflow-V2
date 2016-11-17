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

        show_login_with_overlay();
    });

    $( "#skipLogin" ).click(function(e) {
        show_login_without_overlay();
    });


    $( "#logout" ).click(function(e) {
        localStorage.removeItem('user');
        show_login();
    });
});

/**
 * mixin class
 */
function show_login()
{
    $("#logout").hide();
    $("#login").show();
    $("#user_info").hide();
}

/**
 * show data with login option with the overlay
 */
function show_login_with_overlay()
{
    $('#overlay').show();
    show_login();
}


/**
 * show data with login option with the overlay
 */
function show_login_without_overlay()
{
    $('#overlay').hide();
    $('#skipLogin').show();
    show_login();
}


/**
 * show data with logout option
 */
function show_logout()
{
    $("#user").text("Welcome "+localStorage.getItem('user'));
    $("#login").hide();
    $("#logout").show();
    $("#user_info").show();
    $("#overlay").hide();
}


/**
 *
 */
$('.signin').hover(function() {}, function() {
    $(this).addClass('animateout');
    setTimeout(function() {
        $('.signin').removeClass('animateout');
    }, 750);
});

/**
 *
 */
$('.signin').on('click', function() {
    $('.overlay').toggleClass('active');
    $('#skipLogin').hide();
    $('signinform-field').removeClass('focus');
    $('input').val('');
});

/**
 *
 */
$('input').focus(function() {
    $(this).parent().addClass('focus');
});

/**
 * Add the user into the local storage
 */
$('#btSubmit').on('click', function() {
    var person = $("#user-name").val();
    localStorage.setItem('user',person);
    show_logout();
});