// Selection sort 

async function selectionSort() {
   let Bars = document.querySelectorAll(".bar");
   let minimum;

   for (let i = 0; i < Bars.length - 1; i++) {
      minimum = i;
      Bars[i].style.background = "yellow"; // active

      for (let j = i + 1; j < Bars.length; j++) {

         Bars[j].style.background = "yellow"; // active

         const minVal = Number(Bars[minimum].style.height.slice(0, -2));
         const val = Number(Bars[j].style.height.slice(0, -2));

         if (val < minVal) {
            Bars[minimum].style.background = "linear-gradient(#e66465, #9198e5)"; // unsorted
            minimum = j;
            Bars[minimum].style.background = "yellow"; // active
         }

         await timePLs();

         if (j != minimum)
            Bars[j].style.background = "linear-gradient(#e66465, #9198e5)"; // unsorted
      }

      await swap(i, minimum);
      Bars[minimum].style.background = "linear-gradient(#e66465, #9198e5)"; // unsorted
      Bars[i].style.background = "linear-gradient(#0575E6, #00F260)"; // sorted
   }

   Bars[Bars.length - 1].style.background = "linear-gradient(#0575E6, #00F260)"; // sorted

}
