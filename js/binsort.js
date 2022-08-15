var datos = [];
var backgroundColor = [];
var comparando;
var segundos;
var cantidad;
var container = document.getElementById('arreglo');
//pintando todo en la pagina

comparando = 'rgba(54, 162, 235, 0.2)';
segundos = 3 // document.getElementById('segundos').value;


function ordenar() {
    cantidad = document.getElementById('cantidad').value;
    document.getElementById('listaAleatoria').innerHTML = ``;
    document.getElementById('listaOrdenada').innerHTML = ``;
    document.getElementById('arreglo').innerHTML = ``;
    for (let i = 0; i < cantidad; i++) {
        datos[i] = Math.floor(Math.random() * 100);
        backgroundColor[i] = 'rgba(255, 99, 132, 0.2)';
        document.getElementById('listaAleatoria').innerHTML += `
       <div class="col colorAleatoria">${datos[i]}</div>
        `;

    }
    bucketSort(datos, 10);
}

// for (let i = 0; i < datos.length; i++) {
//     var objeto = document.createElement("div");

//     objeto.setAttribute('id', 'dato' + i);
//     objeto.setAttribute('class', 'dato rounded');
//     objeto.innerText = (datos[i]);
//     container.appendChild(objeto);
// }

// InsertionSort to be used within bucket sort
function insertionSort(array) {
    var length = array.length;
    var cubet;
    for (var i = 1; i < length; i++) {
        var temp = array[i];
        for (var j = i - 1; j >= 0 && array[j] > temp; j--) {
            array[j + 1] = array[j];
            console.log(array);
        }

        array[j + 1] = temp;

    }

    return array;
}

// Implement bucket sort
async function bucketSort(array, bucketSize) {
    if (array.length === 0) {
        return array;
    }

    // Declaring vars
    var i,
        minValue = array[0],
        maxValue = array[0],
        bucketSize = bucketSize || 5;// le asigna el tiempo y si el bucketsize no llega es 5 pero 
        //pero siempre llegara prque le pasamos 10 pero si no se le asignara el 5 por algun undefined que llegue de bucketsize
        //rango que se van a partit los datos (10)

    // Setting min and max values
    array.forEach((currentVal) => {  //determinar el valor maximo y valor minimo del array genrado aleatoriamente del arrau que le pasas 
        
        if (currentVal < minValue) {
            minValue = currentVal; // minimo valor que se encuentra en el array aleatorio  por ejemplo -- (1)  u otros
        } else if (currentVal > maxValue) {
            maxValue = currentVal;// maximo valor que se encuentra en el array aleatorio por ejemplo --(100) u otros
        }
    })

    // Initializing buckets
    var bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1; //determina la cantida de nodos o cubetas que son  los morados   
    var allBuckets = new Array(bucketCount); //la cantida de elementos cubetas o nodos se almacena en un arrau

    //<pintar cubetas
    for (i = 0; i < allBuckets.length; i++) {
        allBuckets[i] = [];
      
        var objeto = document.createElement("div");

        objeto.setAttribute('id', 'dato' + i);
        objeto.setAttribute('class', 'dato rounded');
        objeto.innerText = i;
        container.appendChild(objeto);
        await timer(1 * 1000);
    }
    //pintar cubetas />

    // Pushing values to buckets

    array.forEach((currentVal) => {
       
        var j = (Math.floor((currentVal - minValue) / bucketSize)); 
        console.log('este',j)
        var flecha = document.createElement('div');
        var p = document.createElement('div');
        p.setAttribute('class', 'cubeta');
        p.setAttribute('id', 'cubeta' + j);
        // await timer(2*1000);
        flecha.setAttribute('class', 'arrow-down');
        allBuckets[j].push(currentVal);
        console.log('asdd' + currentVal);
        var cubeta = document.getElementById('dato' + j);
        p.innerText = currentVal;
        cubeta.append(flecha);
        cubeta.append(p);
        // await timer(2*1000);



    });


    // ordenar buckets
    array.length = 0;
    allBuckets.forEach(function(bucket) {
        insertionSort(bucket);
        bucket.forEach(function(element) {
            array.push(element);


        });
        cont = 0;
        console.log(bucket);
        // document.getElementById('cubeta'+cont).innerText = 'asd.876';



    });
    console.log('pintando ordenado');

    repintar(array);
    return array;
}

function timer(ms) {
    return new Promise(res => setTimeout(res, ms));
}
async function repintar(array) {
    await timer(3 * 1000);
    console.log('pintando ordenado1');
    console.log(array);

    document.getElementById('listaOrdenada').innerHTML = ``;
    for (let k = 0; k < array.length; k++) {
        document.getElementById('listaOrdenada').innerHTML += `
       <div class="col colorOrdenada">${array[k]}</div>
    `;

    }

}