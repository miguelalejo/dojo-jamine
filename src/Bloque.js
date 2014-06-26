function Bloque(dimensionX,dimensionY) {	
	this.dimensionX=dimensionX;
	this.dimensionY=dimensionY;
	this.casillas=new Array();
	this.getCasillas = function()
	{
       return this.casillas;
	}
	this.getDimensionX = function()
	{
       return this.dimensionX;
	}
	this.getDimensionY = function()
	{
       return this.dimensionY;
	}
}

Bloque.prototype.inicializar = function() {
	for (var i = 0; i < this.dimensionX; i++)
	{
		this.casillas[i] = new Array();
		for (var j = 0; j < this.dimensionY; j++)
		{
			this.casillas[i][j] = new Casilla(false , false, i, j);   					
		} 
	} 
};
Bloque.prototype.getArregloIzquierdaArriba = function(casilla) {
	 var casillas=new Array();
	 casillas[0]= this.casillas[casilla.getX()][casilla.getY()+1];
	 casillas[1]= this.casillas[casilla.getX()+1][casilla.getY()+1];
	 casillas[2]= this.casillas[casilla.getX()+1][casilla.getY()];
	 casilla.actualizarEstado(casillas);
	 return casillas;
};
Bloque.prototype.getArregloIzquierdaAbajo = function(casilla) {
	 var casillas=new Array();
	 casillas[0]= this.casillas[casilla.getX()][Casilla.minimo+1];
	 casillas[1]= this.casillas[casilla.getX()-1][Casilla.minimo+1];
	 casillas[2]= this.casillas[casilla.getX()-1][Casilla.minimo];	
	 casilla.actualizarEstado(casillas);	 
	 return casillas;
};
Bloque.prototype.getArregloDerechaArriba = function(casilla) {
	 var casillas=new Array();
	 casillas[0]= this.casillas[Casilla.minimo+0][casilla.getY()-1];
	 casillas[1]= this.casillas[Casilla.minimo+1][casilla.getY()-1];
	 casillas[2]= this.casillas[Casilla.minimo+1][casilla.getY()];
	 casilla.actualizarEstado(casillas);
	 return casillas;
};
Bloque.prototype.getArregloDerechaAbajo = function(casilla) {
	 var casillas=new Array();
	 casillas[0]= this.casillas[casilla.getX()][casilla.getY()-1];
	 casillas[1]= this.casillas[casilla.getX()-1][casilla.getY()-1];
	 casillas[2]= this.casillas[casilla.getX()-1][casilla.getY()];
	 casilla.actualizarEstado(casillas);
	 return casillas;
};
Bloque.prototype.getArregloLateralArriba = function(casilla) {
	 var casillas=new Array();
	 casillas[0]= this.casillas[casilla.getX()][casilla.getY()-1];
	 casillas[1]= this.casillas[casilla.getX()][casilla.getY()+1];
	 casillas[2]= this.casillas[casilla.getX()+1][casilla.getY()-1];
	 casillas[3]= this.casillas[casilla.getX()+1][casilla.getY()];
	 casillas[4]= this.casillas[casilla.getX()+1][casilla.getY()+1];
	 casilla.actualizarEstado(casillas);
	 return casillas;
};
Bloque.prototype.getArregloLateralAbajo = function(casilla) {
	 var casillas=new Array();
	 casillas[0]= this.casillas[casilla.getX()][casilla.getY()-1];
	 casillas[1]= this.casillas[casilla.getX()][casilla.getY()+1];
	 casillas[2]= this.casillas[casilla.getX()-1][casilla.getY()-1];
	 casillas[3]= this.casillas[casilla.getX()-1][casilla.getY()];
	 casillas[4]= this.casillas[casilla.getX()-1][casilla.getY()+1];
	 casilla.actualizarEstado(casillas);
	 return casillas;
};
Bloque.prototype.getArregloLateralIzquierda = function(casilla) {
	 var casillas=new Array();
	 casillas[0]= this.casillas[casilla.getX()-1][casilla.getY()];
	 casillas[1]= this.casillas[casilla.getX()+1][casilla.getY()];
	 casillas[2]= this.casillas[casilla.getX()-1][casilla.getY()+1];
	 casillas[3]= this.casillas[casilla.getX()][casilla.getY()+1];
	 casillas[4]= this.casillas[casilla.getX()+1][casilla.getY()+1];
	 casilla.actualizarEstado(casillas);
	 return casillas;
};
Bloque.prototype.getArregloLateralDerecha = function(casilla) {
	 var casillas=new Array();
	 casillas[0]= this.casillas[casilla.getX()-1][casilla.getY()];
	 casillas[1]= this.casillas[casilla.getX()+1][casilla.getY()];
	 casillas[2]= this.casillas[casilla.getX()-1][casilla.getY()-1];
	 casillas[3]= this.casillas[casilla.getX()][casilla.getY()-1];
	 casillas[4]= this.casillas[casilla.getX()+1][casilla.getY()-1];
	 casilla.actualizarEstado(casillas);
	 return casillas;
};
Bloque.prototype.getArregloNoExtremo = function(casilla) {
	 var casillas=new Array();
	 casillas[0]= this.casillas[casilla.getX()-1][casilla.getY()-1];
	 casillas[1]= this.casillas[casilla.getX()-1][casilla.getY()];
	 casillas[2]= this.casillas[casilla.getX()-1][casilla.getY()+1];
	 casillas[3]= this.casillas[casilla.getX()][casilla.getY()-1];	 
	 casillas[4]= this.casillas[casilla.getX()][casilla.getY()+1];	 
	 casillas[5]= this.casillas[casilla.getX()+1][casilla.getY()-1];
	 casillas[6]= this.casillas[casilla.getX()+1][casilla.getY()];
	 casillas[7]= this.casillas[casilla.getX()+1][casilla.getY()+1];
	 casilla.actualizarEstado(casillas);
	 return casillas;
};
Bloque.prototype.actualizarEstadoCasillas= function() {
	for (var i = 0; i < this.dimensionX; i++)
	{
		for (var j = 0; j < this.dimensionY; j++)
		{
			this.casillas[i][j].setEstadoActual(this.casillas[i][j].getEstadoSiguiente());   			
		} 
	} 	
};
Bloque.prototype.jugar= function() {
	for (var i = 0; i < this.dimensionX; i++)
	{
		for (var j = 0; j < this.dimensionY; j++)
		{
			if(this.casillas[i][j].esExtremoAIzquierdaArriba())
			{				
				this.getArregloIzquierdaArriba(this.casillas[i][j]);				
			}
			else if(this.casillas[i][j].esExtremoADerechaArriba())
			{
				this.getArregloDerechaArriba(this.casillas[i][j]);
			}
			else if(this.casillas[i][j].esExtremoAIzquierdaAbajo())
			{
				this.getArregloIzquierdaAbajo(this.casillas[i][j]);
			}
			else if(this.casillas[i][j].esExtremoADerechaAbajo())
			{
				this.getArregloDerechaAbajo(this.casillas[i][j]);
			}
			else if(this.casillas[i][j].esExtremoLateralArriba())
			{
				this.getArregloLateralArriba(this.casillas[i][j]);				
			}
			else if(this.casillas[i][j].esExtremoLateralAbajo())
			{
				this.getArregloLateralAbajo(this.casillas[i][j]);
			}	
			else if(this.casillas[i][j].esExtremoLateralIzquierda())
			{
				this.getArregloLateralIzquierda(this.casillas[i][j]);
			}	
			else if(this.casillas[i][j].esExtremoLateralDerecha())
			{
				this.getArregloLateralDerecha(this.casillas[i][j]);
			}
			else if(this.casillas[i][j].esNoExtremo())
			{
				this.getArregloNoExtremo(this.casillas[i][j]);
			}				
		} 
	} 	
};


