const array = [5,3,7,6,2,9];
partition(array, 0, array.length-1)
console.log(array)

function swapArray(array, item1, item2) {
    let aux;
    aux = array[item1]
    array[item1] = array[item2]
    array[item2] = aux
}

function partition(array, left, right) {
    let pivot = array[Math.floor((left+right)/2)]
    let itemLeft = left
    let itemRight = right
    while(array[itemLeft] < pivot) {
        itemLeft++
    }
    while(array[itemRight] > pivot) {
        itemRight--
    }
    if(itemLeft <= itemRight) {
        swapArray(array, itemRight, itemLeft)
        itemLeft++
        itemRight--
    }
    return itemLeft
}