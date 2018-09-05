(function() {
    "use strict";
    console.log('hello');

    function TicTac() {
        const cell = document.querySelectorAll('.cell');
        let playButton = document.getElementById('go-play');
        let yourSymbol, artificialSymbol;
        let counter = 0;
        let emptyArray = [];

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
            let chooseSymbol = Array.from(document.querySelectorAll('.choose-symbol'));


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
                addText(clickedBlock, passSymbol);

            } 
        }

        var addText = function(clickBlock, passSymbol) {
            let getClick = clickBlock;
            let getSymbol = passSymbol;

            getClick.toElement.innerHTML = getSymbol;
            getClick.toElement.classList.add('set');
            getClick.toElement.setAttribute('value', getSymbol);
            checkWinner(getClick);
        }

        var checkWinner = function(hello) {
            let obj = {};
            obj[hello.toElement.id] = hello.toElement.getAttribute('value');
            emptyArray.push(obj);
            console.log(emptyArray);
        }
    }
    
    let tictac = new TicTac();
    tictac.init();
})();