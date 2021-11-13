
var delay = 300;

let bars = [];
let marginSize = 0.1;
let arraySize = 40;
let width = 100 / arraySize - (2 * marginSize);

let barContainer = document.getElementById("bars");

document.getElementById("newArray").addEventListener("click", newArray);

// Generating a new array

function newArray() {
   barContainer.innerHTML = "";
   for (let i = 0; i < arraySize; i++) {
      let val = Math.floor(Math.random() * 50) + 4;

      bars[i] = document.createElement("div");
      bars[i].classList.add("bar");
      bars[i].style.height = (8 * val) + "px";
      bars[i].style.width = width + "%";

      barContainer.appendChild(bars[i]);

   }
}

window.onload = newArray();

// Getting size input from slider range
function sizeInput(x) {
   arraySize = x;
   width = 100 / arraySize - (2 * marginSize);
   newArray();
}

// Getting size input from slider range
function speedInput(x) {
   delay = 800 - x;
}

// Adding event listner to the buttons

let buttons = document.getElementsByClassName("btn");
for (let i = 1; i < buttons.length; i++) {
   buttons[i].addEventListener("click", (button) => {
      switch (button.target.innerHTML) {
         case "Bubble Sort": bubbleSort();
            break;
         case "Selection Sort": selectionSort();
            break;
         case "Insertion Sort": insertionSort();
            break;
         case "Quick Sort": quickSort(0, document.querySelectorAll(".bar").length - 1);
            break;
         case "Merge Sort": mergeSort(0, document.querySelectorAll(".bar").length-1);
            // merge(0, document.querySelectorAll(".bar").length - 1);
            break;
         default:
            console.log("default");
            break;
      }
   });
}

// Swap function

function swap(i, j) {
   return new Promise(resolve => {
      setTimeout(() => {
         let Bars = document.querySelectorAll(".bar");

         const transform1 = Bars[i].style.height;
         const transform2 = Bars[j].style.height;

         // console.log(transform1)

         Bars[i].style.height = transform2;
         Bars[j].style.height = transform1;
         resolve();
      }, delay);
   });
}


// Delay function
async function timePLs() {
   await new Promise(resolve =>
      setTimeout(() => {
         resolve();
      }, delay)
   );
}
