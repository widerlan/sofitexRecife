const  grupo =  [ "a" ,  "b" ,  "c" ,  "d" ,  "e" ,  "f" ] ;

 inf_d_filme  const =  {
    Nome : 'Deadpool' ,
    Nata de lancamento: '11 de fevereiro de 2015' ,
    categoria : 'comédia e ação'
}

função  grupo ( ) {
    console . log ( "\nQue grupo faço parte agora?" ) ;
    for  ( const  e  de  grupo )  {
        console . registro ( e ) ;
    }
}

função  inf_d_filme ( ) {
    console . log ( "\nDados do filme encontrado:\n" )
    for  ( índice const  no inf_d_filme ) {  
        console . log ( ` ${ índice } : ${ inf_d_filme [ índice ] } ` )
    }
}

grupo ( )

inf_d_filme ( )