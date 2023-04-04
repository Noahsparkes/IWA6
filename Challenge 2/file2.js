const rent = 400;
const tax = '12%';
const food = 51.7501;
const salary = 800;
const transport = 10.2;
const hourOfDay = 00;
const minuteOfDay = 00;

// Only change below this line

if (hourOfDay ==='00' && minuteOfDay ==='00'){
	const taxAsDecimal = parseInt(tax) / 100;
    const startingAfterTax = salary * (1 - taxAsDecimal);
    const balance = startingAfterTax - transport - food - rent
    
	console.log(balance.toFixed(3))
}
 

//final logged value should be R274.46