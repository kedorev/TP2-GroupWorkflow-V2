jQuery(document).ready(function(){
    var favListe = [];
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
            var blockTitre = '<dt class="favTitle'+ getTitre() +'">'+ getTitre()+'</dt>';
            var blockYear = '<dd class="favYear'+ getYear() +'">'+ getYear()+'</dd>';
            $('.favListe').append(blockTitre);
            $('.favListe').append(blockYear);
            sessionStorage.setItem(getTitre(),[blockTitre,blockYear]);
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
});