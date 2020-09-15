// square every number in the array
      const input = [2,4,5,10];
      const squareItemFun = (inputPara)=>{
         const squareItemArray =[];
         inputPara.forEach((item)=>{
            const squareItem = Math.pow(item,2);
            squareItemArray.push(squareItem);
         });
         return squareItemArray;
      };
      const consoleStr = `The square of the items in the squareItemFUn is => `;
      console.log(consoleStr, squareItemFun([...input]));





      // filter out odd Number from the array
      const oddEvenInput = [2,5,7,9,11,12,14,13,20];
      const filterOutOddFun = (inputPara)=>{
         const evenItemArray =[];
         inputPara.forEach((item)=>{
            if(item % 2 ===0){
               evenItemArray.push(item);
            };
         });
         return evenItemArray;
      };
      let filterStr = `Array with the odd numbers filtered out =>`;
      console.log(filterStr,filterOutOddFun([...oddEvenInput]));



      // sum of items in the Array
      const sumOfFilteredArray = (inputPara)=>{
         let count =0;
         inputPara.forEach((item)=>{
            count+=item;
         });
         return count;
      };
      const sumArrStr = `The sum of the items in the filtered array is =>`;

      const sumArrInput =filterOutOddFun([...oddEvenInput]);
      console.log( sumArrStr,sumOfFilteredArray(sumArrInput));



      // task2
      // square item in the array with map
      const squareItemWithMapFun = (inputPara)=>{
         return inputPara.map((item)=>{
            return Math.pow(item,2);
         });
      };
      const squareitemStr = `Square of items in the array using Array.prototype.map =>`;
      console.log(squareitemStr ,squareItemWithMapFun([...input]));



      // filter out odd number with Array.prototype.filter
      const filterOutOddWithArrFilterFun = (inputPara)=>{
        let filterArr = inputPara.filter((item)=>{
            return item % 2 == 0;
         });
          return filterArr;
      };
      filterStr+=`with Array.prototype.filter`;
      console.log( filterStr,filterOutOddWithArrFilterFun([...oddEvenInput]));



      // add item in the array with reduce method
      const sumOfFilteredArrayWithReduceFun = (inputPara)=>{
        let reduceArr = inputPara.reduce((prev, curr)=>{
            return prev +curr;
         },0);
          return reduceArr;
      };
      const reduceStr = `Sum of item in the filtered array with Array.prototype.reduce =>`;
      console.log(reduceStr ,sumOfFilteredArrayWithReduceFun(sumArrInput));

      // task 3
      const sortArrInput = [34,39,40,31,30,32,41,36,35,33,38,37];
      const sortArrFun = (inputPara)=>{
         return inputPara.sort((firstItem,secondItem)=>{
            let sorting;
            sorting= 0;
            if(firstItem > secondItem){
              sorting=1;
            };
            else if(secondItem > firstItem){
              sorting=-1;
            };
            return sorting;
         });
      };
      const sortStr = `Array of numbers in ascending order =>`;
      console.log(sortStr, sortArrFun([...sortArrInput]));