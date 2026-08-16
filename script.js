/* ================================================= */
/* ANIMACIONES SCROLL */
/* ================================================= */


const elementos = document.querySelectorAll(
    ".reveal, .reveal-left, .reveal-right"
);



function mostrar(){


    elementos.forEach(elemento=>{


        const posicion =
        elemento.getBoundingClientRect().top;



        if(posicion < window.innerHeight - 120){


            elemento.classList.add("active");


        }


    });


}



window.addEventListener(
    "scroll",
    mostrar
);


mostrar();









/* ================================================= */
/* CONTADORES */
/* ================================================= */


const contadores =
document.querySelectorAll(".contador");


let iniciado = false;



function iniciarContadores(){


    if(iniciado) return;



    const zona =
    document.querySelector(".estadisticas");



    if(!zona) return;



    const posicion =
    zona.getBoundingClientRect().top;



    if(posicion < window.innerHeight - 100){



        iniciado = true;



        contadores.forEach(contador=>{


            const objetivo =
            Number(contador.dataset.numero);



            let actual = 0;



            const velocidad =
            objetivo / 80;



            const intervalo =
            setInterval(()=>{


                actual += velocidad;



                if(actual >= objetivo){


                    contador.textContent =
                    objetivo.toLocaleString("es-ES");


                    clearInterval(intervalo);


                }else{


                    contador.textContent =
                    Math.floor(actual)
                    .toLocaleString("es-ES");


                }


            },20);



        });


    }


}



window.addEventListener(
    "scroll",
    iniciarContadores
);


iniciarContadores();









/* ================================================= */
/* MENU MOVIL */
/* ================================================= */


const botonMenu =
document.querySelector(".menu-icon");



const menu =
document.querySelector(".navbar ul");





if(botonMenu){



    botonMenu.addEventListener(
        "click",
        ()=>{


            menu.classList.toggle("active");


        }
    );


}





document.querySelectorAll(".navbar a")
.forEach(enlace=>{


    enlace.addEventListener(
        "click",
        ()=>{


            if(menu){


                menu.classList.remove("active");


            }


        }
    );


});









/* ================================================= */
/* NAVBAR CAMBIO AL HACER SCROLL */
/* ================================================= */



const header =
document.querySelector("header");



window.addEventListener(
"scroll",
()=>{


    if(window.scrollY > 50){


        header.style.background =
        "rgba(6,16,29,.95)";


    }else{


        header.style.background =
        "rgba(6,16,29,.75)";


    }


});









/* ================================================= */
/* EFECTO HERO */
/* ================================================= */



const imagenHero =
document.querySelector(".hero-imagen img");



window.addEventListener(
"mousemove",
(e)=>{


    if(!imagenHero) return;



    const x =
    (window.innerWidth / 2 - e.clientX) / 50;



    const y =
    (window.innerHeight / 2 - e.clientY) / 50;



    imagenHero.style.transform =
    `translate(${x}px,${y}px)`;


});









/* ================================================= */
/* BOTON ARRIBA */
/* ================================================= */


const botonArriba =
document.createElement("button");



botonArriba.innerHTML =
"↑";



botonArriba.className =
"volver-arriba";



document.body.appendChild(
botonArriba
);



botonArriba.addEventListener(
"click",
()=>{


window.scrollTo({

top:0,

behavior:"smooth"

});


});





window.addEventListener(
"scroll",
()=>{


if(window.scrollY > 600){


botonArriba.classList.add(
"mostrar"
);


}else{


botonArriba.classList.remove(
"mostrar"
);


}


});









/* ================================================= */
/* EMAILJS CONTACTO */
/* ================================================= */



if(typeof emailjs !== "undefined"){



emailjs.init(
"y1SKO7NL6CePbOXkQ"
);



const formulario =
document.getElementById(
"formulario-contacto"
);



if(formulario){



formulario.addEventListener(
"submit",
function(e){


e.preventDefault();



emailjs.sendForm(

"service_cecjwy8",

"template_legrk3h",

this

)


.then(()=>{


alert(
"Mensaje enviado correctamente"
);


formulario.reset();


})


.catch(()=>{


alert(
"No se pudo enviar el mensaje"
);


});


});


}


}
