// Marge sort

async function mergeSort(left, right) {
   if (left < right) {
      let mid = Math.floor(left + (right - left) / 2);
      
      await mergeSort(left, mid);
      await mergeSort(mid + 1, right);
      await merge(left, right);
   }
}

async function merge(left, right) {
   let Bars = document.querySelectorAll(".bar");
   let i, j, k = left;
   let mid = Math.floor(left + (right - left) / 2);
   let n1 = mid - left + 1;
   let n2 = right - mid;
   let L = new Array();
   let R = new Array();

   for (i = 0; i < n1; i++) {
      await timePLs();
      L[i] = Number(Bars[left + i].style.height.slice(0, -2));
      Bars[left + i].style.background = "yellow"; // active
   }
   for (j = 0; j < n2; j++) {
      await timePLs();
      R[j] = Number(Bars[mid + 1 + j].style.height.slice(0, -2));
      Bars[mid + 1 + j].style.background = "yellow"; // active
   }

   i = 0;
   j = 0;

   while (i < n1 && j < n2) {
      await timePLs();
      if (L[i] <= R[j]) {
         Bars[k].style.height = `${L[i]}px`;
         i++;
      }
      else {
         Bars[k].style.height = `${R[j]}px`;
         j++;
      }
      Bars[k].style.background = "linear-gradient(#0575E6, #00F260)"; // sorted
      k++;
   }
   while (i < n1) {
      await timePLs();
      Bars[k].style.height = `${L[i]}px`;
      Bars[k].style.background = "linear-gradient(#0575E6, #00F260)"; // sorted
      i++;
      k++;
   }
   while (j < n2) {
      await timePLs();
      Bars[k].style.height = `${R[j]}px`;
      Bars[k].style.background = "linear-gradient(#0575E6, #00F260)"; // sorted
      j++;
      k++;
   }
}

