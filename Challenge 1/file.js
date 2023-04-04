const primaryPhone = 'O748105141'; //should return false//
const secondaryPhone = '0219131568'; //should return true//

// Only change below this line

const primaryValid = !isNaN(parseInt(primaryPhone)) && typeof primaryPhone === 'string';
const secondaryValid = !isNaN(parseInt(secondaryPhone)) && typeof secondaryPhone === 'string';

console.log('Primary phone is valid numerical string:', primaryValid);
console.log('Secondary phone is valid numerical string:', secondaryValid);

