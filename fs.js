 
//Задание 1
 var fs = require('fs');  

/*fs.writeFile('dom2.txt','Домашка 2', function(err) {  
  if (err) throw err;
  console.log('Файл записан!') 
}); 
 

fs.writeFileSync('dom2.txt','Домашка 2', function(err) {  
  if (err) throw err;
  console.log('Файл записан!') 
}); */

//Задание 2
fs.appendFile('dom2.txt', 'Домашка 2', (err) => {
  if (err) throw err;
  console.log('Файл добавлен!!');
});