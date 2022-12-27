var  banco  =  {
    tipo : "Corrente" ,
    conta : "17.666-61" ,
    saldo : 4000,00 ,
    agência : " 1724-6 "
}

var  buscar_saldo  =  function ( ) {
    console . log ( "Saldo: "  +  banco . saldo . toFixed ( 2 ) )
}

var  deposito  =  function ( valor ) {
    banco . saldo  +=  valor ;
}

var  saque  =  function ( valor ) {
    banco . saldo  -=  valor ;
}

var  consulta_conta  =  função ( ) {
    console . log ( "Número da conta: "  +  banco . conta ) ;
}

var  readlineSync  =  require ( "readline-sync" ) ;

console . log ( "Sua conta esta sendo consultada:" ) ;
consulta_conta ( ) ;
buscar_saldo ( ) ;
var  valor_d_posito  =  readlineSync . question ( "\nValor que deseja depositar?" ) ;
valor  =  parseFloat ( valor_d_posito ) ;
deposito ( valor ) ;
buscar_saldo ( ) ;
var  valor_saque  =  readlineSync . question ( "\nValor que deseja sacar?" ) ;
valor  =  parseFloat ( valor_saque ) ;
saque ( valor )
buscar_saldo ( ) ;