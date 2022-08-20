function tiempos() {
  var lista = [];
  var lista1 = [];
  var lista2 = [];
  var lista3 = [];
  var t1, t2, tburbuja, tquicksort;
  var sortedArray;
  var randomNumber;

  function runtime(cantDatos) {
    var tiempos = [];
    for (let index = 0; index < cantDatos; index++) {
      randomNumber = Math.floor(Math.random() * 100);
      lista[index] = randomNumber;
      lista1[index] = randomNumber;
      lista2[index] = randomNumber;
      lista3[index] = randomNumber;
    }
    //runtime de quicksort
    t2 = performance.now();
    sortedArray = quickSort(lista, 0, lista.length - 1);
    t1 = performance.now();
    tquicksort = (t2 - t1) / 1000;

    // runtime burbuja
    t1 = performance.now();
    Burbuja(lista1);
    t2 = performance.now();
    tburbuja = (t2 - t1) / 1000;
    //runtime bucket
    t1 = performance.now();
    var cub = bucketSort(lista2, cantDatos);
    t2 = performance.now();
    var bucket = (t2 - t1) / 1000;

    //runtime shakesort
    t1 = performance.now();
    shakesort(lista3);
    t2 = performance.now();
    var tshakesort = (t2 - t1) / 1000;
    //guardar tiempos calculados para devolverlos
    tiempos[0] = tquicksort;
    tiempos[1] = tburbuja;
    tiempos[2] = bucket;
    tiempos[3] = tshakesort;

    console.log(tiempos);
    return tiempos;
  }

  function Burbuja(lista) {
    var n, i, k, aux;
    n = lista.length;
    //  console.log(lista); // Mostramos, por consola, la lista desordenada
    // Algoritmo de burbuja
    for (k = 1; k < n; k++) {
      for (i = 0; i < n - k; i++) {
        if (lista[i] > lista[i + 1]) {
          aux = lista[i];
          lista[i] = lista[i + 1];
          lista[i + 1] = aux;
        }
      }
    }
    console.log(lista); // Mostramos, por consola, la lista ya ordenada
  }

  //quicksort

  function quick_Sort(origArray) {
    if (origArray.length <= 1) {
      return origArray;
    } else {
      var left = [];
      var right = [];
      var newArray = [];
      var pivot = origArray.pop();
      var length = origArray.length;

      for (var i = 0; i < length; i++) {
        if (origArray[i] <= pivot) {
          left.push(origArray[i]);
        } else {
          right.push(origArray[i]);
        }
      }
      return newArray.concat(quick_Sort(left), pivot, quick_Sort(right));
    }
  }

  function swap(items, leftIndex, rightIndex) {
    var temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
  }
  function partition(items, left, right) {
    var pivot = items[Math.floor((right + left) / 2)], //middle element
      i = left, //left pointer
      j = right; //right pointer
    while (i <= j) {
      while (items[i] < pivot) {
        i++;
      }
      while (items[j] > pivot) {
        j--;
      }
      if (i <= j) {
        swap(items, i, j); //sawpping two elements
        i++;
        j--;
      }
    }
    return i;
  }

  function quickSort(items, left, right) {
    var index;
    if (items.length > 1) {
      index = partition(items, left, right); //index returned from partition
      if (left < index - 1) {
        //more elements on the left side of the pivot
        quickSort(items, left, index - 1);
      }
      if (index < right) {
        //more elements on the right side of the pivot
        quickSort(items, index, right);
      }
    }
    return items;
  }

  // InsertionSort to be used within bucket sort
  function insertionSort(array) {
    var length = array.length;

    for (var i = 1; i < length; i++) {
      var temp = array[i];
      for (var j = i - 1; j >= 0 && array[j] > temp; j--) {
        array[j + 1] = array[j];
      }
      array[j + 1] = temp;
    }

    return array;
  }

  // Implement bucket sort
  function bucketSort(array, bucketSize) {
    if (array.length === 0) {
      return array;
    }

    // Declaring vars
    var i,
      minValue = array[0],
      maxValue = array[0],
      bucketSize = bucketSize || 5;

    // Setting min and max values
    array.forEach(function (currentVal) {
      if (currentVal < minValue) {
        minValue = currentVal;
      } else if (currentVal > maxValue) {
        maxValue = currentVal;
      }
    });

    // Initializing buckets
    var bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
    var allBuckets = new Array(bucketCount);

    for (i = 0; i < allBuckets.length; i++) {
      allBuckets[i] = [];
    }

    // Pushing values to buckets
    array.forEach(function (currentVal) {
      allBuckets[Math.floor((currentVal - minValue) / bucketSize)].push(
        currentVal
      );
    });

    // Sorting buckets
    array.length = 0;

    allBuckets.forEach(function (bucket) {
      insertionSort(bucket);
      bucket.forEach(function (element) {
        array.push(element);
      });
    });

    return array;
  }

  function shakesort(nums) {
    console.log("Original array:");
    console.log(nums);
    let is_Sorted = true;
    while (is_Sorted) {
      for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] > nums[i + 1]) {
          let temp = nums[i];
          nums[i] = nums[i + 1];
          nums[i + 1] = temp;
          is_Sorted = true;
        }
      }

      if (!is_Sorted) break;

      is_Sorted = false;

      for (let j = nums.length - 1; j > 0; j--) {
        if (nums[j - 1] > nums[j]) {
          let temp = nums[j];
          nums[j] = nums[j - 1];
          nums[j - 1] = temp;
          is_Sorted = true;
        }
      }
    }
    return nums;
  }

  function graficar(value) {
    var colores = [
      "rgba(241,28,39,1,0.3)", //red
      "rgba(28,145,241,1,0.3)", //blue
      "rgba(231,221,28,1,0.3)", //yellow
      "rgba(38,231,28,1,0.3)", //green
    ];
    labels = ["Quicksort", "Burbuja", "Bucketsort", "Shakesort"];
    
    var ctx = document.getElementById("myChart").getContext("2d");
    var chart = new Chart(ctx, {
      type: "radar",

      data: {
        labels: labels,
        datasets: [
          {
            label: `${value} Datos`,
            fontColor: 'white',
            backgroundColor: "#FFFFFF50",
            pointBackgroundColor: "#FF6497",
            data: datos3,
          },
        ],
      },

      options:{
        scale:{
          pointLabels:{
             fontColor:"#ffff",
             fontSize: 15
             
          }
        },
           
            legend:{
              fontColor:'#fff',
              labels:{
                fontColor:'#fff',
                fontSize: 15
              }
            }
      },
    });

    

    console.log(sortedArray);
    console.log(tburbuja + "ms  " + tquicksort + "ms");
    console.log(cub);

    
  }

  

  var cantidadDatos = document.getElementById("cantidadDatos").value;

  var datos3 = runtime(cantidadDatos);

  console.log(datos3);
  graficar(cantidadDatos);
}
