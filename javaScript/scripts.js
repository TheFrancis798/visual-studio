const carrito = document.getElementById('carrito');
const elementos1 = document.getElementById('lista-1');
const lista = document.querySelector('#lista-carrito tbody');
const vaciarCarritobtn = document.getElementById('vaciar-carrito');

cargarEventlisteners();
function cargarEventlisteners(){
    elementos1.addEventListener('click',comprarElemento);
    carrito.addEventListener('click',EliminarElemento);
    vaciarCarritobtn.addEventListener('click',vaciarElemento);
}
function comprarElemento(e){
    if(e.target.classlista.contains ('agregar-carrito') ){
        const elemento =e.target.parentElement.parentelement;
        leerdatoselemento(elemento);
    }
}

function leerdatoselemento(elemento){
    const infoelemento={
        imagen: elemento.querySelector('img').scr,
        titulo: elemento.querySelector('h3').textcontent,
        precio: elemento.querySelector('precio').textcontent,
        id: elemento.querySelector('a').getElementById('data-id'),
    }
    function insertarcarrito(elemento){
        const row= document.createElement('tr');
        row.innerHTML = `
        <td>
        
            <img src="${elemento.imagen}" width=100>
        </td>
        <td>
            ${elemento.titulo}
         </td>
            ${elemento.precio}
        <td>
            <a herf"#" class="borrar" data-id = "${elemento.id}" >x </a>
         </td>
    `;
    lista.appendChild(row);

    function EliminarElemento(a){
        e.preventdefault();
        let elemento,
        elementoid;
        if (e.target.classlist.contains('borrar')){
            e.target.parentelement.parentElement.remove();
            elemento = e.target.parentElement.parentElement;
            elementoid = elemento.querySelector('a').getElementById('data-id');
        }
    }



    }
}
function vaciarcarrito(){
    while(lista.firstChild){
        lista.removeChild(lista.firstChild)
    }
    return false;
}
