var cue = cue || {};

cue.utility = (function(){

        // Fire cue.load() when navigation link is clicked
        $('.navigation ul li a').on('click', function(e){
            e.preventDefault();
            var link = $(this).attr('href');
            cue.load(link);
        });

}());

cue.load = function(link) {
   
        // Set current page's content
        $('.content').addClass("on-stage");

        // Create stanby container
        $('.stage').append('<div class="content standby"></div>');
        
        // Add new page's content to the standby container
        $('.content.standby').load('' + link + ' .content', function(){

            //Animate old content off of page
            $('.content.on-stage').addClass("exit");

             //Remove old content once page is done animating
            setTimeout(function(){
                $('.content.on-stage.exit').remove()
            }, 1000);

            //Bring new content onto stage
            $('.content.standby').addClass('on-stage').removeClass("standby");

        });

}
