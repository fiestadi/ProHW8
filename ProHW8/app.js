//****************Task ****************/
//Используя промисы создать считалку(counting rhyme) от 10 до 1ого (count down).
function countdown(number) {
   return new Promise((resolve, reject) => {
     let count = number;
 
     let timer = setInterval(() => {
       console.log(count);
       count--;
 
       if (count === 0) {
         clearInterval(timer);
         resolve();
       }
     }, 1500);
   });
 }
 
 countdown(10)
   .then(() => {
     console.log('Countdown processed');
   });

 
