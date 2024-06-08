function string(input) {
  const length = input.length;

  
  if (length % 15 === 0) {//divisible by 15
      
      let reversed = input.split('').reverse().join('');
      return reversed.split('').map(char => char.charCodeAt(0)).join(' ');
  }

  
  if (length % 3 === 0) {//divisible by 3
      
      return input.split('').reverse().join('');
  }

  
  if (length % 5 === 0) {//divisible by 5
      
      return input.split('').map(char => char.charCodeAt(0)).join(' ');
  }

  
  return input;
}
