describe("BloqueSpec", function() {
  var bloque;  
  var dimensionX=Casilla.maximo+1;
  var dimensionY=Casilla.maximo+1;
  beforeEach(function() {
    bloque = new Bloque(dimensionX,dimensionY);    
  });
  it("debeInicializarUnBloque", function() {
    bloque.inicializar();
	expect(dimensionX).toEqual(bloque.getCasillas().length);	
  }); 
  it("debeInicializarArregloAIzquierdaArriba", function() {
    bloque.inicializar();
	var esperado;
	var casilla;
	var veces=0;
	for (var i = 0; i<bloque.getDimensionX(); i++)
	{
		for (var j = 0; j<bloque.getDimensionY(); j++)
		{	
			if(bloque.getCasillas()[i][j].esExtremoAIzquierdaArriba())
			{				
				esperado=bloque.getArregloIzquierdaArriba(bloque.getCasillas()[i][j]);
				veces++;
			}		
		}			
	}
	expect(3).toEqual(esperado.length);
	expect(1).toEqual(veces);
	expect(Casilla.minimo).toEqual(esperado[0].getX());	
	expect(Casilla.minimo+1).toEqual(esperado[0].getY());
	expect(Casilla.minimo+1).toEqual(esperado[1].getX());	
	expect(Casilla.minimo+1).toEqual(esperado[1].getY());
	expect(Casilla.minimo+1).toEqual(esperado[2].getX());	
	expect(Casilla.minimo).toEqual(esperado[2].getY());		
  });
  it("debeInicializarArregloADerechaArriba", function() {
    bloque.inicializar();
	var esperado;
	var casilla;
	var veces=0;
	for (var i = 0; i<bloque.getDimensionX(); i++)
	{
		for (var j = 0; j<bloque.getDimensionY(); j++)
		{
			if(bloque.getCasillas()[i][j].esExtremoADerechaArriba())
			{
				casilla=bloque.getCasillas()[i][j];
				esperado=bloque.getArregloDerechaArriba(casilla);
				veces++;
			}
		}
	}
	expect(3).toEqual(esperado.length);
	expect(1).toEqual(veces);
	expect(Casilla.minimo).toEqual(esperado[0].getX());	
	expect(Casilla.maximo-1).toEqual(esperado[0].getY());
	expect(Casilla.minimo+1).toEqual(esperado[1].getX());	
	expect(Casilla.maximo-1).toEqual(esperado[1].getY());
	expect(Casilla.minimo+1).toEqual(esperado[2].getX());	
	expect(Casilla.maximo).toEqual(esperado[2].getY());		
  });
  it("debeInicializarArregloAIzquierdaAbajo", function() {
    bloque.inicializar();
	var esperado;
	var casilla;
	var veces=0;
	for (var i = 0; i<bloque.getDimensionX(); i++)
	{
		for (var j = 0; j<bloque.getDimensionY(); j++)
		{
			if(bloque.getCasillas()[i][j].esExtremoAIzquierdaAbajo())
			{
				casilla=bloque.getCasillas()[i][j];
				esperado=bloque.getArregloIzquierdaAbajo(casilla);
				veces++;
			}	
		}
	}
	expect(3).toEqual(esperado.length);
	expect(1).toEqual(veces);	
	expect(Casilla.maximo).toEqual(esperado[0].getX());	
	expect(Casilla.minimo+1).toEqual(esperado[0].getY());
	expect(Casilla.maximo-1).toEqual(esperado[1].getX());	
	expect(Casilla.minimo+1).toEqual(esperado[1].getY());
	expect(Casilla.maximo-1).toEqual(esperado[2].getX());	
	expect(Casilla.minimo).toEqual(esperado[2].getY());		
  });  
  it("debeInicializarArregloADerechaAbajo", function() {
    bloque.inicializar();
	var esperado;
	var casilla;
	var veces=0;
	for (var i = 0; i<bloque.getDimensionX(); i++)
	{
		for (var j = 0; j<bloque.getDimensionY(); j++)
		{	
			if(bloque.getCasillas()[i][j].esExtremoADerechaAbajo())
			{
				casilla=bloque.getCasillas()[i][j];
				esperado=bloque.getArregloDerechaAbajo(casilla);
				veces++;
			}		
		}
	}
	expect(3).toEqual(esperado.length);	
	expect(1).toEqual(veces);
	expect(Casilla.maximo).toEqual(esperado[0].getX());	
	expect(Casilla.maximo-1).toEqual(esperado[0].getY());	
	expect(Casilla.maximo-1).toEqual(esperado[1].getX());	
	expect(Casilla.maximo-1).toEqual(esperado[1].getY());
	expect(Casilla.maximo-1).toEqual(esperado[2].getX());	
	expect(Casilla.maximo).toEqual(esperado[2].getY());		
  });  
  it("debeInicializarArregloLateralArriba", function() {
    bloque.inicializar();
	var esperado;
	var casilla;
	for (var i = 0; i<bloque.getDimensionX(); i++)
	{
		for (var j = 0; j<bloque.getDimensionY(); j++)
		{
			if(bloque.getCasillas()[i][j].esExtremoLateralArriba())
			{
				casilla=bloque.getCasillas()[i][j];
				esperado=bloque.getArregloLateralArriba(casilla);				
				expect(5).toEqual(esperado.length);			
				expect(casilla.getX()).toEqual(esperado[0].getX());	
				expect(casilla.getY()-1).toEqual(esperado[0].getY());
				expect(casilla.getX()).toEqual(esperado[1].getX());	
				expect(casilla.getY()+1).toEqual(esperado[1].getY());
				expect(casilla.getX()+1).toEqual(esperado[2].getX());	
				expect(casilla.getY()-1).toEqual(esperado[2].getY());	
				expect(casilla.getX()+1).toEqual(esperado[3].getX());	
				expect(casilla.getY()).toEqual(esperado[3].getY());	
				expect(casilla.getX()+1).toEqual(esperado[4].getX());	
				expect(casilla.getY()+1).toEqual(esperado[4].getY());
			}		
		}
	}
			
  });  
  it("debeInicializarArregloLateralAbajo", function() {
    bloque.inicializar();
	var esperado;
	var casilla;
	for (var i = 0; i<bloque.getDimensionX(); i++)
	{
		for (var j = 0; j<bloque.getDimensionY(); j++)
		{
			if(bloque.getCasillas()[i][j].esExtremoLateralAbajo())
			{
				casilla=bloque.getCasillas()[i][j];
				esperado=bloque.getArregloLateralAbajo(casilla);
				expect(5).toEqual(esperado.length);					
				expect(Casilla.maximo).toEqual(esperado[0].getX());	
				expect(casilla.getY()-1).toEqual(esperado[0].getY());
				expect(Casilla.maximo).toEqual(esperado[1].getX());	
				expect(casilla.getY()+1).toEqual(esperado[1].getY());
				expect(Casilla.maximo-1).toEqual(esperado[2].getX());	
				expect(casilla.getY()-1).toEqual(esperado[2].getY());	
				expect(Casilla.maximo-1).toEqual(esperado[3].getX());	
				expect(casilla.getY()).toEqual(esperado[3].getY());	
				expect(Casilla.maximo-1).toEqual(esperado[4].getX());	
				expect(casilla.getY()+1).toEqual(esperado[4].getY());	
			}
		}
	}
	
  });  
  it("debeInicializarArregloLateralIzquierda", function() {
    bloque.inicializar();
	var esperado;
	var casilla;
	for (var i = 0; i<bloque.getDimensionX(); i++)
	{
		for (var j = 0; j<bloque.getDimensionY(); j++)
		{
			if(bloque.getCasillas()[i][j].esExtremoLateralIzquierda())
			{
				casilla=bloque.getCasillas()[i][j];
				esperado=bloque.getArregloLateralIzquierda(casilla);
				expect(5).toEqual(esperado.length);					
				expect(casilla.getX()-1).toEqual(esperado[0].getX());	
				expect(Casilla.minimo).toEqual(esperado[0].getY());	
				expect(casilla.getX()+1).toEqual(esperado[1].getX());	
				expect(Casilla.minimo).toEqual(esperado[1].getY());	
				expect(casilla.getX()-1).toEqual(esperado[2].getX());	
				expect(Casilla.minimo+1).toEqual(esperado[2].getY());
				expect(casilla.getX()).toEqual(esperado[3].getX());	
				expect(Casilla.minimo+1).toEqual(esperado[3].getY());
				expect(casilla.getX()+1).toEqual(esperado[4].getX());	
				expect(Casilla.minimo+1).toEqual(esperado[4].getY());		
			}
		}
	}
	
  });  
  it("debeInicializarArregloLateralDerecha", function() {
    bloque.inicializar();
	var esperado;
	var casilla;
	for (var i = 0; i<bloque.getDimensionX(); i++)
	{
		for (var j = 0; j<bloque.getDimensionY(); j++)
		{
			if(bloque.getCasillas()[i][j].esExtremoLateralDerecha())
			{
				casilla=bloque.getCasillas()[i][j];
				esperado=bloque.getArregloLateralDerecha(casilla);
				expect(5).toEqual(esperado.length);	
				expect(casilla.getX()-1).toEqual(esperado[0].getX());	
				expect(Casilla.maximo).toEqual(esperado[0].getY());	
				expect(casilla.getX()+1).toEqual(esperado[1].getX());	
				expect(Casilla.maximo).toEqual(esperado[1].getY());	
				expect(casilla.getX()-1).toEqual(esperado[2].getX());	
				expect(Casilla.maximo-1).toEqual(esperado[2].getY());
				expect(casilla.getX()).toEqual(esperado[3].getX());	
				expect(Casilla.maximo-1).toEqual(esperado[3].getY());
				expect(casilla.getX()+1).toEqual(esperado[4].getX());	
				expect(Casilla.maximo-1).toEqual(esperado[4].getY());		
			}		
		}
	}
	
  });  
  it("debeInicializarArregloNoExtremo", function() {
    bloque.inicializar();
	var esperado;
	var casilla;
	var veces=0;
	for (var i = 0; i<bloque.getDimensionX(); i++)
	{
		for (var j = 0; j<bloque.getDimensionY(); j++)
		{
			if(bloque.getCasillas()[i][j].esNoExtremo())
			{
				casilla=bloque.getCasillas()[i][j];
				esperado=bloque.getArregloNoExtremo(casilla);
				veces++;				
				expect(casilla.getX()-1).toEqual(esperado[0].getX());	
				expect(casilla.getY()-1).toEqual(esperado[0].getY());	
				expect(casilla.getX()-1).toEqual(esperado[1].getX());	
				expect(casilla.getY()).toEqual(esperado[1].getY());	
				expect(casilla.getX()-1).toEqual(esperado[2].getX());	
				expect(casilla.getY()+1).toEqual(esperado[2].getY());		
				expect(casilla.getX()).toEqual(esperado[3].getX());	
				expect(casilla.getY()-1).toEqual(esperado[3].getY());		
				expect(casilla.getX()).toEqual(esperado[4].getX());	
				expect(casilla.getY()+1).toEqual(esperado[4].getY());	
				expect(casilla.getX()+1).toEqual(esperado[5].getX());	
				expect(casilla.getY()-1).toEqual(esperado[5].getY());
				expect(casilla.getX()+1).toEqual(esperado[6].getX());	
				expect(casilla.getY()).toEqual(esperado[6].getY());	
				expect(casilla.getX()+1).toEqual(esperado[7].getX());	
				expect(casilla.getY()+1).toEqual(esperado[7].getY());							
			}		
		}
	}
	expect(8).toEqual(esperado.length);	
	
  }); 
  it("deberiaMorirPorEstarSola", function() {
    bloque.inicializar();
	bloque.getCasillas()[0][0].setEstadoActual(true);
	bloque.getCasillas()[0][0].setEstadoActual(true);
	var esperado;
	var casilla;
	var veces=0;
	for (var i = 0; i<bloque.getDimensionX(); i++)
	{
		for (var j = 0; j<bloque.getDimensionY(); j++)
		{
			if(bloque.getCasillas()[i][j].esExtremoAIzquierdaArriba())
			{
				bloque.getArregloIzquierdaArriba(bloque.getCasillas()[i][j]);				
			}		
		}
	}
	bloque.actualizarEstadoCasillas();	
	expect(false).toEqual(bloque.getCasillas()[0][0].getEstadoActual());	
	
  }); 
   it("deberiaMantenerseMuertaPorEstarSola", function() {
    bloque.inicializar();
	bloque.getCasillas()[0][0].setEstadoActual(false);
	bloque.getCasillas()[0][0].setEstadoActual(false);
	var esperado;
	var casilla;
	var veces=0;
	for (var i = 0; i<bloque.getDimensionX(); i++)
	{
		for (var j = 0; j<bloque.getDimensionY(); j++)
		{
			if(bloque.getCasillas()[i][j].esExtremoAIzquierdaArriba())
			{
				bloque.getArregloIzquierdaArriba(bloque.getCasillas()[i][j]);				
			}		
		}
	}
	bloque.actualizarEstadoCasillas();	
	expect(false).toEqual(bloque.getCasillas()[0][0].getEstadoActual());	
	
  }); 
  it("deberiaVivirPorEstarRodeada3PorCasillasVivas", function() {
    bloque.inicializar();
	bloque.getCasillas()[0][0].setEstadoActual(false);
	bloque.getCasillas()[0][0].setEstadoSiguiente(false);
	bloque.getCasillas()[0][1].setEstadoActual(true);
	bloque.getCasillas()[0][1].setEstadoSiguiente(true);
	bloque.getCasillas()[1][1].setEstadoActual(true);
	bloque.getCasillas()[1][1].setEstadoSiguiente(true);
	bloque.getCasillas()[1][0].setEstadoActual(true);
	bloque.getCasillas()[1][0].setEstadoSiguiente(true);

	var esperado;
	var casilla;
	var veces=0;
	for (var i = 0; i<bloque.getDimensionX(); i++)
	{
		for (var j = 0; j<bloque.getDimensionY(); j++)
		{
			if(bloque.getCasillas()[i][j].esExtremoAIzquierdaArriba())
			{
				bloque.getArregloIzquierdaArriba(bloque.getCasillas()[i][j]);				
			}		
		}
	}
	bloque.actualizarEstadoCasillas();	
	expect(true).toEqual(bloque.getCasillas()[0][0].getEstadoActual());	
	
  }); 
  it("deberiaMorirPorEstarRodeadaPor2CasillasVivas", function() {
    bloque.inicializar();
	bloque.getCasillas()[0][0].setEstadoActual(true);
	bloque.getCasillas()[0][0].setEstadoSiguiente(true);
	bloque.getCasillas()[0][1].setEstadoActual(false);
	bloque.getCasillas()[0][1].setEstadoSiguiente(false);
	bloque.getCasillas()[1][1].setEstadoActual(true);
	bloque.getCasillas()[1][1].setEstadoSiguiente(true);
	bloque.getCasillas()[1][0].setEstadoActual(false);
	bloque.getCasillas()[1][0].setEstadoSiguiente(false);

	var esperado;
	var casilla;
	var veces=0;
	for (var i = 0; i<bloque.getDimensionX(); i++)
	{
		for (var j = 0; j<bloque.getDimensionY(); j++)
		{
			if(bloque.getCasillas()[i][j].esExtremoAIzquierdaArriba())
			{
				bloque.getArregloIzquierdaArriba(bloque.getCasillas()[i][j]);				
			}		
		}
	}
	bloque.actualizarEstadoCasillas();	
	expect(false).toEqual(bloque.getCasillas()[0][0].getEstadoActual());	
	
  }); 
  
  it("deberiaMantenerseVivaPorEstarRodeadaPor3CasillasVivas", function() {
    bloque.inicializar();
	bloque.getCasillas()[0][0].setEstadoActual(true);
	bloque.getCasillas()[0][0].setEstadoSiguiente(true);
	bloque.getCasillas()[0][1].setEstadoActual(true);
	bloque.getCasillas()[0][1].setEstadoSiguiente(true);
	bloque.getCasillas()[1][1].setEstadoActual(true);
	bloque.getCasillas()[1][1].setEstadoSiguiente(true);
	bloque.getCasillas()[1][0].setEstadoActual(true);
	bloque.getCasillas()[1][0].setEstadoSiguiente(true);

	var esperado;
	var casilla;
	var veces=0;
	for (var i = 0; i<bloque.getDimensionX(); i++)
	{
		for (var j = 0; j<bloque.getDimensionY(); j++)
		{
			if(bloque.getCasillas()[i][j].esExtremoAIzquierdaArriba())
			{
				bloque.getArregloIzquierdaArriba(bloque.getCasillas()[i][j]);				
			}		
		}
	}
	bloque.actualizarEstadoCasillas();	
	expect(true).toEqual(bloque.getCasillas()[0][0].getEstadoActual());	
	
  }); 
  
  
});