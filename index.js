var p1Score = 0;
var p2Score = 0;
var tie = 0;
var turn = 1;


function checkWin(){
    if ($(".row-1 .box.X").length === 3
     || $(".row-2 .box.X").length === 3
     || $(".row-3 .box.X").length === 3
     || $(".col-1.X").length === 3
     || $(".col-2.X").length === 3
     || $(".col-3.X").length === 3
     || $("#1").hasClass("X")
     &&$("#5").hasClass("X")
     &&$("#9").hasClass("X")
     || $("#3").hasClass("X")
     &&$("#5").hasClass("X")
     &&$("#7").hasClass("X")){
        p1Score++;
        $("#p1-score").text(p1Score);
        clearBoard();
    }
}

function clearBoard(){
    $(".X").empty();
    $(".O").empty();
    $(".X").removeClass("X");
    $(".O").removeClass("O");
    turn = 1;
}

function checkWinO(){
    if ($(".row-1 .box.O").length === 3
     || $(".row-2 .box.O").length === 3
     || $(".row-3 .box.O").length === 3
     || $(".col-1.O").length === 3
     || $(".col-2.O").length === 3
     || $(".col-3.O").length === 3
     || $("#1").hasClass("O")
     &&$("#5").hasClass("O")
     &&$("#9").hasClass("O")
     || $("#3").hasClass("O")
     &&$("#5").hasClass("O")
     &&$("#7").hasClass("O")){
        p2Score++;
        $("#p2-score").text(p2Score);
        clearBoard();
    }
}


$(".box").click(function(){
    if (turn ===1){
        $(this).text("X")
        $(this).addClass("X")
        turn = 2;
        $("#turn").text(2);
        checkWin();
    }
    else {
        $(this).text("O")
        $(this).addClass("O")
        turn = 1;
        $("#turn").text(1);
        checkWinO();
    }
});