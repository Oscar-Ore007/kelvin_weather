// constant of kelvin value 
const kelvin = 293; 


// converting kelvin into celsius 
 const celsius = kelvin - 273; 
//converting celsius into newton 
let newton = celsius * (33/100)
 //converting celsius into fahrenheit
 let fahrenheit = celsius * (9/5) + 32;

 // used math.floor to round the fahrenheit temperature
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);


newton = Math.floor(newton);

console.log(`The temperature is ${newton} degrees Newton.`);
