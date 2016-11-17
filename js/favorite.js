jQuery(document).ready(function(){
    //Liste de nos favoris
    var favListe = [];
    //Quand on click sur le bouton my favorite
    $( "#favorite" ).click(function() {
        // Si le titre est déjà dans la favListe le résultat vaut -1, donc on récupére le titre, on le cherche dans la
        //favliste, si il est déjà dedans isInArray = -1
        var isInArray=jQuery.inArray( getTitre(), favListe);
        if(isInArray != -1){
            // Petite blague pour ceux qui voulaient mettre deux fois en favori
            alert("Merci d'avoir essayé");
            // Ajoute l'animation sur le bouton
            $('#favorite').addClass('animationButton');
            // au bout de 4 sec retire la classe et donc l'animation
            setTimeout(function(){
                $('#favorite').removeClass('animationButton');
            }, 4000);
        }else{
            //Si le film n'était pas dans la favListe on l'ajoute
            favListe.push(getTitre());
            // on crée le html de notre liste
            var blockTitre = '<dt class="favTitle'+ getTitre() +'" data-film=' + getId() + '>'+ getTitre()+'</dt>';
            var blockYear = '<dd class="favYear'+ getYear() +'" data-film=' + getId() + '>'+ getYear()+'</dd>';
            // On l'ajoute au dl
            $('.favListe').append(blockTitre);
            $('.favListe').append(blockYear);
            var array = blockTitre + blockYear;
            // On place notre film dans les local storage
            localStorage.setItem(getTitre(),array);
        }
        $('[data-film]').click(function(event) {
            var id=  $(this).data("film");
            id = '[data-film="'+id+'"]';
            var name = $(id).attr('class');
            name = name.substr(name.indexOf("e") + 1)
            localStorage.removeItem(name);
            $('.favListe').html("");
            for(var i = 0; i < localStorage.length; i++){
                console.log(localStorage.key(i));
                if((localStorage.key(i) !="user")){
                    var array = localStorage.getItem(localStorage.key(i))
                    $('.favListe').append(array);
                }
            }
        });


    });
    function getId(){
        var imdbID = $('#imdbID').text();
        return imdbID;
    }
    function getTitre(){
        var titre = $('#name').text();
        return titre;
    }
    function getYear(){
        var year = $('#released').text();
        return year;
    }


});