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
  
    static formatArrayStrings(strings, processedNumbers) {
      if (strings.length !== processedNumbers.length) {
        throw new Error("Both arrays must have the same length.");
      }
  
      for (let i = 0; i < strings.length; i++) {
        if (processedNumbers[i] % 2 === 0) {
          strings[i] = strings[i].toUpperCase();
        } else {
          strings[i] = strings[i].toLowerCase();
        }
      }
  
      return strings;
    }
  
    static createUserProfiles(originalNames, modifiedNames) {
      if (originalNames.length !== modifiedNames.length) {
        throw new Error("Both arrays must have the same length.");
      }
  
      let userProfiles = [];
  
      for (let i = 0; i < originalNames.length; i++) {
        userProfiles.push({
          id: i + 1,
          originalName: originalNames[i],
          modifiedName: modifiedNames[i]
        });
      }
  
      return userProfiles;
    }
  }
  
  // Example usage
  let numbers = [1, 2, 3, 4, 5];
  let strings = ["Hello", "World", "JavaScript", "Coding", "Fun"];
  
  let processedArray = ArrayProcessor.processArray(numbers);
  let formattedStrings = ArrayProcessor.formatArrayStrings(strings, processedArray);
  let userProfiles = ArrayProcessor.createUserProfiles(strings, formattedStrings);
  
  console.log(userProfiles);
  