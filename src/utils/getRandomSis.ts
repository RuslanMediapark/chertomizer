export function getRandomElementsFromArray(arr: any[], numElements: number) {
    const arrCopy = [...arr];
    const result = [];
  
    for (let i = 0; i < numElements; i++) {
      if (arrCopy.length === 0) {
        break; 
      }
      const index = Math.floor(Math.random() * arrCopy.length); 
      result.push(arrCopy.splice(index, 1)[0]);
    }
  
    return result;
  }