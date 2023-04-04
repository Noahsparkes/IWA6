const primaryPhone = '0748105141';
const secondaryPhone = '0219131568';

// Only change below this line

const primaryValid = !isNaN(primaryPhone) && typeof primaryPhone  === 'string';
const secondaryValid = !isNaN(primaryPhone) && typeof secondaryPhone === 'string';

console.log('Primary phone is valid numerical string:', primaryValid);
console.log('Secondary phone is valid numerical string:', secondaryValid );