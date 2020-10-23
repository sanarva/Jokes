let btnJoke = document.getElementById('idBtnJoke');
let divButton = document.getElementById("div-button-joke");
let textButton;
let j = 0; 
 
//Con esta función moveré el botón para que no se pueda pulsar a la primera...ni a la segunda muaja ja ja ja
function moveButton(i) {
    j += i;
    //Si es la primera vez que se pasa el ratón por el botón, lo moveremos a la derecha y cambiaremos el texto
    if (j == 1){
        divButton.classList.add("moveButton");
        //Con esta función ternaria cambiaremos el texto del botón
        textButton = true; 
        textButton?btnJoke.innerText = "Do you want to die?":btnJoke.innerText = "Click to laugh";
        textButton=!textButton
    }   


    //Si es la segunda vez que se pasa el ratón por el botón, lo moveremos a su posición original y volveremos a cambiare el texto   
    if (j == 2){
        divButton.classList.remove("moveButton");  
        //Con esta función ternaria cambiaremos el texto del botón
        textButton = true; 
        textButton?btnJoke.innerText = "Came on, click!":btnJoke.innerText = "Do you want to die?";
        textButton=!textButton
    }
}


$(document).ready(function() {
    $("#idBtnJoke").click(function(e) {
        e.preventDefault();
        //Inicializamos el campo del formulario para dejarlo en blanco
        $("#idJoke").html(""); 
        $.ajax({
            type: "get",
            url:"http://api.icndb.com/jokes/random",
            dataType:"json",
            
            success:function(data){
                console.log(data);
                $("#idJoke").text(data.value.joke);
            },
            
            error: function (xhr, status, error) {
                console.log(xhr); 
                console.log(status); 
                console.log(error);
            }
                        
        });
            
    });
            
});    
