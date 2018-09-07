(function() {
    "use strict";
    console.log('hello');

    function TicTac() {
        const cell = document.querySelectorAll('.cell');
        let playButton = document.getElementById('go-play');
        let yourSymbol, artificialSymbol;
        let playAgain = document.getElementById('play-again-button');
        let counter = 0;
        let emptyArray = [];
        let playerScore = 0;
        let computerScore = 0;
        let equal = 0;

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

        let addEventListener = function () {
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
            playAgain.addEventListener('mouseup', resetGame);
        }

        let checkSymbol = function(symbol) {
            let chosenSymbol = symbol;
            yourSymbol = chosenSymbol.id;
            artificialSymbol = chosenSymbol == x ? '0': 'x'; 

            // check if player has chosen a symbol
            if(chosenSymbol != 'undefined') {
                playButton.removeAttribute('disabled');
            }
        }

        let changeScreen = function() {
            let chooseTab = document.getElementById('tab-choose');
            let gameTab = document.getElementById('tab-game');

            chooseTab.classList.add('none');
            gameTab.classList.add('block');
        }

        let clickBlock = function(theblock) {
            let clickedBlock = theblock;
            let passSymbol = null;
            let checkBlock = clickedBlock.target.classList.contains('set');

            if(checkBlock == false) {
                counter++;
                passSymbol = counter % 2 == 1? yourSymbol: artificialSymbol;
                addText(clickedBlock, passSymbol);

            } 
        }

        let addText = function(clickBlock, passSymbol) {
            let getClick = clickBlock;
            let getSymbol = passSymbol;

            getClick.toElement.innerHTML = getSymbol;
            getClick.toElement.classList.add('set');
            getClick.toElement.setAttribute('value', getSymbol);
            addArray(getClick);
        }

        let addArray = function(hello) {
            emptyArray.push({id: parseInt(hello.toElement.id), value: hello.toElement.getAttribute('value')})
            sortObject(emptyArray);
        }

        let sortObject = function(objects) {
            let sortedArray = objects;
            sortedArray.sort(function(a,b) {
                let keyA = a.id;
                let keyB = b.id;
                if(keyA < keyB) return -1;
                if(keyB < keyA) return 1;
                return 0;
            });
            filterArray(sortedArray);
        }

        let filterArray = function(updatedArray) {
            // the array will be split up in two different arrays, so it would be easier to check who is the winner
            let filtered = updatedArray.reduce((output, symbol) => {
                if(symbol.value == yourSymbol) output[0].push(symbol);
                else if (symbol.value == artificialSymbol) output[1].push(symbol);
                return output;
            }, [[], []]);
            getPositionBoard(filtered);
        }   
        
        let getPositionBoard = function(twoArrays) {
            let playersArray = twoArrays[0];
            let artificialArray = twoArrays[1];
           
            const getId = a => a.id;

            let result1 = playersArray.map(getId);
            let result2 = artificialArray.map(getId);

            checkWinner(result1, result2);
        }

        let checkWinner = function(playerArray, computerArray) {
            let playerWin = winCombos.find(x => x.every( z => playerArray.includes(z)));
            let computerWin = winCombos.find(x=>x.every( z=> computerArray.includes(z)));
            let noWinner = (playerWin == undefined && computerWin == undefined);

            if(counter > 9 && noWinner) {
                return;
            }
            else if (playerWin) {
                playerScore++;
                resetGame();
            }
            else if (computerWin) {
                computerScore++;
                resetGame();
            }
            else if (counter == 9 && noWinner) {
                equal++;
                resetGame();
            } 
        }

        let resetGame = function() {
            const arrayOfCells = Array.from(cell);
            emptyArray = [];
            counter = 0;
            for(var i = 0; i <  arrayOfCells.length; i++) {
                arrayOfCells[i].classList.remove('set');
                arrayOfCells[i].innerHTML = '';
                arrayOfCells[i].removeAttribute('value');
            }
        }
        
       
    }
    
    let tictac = new TicTac();
    tictac.init();
})();