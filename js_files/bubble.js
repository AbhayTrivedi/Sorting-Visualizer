// Bubble Sort

// "linear-gradient(#0575E6, #00F260)"

async function bubbleSort(delay = 100) {
   let Bars = document.querySelectorAll(".bar");
   
   for (let i = 0; i < Bars.length - 1; i++) {
      for (let j = 0; j < Bars.length - i - 1; j++) {

         Bars[j].style.backgroundColor = "#FF4949"; // red
         Bars[j + 1].style.backgroundColor = "#FF4949"; // red

         await new Promise(resolve =>
            setTimeout(() => {
               resolve();
            }, delay)
         );

         const val1 = Number(Bars[j].childNodes[0].innerHTML);
         const val2 = Number(Bars[j + 1].childNodes[0].innerHTML);

         if (val1 > val2) {
            await swap(Bars[j], Bars[j + 1]);
            Bars = document.querySelectorAll(".bar");
         }

         Bars[j].style.backgroundColor = "#58B7FF"; // blue
         Bars[j + 1].style.backgroundColor = "#58B7FF"; // blue
      }
      
      Bars[Bars.length - i - 1].style.backgroundColor = "#13CE66"; // green
   }
   Bars[0].style.backgroundColor = "#13CE66";
}
