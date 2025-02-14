
let result = document.querySelector(".result")

 let tasbiix = () => {
   let currentValue = parseInt(result.textContent);
    result.textContent = currentValue + 1;

 }
   let reset = () => {
      result.textContent = 0;
   }