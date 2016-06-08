'use strict';

function thousands_separators(num) {
   var ch = num.toString();
   var myArray=[];
   myArray=ch.split(".");
   ch=myArray[0];

   var start=ch.length%3;
   var temp = ch.substring(0, start);

      for(var i=start;i<ch.length;i=i+3){
         if (i === 0) {
         temp = ch.substring(i, i + 3);
         }
         else {
         temp += "," + ch.substring(i, i + 3);
            console.log(temp);
         }
   }

   if(myArray[1]) {
      temp=temp+"."+myArray[1];
   }

   return temp;
}

module.exports = thousands_separators;
