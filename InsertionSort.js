import inputs from "./Inputs.js";
import { measureRunningTime } from "./measureRunningTime.js";

let test = [1, 5, 8, 7, 6, 4, 9, 2, 3, 5, 7, 4, 8, 2, 4, 5, 6, 1, 25, 41, 36];

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;
        //Sort in the ascending order
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }

        arr[j + 1] = key;
    }
    return arr;
}

measureRunningTime(insertionSort, test)
console.time('test');
insertionSort(test);
console.timeEnd('test');