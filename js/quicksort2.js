var datos = [];
var backgroundColor = [];
var comparando;
var segundos;
var cantidad;
var container = document.getElementById('arreglo');

function ordenar() {
  //document.getElementById('arreglo').innerHTML = ``;
  document.getElementById('quicksort').innerHTML = ``;
  comparando = 'rgba(252, 20, 20)';
  // segundos = document.getElementById('segundos').value;
  cantidad = document.getElementById('cantidad').value;
  //document.getElementById('listaAleatoria').innerHTML = ``;
  for (let i = 0; i < cantidad; i++) {
      datos[i] = Math.floor(Math.random() * 100);
      backgroundColor[i] = 'rgba(255, 99, 132, 0.2)';
          document.getElementById('listaAleatoria').innerHTML += `
       <div class="col colorAleatoria">${datos[i]}</div>
      `;

  }

  console.log(datos)
 
  quicksort(datos, 0, cantidad);
  console.log(datos);

}


async function quicksort( array,  left, right) {
    await timer(1*1000);
    graficar(array);
    if (left < right) {
    var boundary = left;
    
    for (let i = left + 1; i < right; i++) {
        backgroundColor[i]= 'rgba(255, 222, 132, 0.5)';//amarillo
        graficar(array);
        await timer(1*1000);
            if (array[i] > array[left]) {
                // backgroundColor[boundary]='rgba(255, 28, 10, 0.5)';  //rosado-rojo
                // backgroundColor[right]='rgba(255, 28, 10, 0.5)';//rosado-rojo
                graficar(array);
                await timer(1*1000);
                    graficar(array);
                    await timer(1*1000);
                    swap(array, i, ++boundary);
                    // backgroundColor[right]= 'rgba(255, 99, 132, 0.2)'; //rosado-defecto
                    // backgroundColor[boundary]= 'rgba(255, 99, 132, 0.2)';//rosado-defecto
                    // graficar(array);
                    // await timer(1*1000);
                    console.log(array)
                  
                    }
                   
            }
            backgroundColor[boundary]='rgba(255, 28, 10, 0.5)';  //rosado-rojo
            backgroundColor[right]='rgba(255, 28, 10, 0.5)';//rosado-rojo
            graficar(array);
            await timer(1*1000);
            swap(array, left, boundary);  

            backgroundColor[boundary]= "rgba(38,231,28,1)"; //green        
            
            quicksort(array, left, boundary);
         
            backgroundColor[right]= "rgba(38,231,28,1)"; //green
            graficar(array);
          
            quicksort(array, boundary + 1, right);
        
         }    
   
    }
  
 function swap( array,  left,  right) {
        var tmp = array[right];
        array[right] = array[left];
        array[left] = tmp;
        }


//funcion para graficar el arreglo y las comparaciones
function graficar(datos){
    var ctx = document.getElementById('quicksort').getContext('2d');
      var chart = new Chart(ctx, {
  
          type: 'bar',
          easing: '',
          gridLines: {
              display: false,
          },
  
          data: {
              labels: datos,
              datasets: [{
                  label: 'Ordenamiento Quick sort',
                  backgroundColor: backgroundColor,
                  borderColor: 'rgb(255, 99, 132)',
                  data: datos
              }]
          },
  
  
  
          options: {
              animation: {
                  duration: 0
              },
              legend: {
                labels: {
                    fontColor: "white",
                    fontSize: 15
                }
              },
              scales: {
                  yAxes: [{
                      ticks: {
                          display: false //Remover los labels del eje Y
                      }
                  }],
                  xAxes: [{
                    ticks: {
                        fontColor: "white",
                        fontSize: 14,
                        stepSize: 1, beginAtZero: true
                    }
                }]
              }
          }
  
  
      });
  }
  
  //funcion para hacer timer
  function timer(ms) {
    return new Promise(res => setTimeout(res, ms));
  }