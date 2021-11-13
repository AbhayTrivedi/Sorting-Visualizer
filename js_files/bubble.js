// Bubble Sort

// "linear-gradient(#0575E6, #00F260)"

async function bubbleSort() {
   let Bars = document.querySelectorAll(".bar");

   for (let i = 0; i < Bars.length - 1; i++) {
      for (let j = 0; j < Bars.length - i - 1; j++) {

         Bars[j].style.background = "yellow"; // active
         Bars[j + 1].style.background = "yellow"; // active

         await timePLs();

         const val1 = Number(Bars[j].style.height.slice(0, -2));
         const val2 = Number(Bars[j + 1].style.height.slice(0, -2));

         if (val1 > val2) {
            await swap(j, j + 1);
            Bars = document.querySelectorAll(".bar");
         }

         Bars[j].style.background = "linear-gradient(#e66465, #9198e5)"; // unsorted
         Bars[j + 1].style.background = "linear-gradient(#e66465, #9198e5)"; // unsorted
      }

      Bars[Bars.length - i - 1].style.background = "linear-gradient(#0575E6, #00F260)"; // sorted
   }
   Bars[0].style.background = "linear-gradient(#0575E6, #00F260)"; // sorted
}
