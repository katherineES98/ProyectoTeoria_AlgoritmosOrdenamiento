let datos = [];
let backgroundColor = [];
let comparando;
let segundos;
let cantidad;
let container = document.getElementById('arreglo');

function ordenar() {
    document.getElementById('arreglo').innerHTML = ``;
    document.getElementById('myChart').innerHTML = ``;
    comparando = 'rgba(54, 162, 235, 0.2)';
    segundos = 2;
    cantidad = document.getElementById('cantidad').value;
    document.getElementById('listaAleatoria').innerHTML = ``;
    for (let i = 0; i < cantidad; i++) {
        datos[i] = Math.floor(Math.random() * 100);
        backgroundColor[i] = 'rgba(255, 99, 132, 0.2)';
        document.getElementById('listaAleatoria').innerHTML += `
       <div class="col colorAleatoria">${datos[i]}</div>
        `;

    }
 
    for (let i = 0; i < datos.length; i++) {
        var objeto = document.createElement("div");

        objeto.setAttribute('id', 'dato' + i);
        objeto.setAttribute('class', 'dato rounded');
        objeto.innerText = (datos[i]);
        container.appendChild(objeto);
    }
    bubble(datos);







}