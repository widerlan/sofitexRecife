const  expresso  =  requer ( 'expresso' ) ;
 aplicativo  const =  expresso ( ) ;

var  rotas  =  require ( './rotas' ) ;
app . use ( '/' ,  rotas ) ;

app . ouvir ( 6666 ,  ( ) => {
    console . log ( 'Servidor sendo ativado...' ) ;
} ) ;
