//5 random inputs
var input1 = Array.from({ length: Math.ceil(Math.random() * (1200 - 500) + 500) }, () => Math.ceil(Math.random() * (9 - 1) + 1));
var input2 = Array.from({ length: Math.ceil(Math.random() * (1500 - 300) + 300) }, () => Math.ceil(Math.random() * (9 - 1) + 1));
var input3 = Array.from({ length: Math.ceil(Math.random() * (700 - 500) + 500) }, () => Math.ceil(Math.random() * (9 - 1) + 1));
var input4 = Array.from({ length: Math.ceil(Math.random() * (2000 - 500) + 500) }, () => Math.ceil(Math.random() * (9 - 1) + 1));
var input5 = Array.from({ length: Math.ceil(Math.random() * (300 - 100) + 100) }, () => Math.ceil(Math.random() * (9 - 1) + 1));
var inputs = [input1, input2, input3, input4, input5];
// console.log({ inputs });
export default inputs;