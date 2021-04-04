const array = [5,3,7,6,2,9];

function swapArray(array, item1, item2) {
    let aux;
    aux = array[item1]
    array[item1] = array[item2]
    array[item2] = aux
}