jQuery(document).ready(function(){

    $( "#search" ).click(function(e) {
        var baseUrl;
        var endUrl;
        e.preventDefault();
        $.getJSON("Json/data.json", function( data )
        {
            baseUrl = data.script.baseUrl;
            endUrl = data.script.endUrl;
            $('#backhide').hide();
            $('#main').css('display', 'block');
            $('section').hide();
            $('.loader').show();
            var keyword = $('#keyword').val();
            var result = baseUrl + keyword + endUrl;
            monAjax(result);
        });
    });

});

$(document).on("scroll", function () {
    if ($(document).scrollTop() > 100) {
        $("nav").addClass("small");
    } else {
        $("nav").removeClass("small");
    }
});

function monAjax(urlApi) {
    var result = '';
    $.ajax({
        url : urlApi,
        type : 'POST',
        dataType : 'json',
        success : function(code_html, statut){
            console.log("success");console.log(code_html);
            Affichage(code_html);
        },

        error : function(resultat, statut, erreur){
            console.log("error" + erreur);
        },

        complete : function(resultat, statut){
            console.log("complete" + resultat);
        }
    }); // sortie ajax
    return result;
}

function Affichage(data){
    // Affichage du titre
    console.log(data);
    if (data.Response == 'False' ){
        $('#name_error').text('No result found');
        reponse = data.Response;
        setTimeout(hideLoader(reponse), 1500);
    }else {
        $.getJSON("Json/data.json", function( data2 )
        {
            var NA = data2.script.NA;
            var imageNotFound = data2.script.imageNotFound;
            if (data.Title) {
                $('#name').text(data.Title);
            }
            if (data.Year) {
                $('#year_show').show();
                $('#year').text(data.Year);
            }
            if (data.Rated && data.Rated != NA) {
                $('#rated_show').show();
                $('#rated').text(data.Rated);
            }
            if (data.Released && data.Released != NA) {
                $('#released_show').show();
                $('#released').text(data.Released);
            }
            if (data.Runtime && data.Runtime != NA) {
                $('#runtime_show').show();
                $('#runtime').text(data.Runtime);
            }
            if (data.Genre && data.Genre != NA) {
                $('#genre_show').show();
                $('#genre').text(data.Genre);
            }
            if (data.Director && data.Director != NA) {
                $('#director_show').show();
                $('#director').text(data.Director);
            }
            if (data.Writer && data.Writer != NA) {
                $('#writer_show').show();
                $('#writer').text(data.Writer);
            }
            if (data.Actors && data.Actors != NA) {
                $('#actors_show').show();
                $('#actors').text(data.Actors);
            }
            if (data.Plot && data.Plot != NA) {
                $('#plot_show').show();
                $('#plot').text(data.Plot);
            }
            if (data.Language && data.Language != NA) {
                $('#language_show').show();
                $('#language').text(data.Language);
            }
            if (data.Country && data.Country != NA) {
                $('#country_show').show();
                $('#country').text(data.Country);
            }
            if (data.Awards && data.Awards != NA) {
                $('#awards_show').show();
                $('#awards').text(data.Awards);
            }
            if (data.Poster && data.Poster != NA) {
                $('#affiche').attr('src',data.Poster);
            }
            else
            {
                $('#affiche').attr('src',imageNotFound);
            }
            if (data.Metascore && data.Metascore != NA) {
                $('#metascore_show').show();
                $('#metascore').text(data.Metascore);
            }
            if (data.imdbRating && data.imdbRating != NA) {
                $('#imdbRating_show').show();
                $('#imdbRating').text(data.imdbRating);
            }
            if (data.imdbVotes && data.imdbVotes != NA) {
                $('#imdbVotes_show').show();
                $('#imdbVotes').text(data.imdbVotes);
            }
            reponse = data.Response;
            setTimeout(hideLoader(reponse), 1500);
        });


    }// Fin du else
}

function hideLoader(reponse) {
    $('.loader').css("display","none");
    $('#keyword').val('');
    if(reponse == 'False'){
        $('.film-cnt').hide();
        $('.error').show();
    }else{
        $('.film-cnt').show();
        $('.error').hide();
    }
    // faire si l'un ou l'autre

}
