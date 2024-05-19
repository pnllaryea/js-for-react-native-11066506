class ArrayProcessor {
    static processArray(numbers) {
      let result = new Array(numbers.length);
  
      for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
          result[i] = numbers[i] * numbers[i];
        } else {
          result[i] = numbers[i] * 3;
        }
      }
  
      return result;
    }
  }
  
  let numbers = [1, 2, 3, 4, 5];
  let processedArray = ArrayProcessor.processArray(numbers);
  
  for (let num of processedArray) {
    console.log(num + " ");
  }