import { insertionSort } from "./InsertionSort.js";
import { mergeSort } from "./MergeSort.js"
import { quickSort } from "./QuickSort.js"
import { countingSort } from "./CountingSort.js";

var runningTime = [
    [],
    [],
    [],
    []
];
//genrate random numbers using input size
function genetareRandomInputs(sizes) {
    var inputs = [];
    for (let i = 0; i < sizes.length; i++) {
        inputs[i] = Array.from({ length: sizes[i] }, () => Math.ceil(Math.random() * (9 - 1) + 1));
    }
    return inputs;
}

function getInputs() {
    //get input size from the user
    var sizes = [];
    var inputSize = document.getElementsByClassName("input")
    for (let i = 0; i < 5; i++) {
        sizes[i] = inputSize[i].value;
    }
    return sizes;
}

function addRow(runningTime) {
    // Get a reference to the table
    let table = document.getElementById("loging-table");
    //irate over rows
    for (let i = 0; i < 4; i++) {
        //irate over cells
        for (let x = 2; x < 7; x++) {
            //change the value of the cells
            table.rows[i].cells[x].innerHTML = runningTime[i][x - 2];
        }
    }

}

function solve() {
    //5 random inputs
    var inputs = genetareRandomInputs(getInputs());
    //sorting the random inputs
    for (let i = 0; i < inputs.length; i++) {
        //measure the performance
        let start = performance.now();
        insertionSort(inputs[i]);
        let duration = performance.now() - start;
        runningTime[0].push(duration);
        start = performance.now();
        mergeSort(inputs[i]);
        duration = performance.now() - start;
        runningTime[1].push(duration);
        start = performance.now();
        quickSort(inputs[i], 0, inputs[i].length - 1);
        duration = performance.now() - start;
        runningTime[2].push(duration);
        start = performance.now();
        countingSort(inputs[i]);
        duration = performance.now() - start;
        runningTime[3].push(duration);
    }
    console.log(inputs, runningTime);
    //loging the results in the table
    addRow(runningTime);
    runningTime = [
        [],
        [],
        [],
        []
    ];

}
var btn = document.getElementById("solve");
btn.addEventListener("click", solve);