//1
function  calculadora ( ) {
   console . log ( "\n A calculadora" ) 
}

//2

function  bloco1 ( n1 ,  n2 )  {   
   if ( operar  ==  1 ) {
       resultado  =  parseFloat ( n1 )  +  parseFloat ( n2 ) ;
   }
   if ( operar  ==  2 ) {
       resultado  =  parseFloat ( n1 )  - parseFloat ( n2 ) ;
   }
   if ( operar  ==  3 )  {
       resultado  =  parseFloat ( n1 )  *  parseFloat ( n2 ) ;
   }
    resultado de retorno ;
}

//3

const  bloco2  =  ( n1 ,  n2 )  =>  resultado  =  parseFloat ( n1 )  /  parseFloat ( n2 ) ;  

calculadora ( )

var  readlineSync  =  requer ( "readline-sync" )
var  n1  =  readlineSync . question ( '\nInforme o primeiro valor: ' ) ;
var  n2  =  readlineSync . question ( '\nInforme o segundo valor: ' ) ;
console . log ( "\nQual a operação que irá utilizar: \n1- adição \n2- subtração \n3- multiplicação \n4- divisão" ) ;
var  operar =  readlineSync . pergunta ( "\n" ) ;

if  ( operar  ==  1  ||  operar  ==  2  ||  operar  ==  3 ) {
   var  resultado  =  bloco1 ( n1 ,  n2 ) ;
}
if  ( operar  ==  4 ) {
   var  resultado  =  bloco2 ( n1 ,  n2 ) ;
}
outra coisa {
   console . log ( "\n Digitou uma operação que não existe." )
}

console . registro ( "\n"  +  resultado ) 