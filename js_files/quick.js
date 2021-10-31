// Quick Sort

async function quickSort(low, high) {
   if (low < high) {
      let pi = await partition(low, high);
      await quickSort(low, pi - 1); 
      await quickSort(pi + 1, high);
   }
   if (low == high){
      let Bars = document.querySelectorAll(".bar");
      Bars[low].style.background = "linear-gradient(#0575E6, #00F260)"; // sorted
   }
}


async function partition(low, high) {
   let Bars = document.querySelectorAll(".bar");
   let pivot = Number(Bars[high].style.height.slice(0, -2));

   Bars[high].style.background = "linear-gradient(#30E8BF, #FF8235)"; //  pivot

   let i = low;

   for (let j = low; j < high; j++) {

      Bars[i].style.background = "yellow"; // active
      Bars[j].style.background = "yellow"; // active
      await timePLs();

      if (Number(Bars[j].style.height.slice(0, -2)) < pivot) {
         await swap(i, j);
         await timePLs();
         Bars[i].style.background = "linear-gradient(#e66465, #9198e5)"; // unsorted
         i++;
         Bars[i].style.background = "yellow"; // active
      }

      if (i != j)
         Bars[j].style.background = "linear-gradient(#e66465, #9198e5)"; // unsorted
   }


   await swap(i, high);
   Bars[i].style.background = "linear-gradient(#0575E6, #00F260)"; // sorted
   Bars[high].style.background = "linear-gradient(#e66465, #9198e5)"; // unsorted

   if (high == i)
      Bars[high].style.background = "linear-gradient(#0575E6, #00F260)"; // sorted

   await timePLs();

   return i;
}
