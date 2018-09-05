(function() {
    "use strict";
    console.log('hello');

    function TicTac() {
        let board = document.createElement('table');
        let chooseSymbol = Array.from(document.querySelectorAll('.choose-symbol'));
        const cell = document.querySelectorAll('.cell');
        let yourSymbol, artificialSymbol;
        let counter = 0;
        let playButton = document.getElementById('go-play');

        const winCombos = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [6, 4, 2]
        ];
       
        this.init = function() {
            addEventListener();
        }

        var addEventListener = function () {
            [].forEach.call(chooseSymbol,function(e){
                e.addEventListener('mouseup', function() {
                    checkSymbol(e);    
                })
            });

            for(var i = 0; i < cell.length; i++) {
                cell[i].addEventListener('mouseup', function(e) {
                    clickBlock(e);
                });
            }

            playButton.addEventListener('mouseup', changeScreen);
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
            let passSymbol = null;
            let checkBlock = clickedBlock.target.classList.contains('set');

            if(checkBlock == false) {
                counter++;
                passSymbol = counter % 2 == 1? yourSymbol: artificialSymbol;
                clickedBlock.toElement.innerHTML = passSymbol;
                clickedBlock.toElement.classList.add('set');
            } else {
                return false;
            }
            checkWinner(passSymbol);
        }

        var checkWinner = function(e) {
            console.log('hello world ' + yourSymbol);
        }
    }
    
    let tictac = new TicTac();
    tictac.init();
})();