$(document).ready(function () {

  var powerRankings=[];

  for(let i=0;i<players.length;i++){
    var pr=0.5*(2*players[i].winsTotal-players[i].losesTotal)+0.5*(2*players[i].winsWeek-players[i].losesWeek)
    console.log(players[i].name+":"+pr);
    var currentPlayer={};
    currentPlayer.name=players[i].name;
    currentPlayer.image=players[i].image;
    currentPlayer.score=pr;
    console.log(currentPlayer);
    powerRankings.push(currentPlayer);

  }



    $(".nav li").on("click", function () {
        console.log("clicked on item");
        $(".nav li").removeClass("active");
        $(this).addClass("active");
    });

    $(window).scroll(function() {
        var height = $(window).scrollTop();
        if (height > 100) {
            $('#back2Top').fadeIn();
        } else {
            $('#back2Top').fadeOut();
        }
    });

    $("#back2Top").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        $(".nav li").removeClass("active");
        return false;
    });

});
