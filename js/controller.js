function createController(game){

    var $input = $('#entrada');
    var $gaps = $('.lacunas');
    
    const displayGaps = () => {
        $gaps.empty();
        game.getGaps().forEach(e => $gaps.append($('<li>').addClass('lacuna').text(e)));
    }

    const changePlaceHolder = (text) => $input.attr("placeholder", text);

    const storeSecretWord = () => {
        if ($input.val()) {
            displayGaps();
            $input.val("");
            game.setSecretWord(word);
            changePlaceHolder("chute");
        }
    }

    var inicia = function () {
        $input.keypress(function (event) {
            if (event.which == 13) {
                switch (game.getStep()) {
                    case 1: storeSecretWord(); break;
                    case 2:
                        console.log("ishi")
                        break;
                }
            }
        });
    }
    return { init: inicia };
}