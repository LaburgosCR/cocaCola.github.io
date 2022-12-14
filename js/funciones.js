jQuery(document).ready(listo); 


function listo() {
	jQuery(".hamb").click(function(e){
		e.preventDefault();/*con esta funcion vamos a evitar que al darle click se vaya al inicio por default*/
		jQuery("header .container nav").toggleClass("open");/*el toggleclass quita y pone*/
		jQuery(".hamb i").toggleClass("fa-times");
	});

	jQuery("header .container nav a").click(function(){ /*trabajamos con todos los a que estan dentro del nav que estan dentro del div container que esta dentro de header*/

		jQuery("header .container nav").removeClass("open");
		jQuery(".hamb i").removeClass("fa-times");
		
		var dev = jQuery(this).attr("href");/*this hace referencia a ese elemento a // attr= obtener el valor del atributo*/
		
		jQuery("html,body").animate({ /*cuando trabajamos con animate yo puedo manipular sus propiedades*/
			"scrollTop": jQuery(dev).offset().top
		})
	})
}



