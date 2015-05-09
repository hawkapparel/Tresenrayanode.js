"use strick";// http://www.w3schools.com/js/js_strict.asp
window.addEventListener("load",load);

function load(){
    //Que cuando carge me cree dos Jugadores
    var playerOne = new Player(1);
    var playerTwo = new Player(2);
    var listPlayers = [];
    var turno = 0;
    var consola = document.getElementById("consola");

    //Funcion Principal: La funcion se va a volver a llamar automaticamente
    (function init(){
        fillListPlayers();
    })();//(); se llama automaticamente

    //Para llenar las Lista de Jugadores
    function fillListPlayers(){
        listPlayers.push(playerOne);
        listPlayers.push(playerTwo);
    }

    //index viene a ser 1 2 3 ...
    var idButtons = [1,2,3,4,5,6,7,8,9];
    for(var index of idButtons){
        var button = document.getElementById("celda"+index);
        //Se le agrega un evento "click"  y se corre una funcion
        button.addEventListener("click", function(){
           selectButton(this);
           //this para que te pase los parametros button
        });
    }
    //La Funcion Recibe los Parametros "This"
    //Console.log = Imprime Ejm: "celda7"
    function selectButton(e){
       //A Player vamos agregando en el array las Posicion(o seas el Turno de los Players)
        var currentPlayer = listPlayers[turno];
        if(hasPositionByButton(e)){
            currentPlayer.addNewPosition(e);
            setTurnOnView();
            drawButton(e);
            validateWinner(currentPlayer);
            changeTurn(); 
        }
        
    }

    function changeTurn(){
        //turno = turno == 1 -> Si turno = turno es igual a 1
        //? 2 entonces -> turno = 2
        //: 1 caso contrario -> Turno = 1
        //? Entonces
        turno = turno == 0 ? 1 : 0;
    }

    function hasPositionByButton(button){
        return playerOne.hasPositionByButton(button) && playerTwo.hasPositionByButton(button);
    }

    function setTurnOnView(){
        consola.innerHTML = "PLAYER " + (turno + 1);
    }


    function drawButton(button){
        button.innerHTML = turno == 0 ? "X": "O";
    }
    /////
    function validateWinner(currentPlayer){
        var currentPlayerPosition = currentPlayer.listPositions[a.length - 1];//Obtengo una array con las posiciones
                                                                 //en las que se ah hecho click
       
    }




}