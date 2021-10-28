// Insertion sort

async function insertionSort(delay = 1000) {
   let Bars = document.querySelectorAll(".bar");

   for (let i = 1; i < Bars.length; i++) {
      let temp = Bars[i].childNodes[0].innerHTML;
      let j = i;

      console.log(Bars[i].childNodes[0].innerHTML);

      await new Promise(resolve =>
         setTimeout(() => {
            resolve();
         }, delay)
      );

      while (j > 0 && Number(Bars[j].childNodes[0].innerHTML) < Number(Bars[j - 1].childNodes[0].innerHTML)) {
         await swap(Bars[j], Bars[j - 1]);
         Bars = document.querySelectorAll(".bar");
         j--;
      }
      Bars = document.querySelectorAll(".bar");
      // Bars[j].childNodes[0].innerHTML = temp;
      Bars[i].style.backgroundColor = "#13CE66";
   }


}
