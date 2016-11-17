jQuery(document).ready(function(){
    var favListe = [];
    var block_print = '';
    $( "#favorite" ).click(function() {

        console.log(favListe);
        var isInArray=jQuery.inArray( getTitre(), favListe);
        if(isInArray != -1){
            alert("Merci d'avoir essayé");
            $('#favorite').addClass('animationButton');
            setTimeout(function(){
                $('#favorite').removeClass('animationButton');
            }, 4000);



        }else{
            favListe.push(getTitre());
            var blockTitre = '<dt class="favTitle'+ getTitre() +'"><i class="fa fa-film"></i>'+ getTitre()+'</dt>';
            var blockYear = '<dd class="favYear'+ getYear() +'"><i class="fa fa-calendar"></i>'+ getYear()+'</dd>';
            $('.favListe').append(blockTitre);
            $('.favListe').append(blockYear);
            var array = blockTitre + blockYear;
            localStorage.setItem(getTitre(),array);
            // A l'ajout d'un favoris, on l'append aussi dans le tableau des favoris qui sera imprimé
            var blockTitrePrintMore = '<tr class="favTitlePrint"><td><strong>'+ getTitre()+'</strong></td><td><strong>'+getRealisateur()+'</strong></td><td><strong>'+getYear()+'</strong></td></tr><tr class="favTitlePlot"><td colspan="3">'+ getSynopsis()+'</td></tr>';
            var blockTitrePrintLess = '<tr class="favTitlePrint"><td><strong>'+ getTitre()+'</strong></td></tr>';
            $('.favListePrintMore').append(blockTitrePrintMore);
            $('.favListePrintLess').append(blockTitrePrintLess);
            localStorage.setItem('block_print_more', $('.favListePrintMore').html());  // Stockage de la div d'impression pour la retrouver au chargement de la page
            localStorage.setItem('block_print_less', $('.favListePrintLess').html());  // Stockage de la div d'impression pour la retrouver au chargement de la page
        }

    });

    function getTitre(){
        var titre = $('#name').text();
        return titre;
    }
    function getYear(){
        var year = $('#released').text();
        return year;
    }
    function getRealisateur(){
        var director = $('#director').text();
        return director;
    }
    function getSynopsis(){
        var synopsis = $('#plot').text();
        return synopsis;
    }

});
