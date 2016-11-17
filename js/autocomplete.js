jQuery(document).ready(function() {

    // Fonction principale du Keyword qui va permettre l'autocomplete
    $("#keyword").keyup(function() {
        if ($(this).val().length >= 3) {
            $('#backhide').hide();
            $('#main').css('display', 'block');
            $('section').hide();
            $('.loader').show();
            var keyword = $('#keyword').val();
            var baseUrl = ('http://www.omdbapi.com/?s=');
            var endUrl = ('&y=&plot=full&r=json');
            var result = baseUrl + keyword + endUrl;
            autocomplete(result);
        }
    });
});

// requête ajax qui retourne liste data
function autocomplete(urlApi) {
    $.ajax({
        url : urlApi,
        type : 'POST',
        dataType : 'json',
        success : function(code_html){

            listeData(code_html);
        },
        error : function(resultat, statut, erreur){
        },
        complete : function(resultat, statut){
        }
    }); // sortie ajax
}


function listeData(data){
    if (data.Search){
        lengthdata = data.Search.length;
        for (var i = 0; i < lengthdata; i++) {
            liste[i] =data.Search[i].Title;
        }
    }
}
// générer au moment du dom donc le keyup est appelé ensuite.
var liste = [
    ""
];

// UI JQuery pour autocomplete on lui donne en paramétre de filtrer nos résultats et
// de garder que les 10 premiers afin d'améliorer les performance du site

$('#keyword').autocomplete({
    source : function(request, response) {
        var results = $.ui.autocomplete.filter(liste, request.term);
        response(results.slice(0, 10));
    }
});
