(function() {
    "use strict";
    console.log('hello');


    function TicTac() {

        let board = document.createElement('table');
        let chooseSymbol = Array.from(document.querySelectorAll('.choose-symbol'));
        const cell = document.querySelectorAll('.cell');
        let yourSymbol, artificialSymbol;
        console.log(yourSymbol);
        let playButton = document.getElementById('go-play');
       
        this.init = function() {
            printBoard();
            addEventListener();
        }

        var printBoard = function() {

        }

        var addEventListener = function () {
            [].forEach.call(chooseSymbol,function(e){
                e.addEventListener('click', function() {
                    checkSymbol(e);    
                })
            });

            for(var i = 0; i < cell.length; i++) {
                cell[i].addEventListener('click', function(e) {
                    clickBlock(e);
                });
            }

            playButton.addEventListener('click', changeScreen);
        }

        var checkSymbol = function(symbol) {
            let chosenSymbol = symbol;
            yourSymbol = chosenSymbol.id;
            artificialSymbol = chosenSymbol == x ? '0': 'x'; 

            // check if player has chosen a symbol
            if(chosenSymbol != 'undefined') {
                playButton.removeAttribute('disabled');
            }
        }

        var changeScreen = function() {
            let chooseTab = document.getElementById('tab-choose');
            let gameTab = document.getElementById('tab-game');

            chooseTab.classList.add('none');
            gameTab.classList.add('block');
        }

        var clickBlock = function(theblock) {
            let clickedBlock = theblock;
            console.log(yourSymbol);
            clickedBlock.toElement.innerHTML = yourSymbol;

        }

        var getValueInput = function() {

        }
        console.log(chooseSymbol.length);
      

    }
    
    let tictac = new TicTac();
    tictac.init();
})();