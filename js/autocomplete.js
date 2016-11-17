jQuery(document).ready(function() {

    $("#keyword").keyup(function() {
        if ($(this).val().length >= 3) {
            var test = $("#keyword").val();
            // console.log("Handler for .keypress() called." + test);
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


function autocomplete(urlApi) {
    var result = '';
    $.ajax({
        url : urlApi,
        type : 'POST',
        dataType : 'json',
        success : function(code_html, statut){
            // console.log("success");console.log(code_html);
            listeData(code_html);
        },

        error : function(resultat, statut, erreur){
            // console.log("error" + erreur);
        },

        complete : function(resultat, statut){
            // console.log("complete" + resultat);
        }
    }); // sortie ajax
    return result;
}


function listeData(data){
    // Affichage du titre
    // console.log('mesdatas');
    // console.log(data);

    if (data.Search){
        lengthdata = data.Search.length;
        for (var i = 0; i < lengthdata; i++) {
            liste[i] =data.Search[i].Title;
        }
    }
    // console.log('LISTE');
    // console.log(liste);
}
// générer au moment du dom donc le keyup est appelé ensuite.
var liste = [
    ""
];
$('#keyword').autocomplete({
    source : liste,

    select : function(event, ui)
    { // lors de la sélection d'une proposition

        alert(ui.item.text);

    }
});
