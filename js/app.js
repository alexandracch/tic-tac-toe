//VARIABLES

var turn = 1;
var whatTurn;
var arrayTictactoe = new Array(9);//combinaciones ganadoras
var grids = document.getElementsByClassName("tictactoe");

//DECLARACIÓN DE FUNCIONES

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
   window.location.reload();
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
    window.location.reload();
  }
  else 
  {
    turn++;
  }
}

function documentLoad () 
{
 /* document.getElementsByClassName("tictactoe").addEventListener("click",tictactoe);*/
 //No puedo asignarle el evento click a un conjunto de eventos
 //llamo a cada objeto para asignarle el evento
 /*document.getElementsByClassName("tictactoe")[4].addEventListener("click",tictactoe);*/
  //para no dar copypaste utilizo ciclos
  
  var n = 0;
  while(n<grids.length)
  {
   grids[n].addEventListener("click",tictactoe);
   n++;
  }
}


//EVENTOS

window.addEventListener("load",documentLoad);

var btn = document.getElementsByClassName('btn');
//window.location.reload();("click",btn);