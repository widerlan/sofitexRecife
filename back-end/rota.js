var  expresso  =  requer ( 'expresso' ) ;
var  rota  =  expresso . Roteador ( ) ;
 
rota . get ( '/users' ,  function ( req ,  res )  {
    res . send ( `Tabela usuarios` ) ;
} ) ;
 
rota . post ( '/user' ,  function ( req ,  res )  {
    res . send ( `Fazer um usuario` ) ;
} ) ;
 
módulo . exporta  =  rota ;