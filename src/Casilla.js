Casilla.minimo = 0;
Casilla.maximo = 19;
function Casilla(estadoActual,estadoSiguiente, x , y) {
	this.estadoActual = estadoActual;
	this.estadoSiguiente = estadoSiguiente;
	this.x = x;
	this.y = y;	
	this.getX = function()
	{
       return this.x;
	}
	this.getY = function()
	{
       return this.y;
	}
	this.getEstadoActual = function()
	{
       return this.estadoActual;
	}
	this.setEstadoActual = function(val)
	{
       this.estadoActual=val;
	}	
	this.getEstadoSiguiente = function()
	{
       return this.estadoSiguiente;
	}
	this.setEstadoSiguiente = function(val)
	{
       this.estadoSiguiente=val;
	}	
	
	
}

Casilla.prototype.jugar = function(valX,valY) {
  if(this.x==valX && this.y==valY)
  {
	return true;
  }  
};
Casilla.prototype.esExtremoAIzquierdaArriba = function() {
  if(this.x===Casilla.minimo && this.y===Casilla.minimo)
  {
	return true;
  }      
  return false;  
};
Casilla.prototype.esExtremoAIzquierdaAbajo = function() {
  if(this.x===Casilla.maximo && this.y===Casilla.minimo)
  {
	return true;
  }
  return false;  
};

Casilla.prototype.esExtremoADerechaArriba = function() {
  if(this.x===Casilla.minimo && this.y===Casilla.maximo)
  {
	return true;
  }  
  return false;  
};
Casilla.prototype.esExtremoADerechaAbajo = function() {
  if(this.x===Casilla.maximo && this.y===Casilla.maximo)
  {
	return true;
  }  
  return false;  
};
Casilla.prototype.esExtremoLateralIzquierda = function() {
  if(this.y===Casilla.minimo && this.x>Casilla.minimo && this.x<Casilla.maximo)
  {
	return true;
  }    
  return false;  
};
Casilla.prototype.esExtremoLateralDerecha = function() {
  if(this.y===Casilla.maximo && this.x>Casilla.minimo && this.x<Casilla.maximo)
  {
	return true;
  }    
  return false;  
};
Casilla.prototype.esExtremoLateralArriba = function() {
  if(this.x===Casilla.minimo && this.y>Casilla.minimo && this.y<Casilla.maximo)
  {
	return true;
  }    
  return false;  
};
Casilla.prototype.esExtremoLateralAbajo = function() {
  if(this.x===Casilla.maximo && this.y>Casilla.minimo && this.y<Casilla.maximo)
  {
	return true;
  }    
  return false;  
};
Casilla.prototype.esNoExtremo = function() {
  if(this.x>Casilla.minimo && this.x<Casilla.maximo && this.y>Casilla.minimo && this.y<Casilla.maximo)
  {
	return true;
  }    
  return false;  
};
Casilla.prototype.actualizarEstado = function(casillasVecinas) {
	var contador=0;
	for(var i=0;i<casillasVecinas.length;i++)
	{
		if(casillasVecinas[i].getEstadoActual()==true)
		{
			contador++;
		}		
	}
	if(this.estadoActual==true&&contador==0)
	{
		this.estadoSiguiente=false;	
	}
	else if(this.estadoActual==true&&contador>3)
	{
		this.estadoSiguiente=false;	
	}
	else if(this.estadoActual==true&&contador<2)
	{
		this.estadoSiguiente=false;	
	}
	else if(this.estadoActual==false&&contador==3)
	{
		this.estadoSiguiente=true;
	}	
}




