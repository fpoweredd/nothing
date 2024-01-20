const fruits = ['apple', 'orange', 'banana'];

// mostramos por pantalla la longitud del array
console.log(fruits.length);          

// Modificar un elemento
fruits[1] = 'pear';  
// Mostramos por pantalla que elemento hay ahora en la posición 1  
console.log(fruits[1])   
         
// Añadir un elemento al final 
fruits.push('kiwi');    
// mostramos de nuevo la longitud del array         
console.log(fruits.length);          
console.log(fruits)

fruits.pop();                        // Eliminar el último elemento
console.log(fruits.length);          // mostramos de nuevo la longitud del array