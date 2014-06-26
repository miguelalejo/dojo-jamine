describe("JuegoDeLaVida", function() {
  var casilla;  

  beforeEach(function() {
    casilla = new Casilla(false,0,0);    
  });

  it("debeSalirSiLaCeldasSonIguales", function() {
    var esperado = casilla.jugar(0,0);
	expect(true).toEqual(esperado);	
  });
  it("debeRetornarTrueSiEsesExtremoAIzquieraAbajo", function() {
	casilla = new Casilla(false,Casilla.maximo,Casilla.minimo);
    var esperado = casilla.esExtremoAIzquierdaAbajo();
	expect(true).toEqual(esperado);	
  });   
  it("debeRetornarTrueSiEsExtremoAIzquieraArriba", function() {
	casilla = new Casilla(false,Casilla.minimo,Casilla.minimo);
    var esperado = casilla.esExtremoAIzquierdaArriba();
	expect(true).toEqual(esperado);	
  });  
  it("debeRetornarTrueSiEsExtremoADerechaArriba", function() {
	casilla = new Casilla(false,Casilla.minimo,Casilla.maximo);
    var esperado = casilla.esExtremoADerechaArriba();
	expect(true).toEqual(esperado);	
  });   
  it("debeRetornarTrueSiEsExtremoADerechaArribaAbajo", function() {
	casilla = new Casilla(false,Casilla.maximo,Casilla.maximo);
    var esperado = casilla.esExtremoADerechaAbajo();
	expect(true).toEqual(esperado);	
  }); 
  it("debeRetornarTrueSiEsExtremoLatelarIzquierda", function() {
	casilla = new Casilla(false,1,0);
    var esperado = casilla.esExtremoLateralIzquierda();
	expect(true).toEqual(esperado);	
  }); 
  it("debeRetornarTrueSiEsExtremoLatelarDerecha", function() {
	casilla = new Casilla(false,1,Casilla.maximo);
    var esperado = casilla.esExtremoLateralDerecha();
	expect(true).toEqual(esperado);	
  }); 
  it("debeRetornarTrueSiEsExtremoLatelarArriba", function() {
	casilla = new Casilla(false,0,1);
    var esperado = casilla.esExtremoLateralArriba();
	expect(true).toEqual(esperado);	
  }); 
  it("debeRetornarTrueSiEsExtremoLatelarAbajo", function() {
	casilla = new Casilla(false,Casilla.maximo,1);
    var esperado = casilla.esExtremoLateralAbajo();
	expect(true).toEqual(esperado);	
  }); 
  it("debeRetornarEsNoExtremo", function() {
	casilla = new Casilla(false,1,1);
    var esperado = casilla.esNoExtremo();
	expect(true).toEqual(esperado);	
  });  

});