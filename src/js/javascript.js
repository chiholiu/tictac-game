(function() {
    "use strict";
    console.log('hello');


    function TicTac() {
        let board = document.createElement('table');
        let chooseSymbol = Array.from(document.querySelectorAll('.choose-symbol'));
        let yourSymbol, artificialSymbol;
        
       
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
            })
        }

        var checkSymbol = function(symbol) {
            let chosenSymbol = symbol;
            yourSymbol = chosenSymbol.id;
            artificialSymbol = chosenSymbol == x ? '0': 'x'; 
        }

        var chooseItem = function(char) {
           
        } 

        var getValueInput = function() {

        }
        console.log(chooseSymbol.length);
      

    }
    
    let tictac = new TicTac();
    tictac.init();
})();