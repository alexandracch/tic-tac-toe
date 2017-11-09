//VARIABLES

var turn = 1;
var whatTurn;
var arrayTictactoe = new Array(9);//combinaciones ganadoras
var grids = document.getElementsByClassName("tictactoe");

//DECLARACIÓN DE FUNCIONES
/*Funcion que carga todas mis funciones*/
function documentLoad () 
{ var n = 0;
  while(n<grids.length)
  {
   grids[n].addEventListener("click",tictactoe);
   n++; 
  }

}

function winner(letter)
{
  if 
  (
   (arrayTictactoe[0]==letter && arrayTictactoe[1]==letter && arrayTictactoe[2]==letter)||//1
   (arrayTictactoe[3]==letter && arrayTictactoe[4]==letter && arrayTictactoe[5]==letter)||//2
   (arrayTictactoe[6]==letter && arrayTictactoe[7]==letter && arrayTictactoe[8]==letter)||//3
   (arrayTictactoe[0]==letter && arrayTictactoe[3]==letter && arrayTictactoe[6]==letter)||//4
   (arrayTictactoe[1]==letter && arrayTictactoe[4]==letter && arrayTictactoe[7]==letter)||//5
   (arrayTictactoe[2]==letter && arrayTictactoe[5]==letter && arrayTictactoe[8]==letter)||//6
   (arrayTictactoe[0]==letter && arrayTictactoe[4]==letter && arrayTictactoe[8]==letter)||//7
   (arrayTictactoe[2]==letter && arrayTictactoe[4]==letter && arrayTictactoe[6]==letter)//8
  ) 
  {
   alert("PLAYER "+ letter +" WINS");
   /*window.location.reload();*/
  }
}

function tictactoe (event)
{
  var grid = event.target;
  var idGrid = event.target.id;
  //posicion del arreglo
  var markPosition = idGrid[1]-1;//-1 pq los arrays empiezan en 0
  //alert(markPosition);

  whatTurn = turn%2;
  //Turno X (impares)
  if (whatTurn!=0)
  {
    grid.innerHTML = "X";
    grid.style.color = "#ffc107";
    arrayTictactoe[markPosition] ="X";
    winner("X");
  }
  //Turno O (pares)
  else if (whatTurn == 0)
  {
    grid.innerHTML = "O";
    grid.style.color = "#ff00bf";
    arrayTictactoe[markPosition] = "O";
    winner("O");
  }

  if(turn==9)
  {
    alert("Tie Game :(");
    alert.style.background = "#4d3363";
    alert.style.color= "#000";
    
  }
  else 
  {
    turn++;
  }
}

//EVENTOS
window.addEventListener("load",documentLoad);

function reset () {
  window.location.reload();
}

document.getElementById("btn").addEventListener("click",reset);