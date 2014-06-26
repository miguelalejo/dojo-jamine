describe("Prueba Calculadora", function()
{
	var calculadora;
	beforeEach(function(){

		calculadora=new Calculadora();
		jasmine.addMatchers({

		seaMenorIgualQue: function() {
	      return {
	        compare: function(actual, expected) {
	          var result = {
	            pass: actual <= expected
	          };
	          if (result.pass) {
	            result.message = actual + ' is less than ' + expected;
	          } else {
	            result.message = actual + ' is not less than ' + expected;
	          }
	          return result;
	        }
	      };
	    }
	    });
	});


	
	var spot = { species: "Border Collie" };
	var cosmo = { species: "Border Collie" };
	it("deberia ser verdadero",function(){
		expect(true).toEqual(true);
	});

	it("deberia ser igual spot a cosmo en valor",function(){
		expect(spot).toEqual(cosmo);
	});
	xit("deberia no ser igual spot a cosmo por referencia",function(){
		expect(spot).toBe(cosmo);
	});
    it("deberia ser igual spot a spot por referencia",function(){
		expect(spot).toBe(spot);
	});
	var throwMeAnError = function() {
	throw new Error();
	};
	it("deberia disparar una exepcion",function(){
		expect(throwMeAnError).toThrow();
	});
	it("deberia ser menor que",function(){
		expect(10).seaMenorIgualQue(11);
	});

	it("deberia sumar dos numeros",function(){
		expect(5).toEqual(calculadora.sumar(2,3));
	});
	it("deberia ser instancia de un Numero",function(){
		expect(5).toEqual(jasmine.any(Number));
	});
	it("deberia ser instancia de una Cadena de Caracteres",function(){
		expect("Hola").toEqual(jasmine.any(String));
	});

});