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
        var person = prompt("Please enter your name", "Your name");
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
    $("#logout").hide();
    $("#login").show();
    $("#user_info").hide();
}

function show_logout()
{
    $("#user").text("Bienvenu(e) "+localStorage.getItem('user'));
    $("#login").hide();
    $("#logout").show();
    $("#user_info").show();
}