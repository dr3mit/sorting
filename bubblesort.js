function compare(num){
    return num++;
}


function swap(val0, val1){
    return [val1, val0];
}

function bubbleSort(array) {
    let comparitions = 0;
    let swapped;
    if (!array){
        return [];
    }
    for (let j = 0; j < array.length - 1; j++){
        for (let i = 0; i < array.length - 1; i++){
            comparitions = compare(comparitions);
            if (array[i] > array[i + 1]){ 
                swapped = swap(array[i], array[i + 1]);
                array[i] = swapped[0]
                array[i + 1] = swapped[1];
            }
        }
    } 
    return array;
}

