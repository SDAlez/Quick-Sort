const array = new Array(100000000)
for(let x = 0; x < array.length; x++) {
array[x] = Math.floor(Math.random() * array.length)
}
quickSort(array, 0, array.length-1)
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
    while (itemLeft <= itemRight) {
        while (array[itemLeft] < pivot) {
            itemLeft++
        }
        while (array[itemRight] > pivot) {
            itemRight--
        }
        if (itemLeft <= itemRight) {
            swapArray(array, itemLeft, itemRight)
            itemLeft++
            itemRight--
        }
    }
return itemLeft;
}

function quickSort(array, left, right) {
    var index
    if (array.length > 1) {
        index = partition(array, left, right)
        if (left < index-1) {
            quickSort(array, left, index-1);
        }
        if (right > index) {
            quickSort(array, index, right);
        }
    }
}

