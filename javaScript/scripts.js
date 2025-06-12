function mostarPresentacion() {
    const nombre = document.getElementById("nombre").value;
    const edad = document.getElementById("edad").value;
    const artista  = document.getElementById("artista").value;
    const comida = document.getElementById("comida").value;
    const cancion = document.getElementById("cancion").value;

    let generacion;

    if(edad >= 50){
        generacion = "Baby Boomer";

    } else if(edad >= 43) {
        generacion = "Millenial";
    } else if(edad >= 12) {
        generacion = "Generacion z";
    } else {
        generacion = "Alpha";
    }

    const resultado =  `
        <strong> Hola soy ${nombre} </strong>
        <br>
        tengo ${edad} años y pertenezco a la ${generacion} </strong>
        <br><br>
        mi artista favorito es: <em>${artista}</em><br>
        mi comida favorito es:  <em>${comida}</em><br>
        mi cancion favorito es: <em>${cancion}</em><br>
        
    
    `;


    document.getElementById("resultado").innerHTML= resultado;



}
