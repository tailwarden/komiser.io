;(function($){
    "use strict"

    /*----------------------------------------------------*/
    /*  Magnific Pop up js (Home Video)
    /*----------------------------------------------------*/
    $('#play-home-video').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });

    //
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", "https://api.github.com/repos/mlabouardy/komiser", false );
    xmlHttp.send( null );
    var response = JSON.parse(xmlHttp.responseText);

    $('#github-watchers').text(response.watchers);

})(jQuery)